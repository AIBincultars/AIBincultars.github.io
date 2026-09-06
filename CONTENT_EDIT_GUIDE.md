# 个人主页内容修改指南

本项目是 Astro 静态多页面站点。英文与中文页面分别生成到 `/en/` 和 `/zh/`。

日常修改个人信息时，优先只打开 `src/data/site-content.ts`。这里集中保存个人资料、首页文字、研究兴趣、教育背景、项目、联系方式、导航文字和 SEO 文案；`.astro` 组件只负责页面布局。路由与站点技术配置单独位于 `src/config/site.ts`，公开论文和研究合作由 Astro Content Collections 管理。

## 修改位置总览

| 页面 | 内容 | 页面组件路径 | 数据文件路径 | 对应字段 | 修改方法 |
| --- | --- | --- | --- | --- | --- |
| Home | 姓名、教育背景 | `src/components/CompactHero.astro` | `src/data/site-content.ts` | `profile.name`、`profile.alternateName`、`education` | 修改首页姓名与两条教育信息 |
| Home | 代表性论文 | `src/pages/[lang]/index.astro`、`src/components/PublicationList.astro` | `src/content/publications/*.md` | `featured`、`order` | `featured: true` 进入首页，`order` 控制顺序 |
| Home | 项目 | `src/pages/[lang]/index.astro`、`src/components/ProjectList.astro` | `src/data/site-content.ts` | `projects.items` | 没有公开项目时自动隐藏；有公开项目后只添加公开条目 |
| Home | 研究合作预览 | `src/pages/[lang]/index.astro`、`src/components/CollaborationList.astro` | `src/content/collaborations/*.md` | `title`、`officialUrl`、`featured`、`order` | 按公开合作机构展示，公开论文作为合作依据 |
| Publications | 论文列表 | `src/pages/[lang]/publications.astro`、`src/components/PublicationList.astro` | `src/content/publications/*.md`、`src/data/site-content.ts` | `title`、`authors`、`venue`、`year`、公开链接；`profile.publicationAuthorName` | 作者统一使用“名首字母 + 姓氏”，新建经过 schema 校验的 Markdown 条目 |
| Collaborations | 合作机构 | `src/pages/[lang]/collaborations.astro`、`src/components/CollaborationList.astro` | `src/content/collaborations/*.md` | `title`、`officialUrl`、`collaborators`、`relatedOutputs` | 使用机构正式名称、官网及公开共同成果；合作者姓名使用“名首字母 + 姓氏” |
| Home | Research Interests | `src/components/CompactHero.astro` | `src/data/site-content.ts` | `researchInterests.statement`、`researchInterests.items` | 维护中英文研究概述与长期、概括且可公开的研究兴趣 |
| Projects | 项目页面 | `src/pages/[lang]/projects.astro`、`src/components/ProjectList.astro` | `src/data/site-content.ts` | `projects.intro`、`projects.items` | 中英文路由共用公开项目数据；空数组时自动返回首页 |
| Projects | 路由与导航 | `src/pages/[lang]/projects.astro`、`src/components/Header.astro` | `src/config/site.ts`、`src/data/site-content.ts` | `paths.*.projects`、`navigation.projects`、`metadata.projects` | 技术路径在 config 中修改；导航与 SEO 文字在 content 中修改 |
| Contact | 公开联系方式 | `src/components/CompactHero.astro` | `src/data/site-content.ts` | `contact` | 只填写公开邮箱和学术主页 |
| Language | 语言路由与切换 | `src/components/LanguageSwitcher.astro`、`src/pages/index.astro` | `src/config/site.ts`、`src/data/site-content.ts` | `paths`、`languageStorageKey`、`labels.switchTo` | 技术配置与可见文字分别修改 |
| Theme | 颜色、字体、宽度 | `src/styles/global.css` | `src/styles/global.css` | `:root` CSS 变量 | 修改强调色、宽度、字体和间距 |
| Accordion | 默认展开状态 | `src/components/AccordionSection.astro` 及对应页面 | 对应页面组件 | `open` 属性 | 首页项目与研究合作默认收起；代表性论文默认展开 |

## 安装、开发、构建与预览

```bash
npm install
npm run dev -- --host
npm run check
npm run build
npm run preview -- --host
```

- `npm run dev -- --host` 启动开发服务器。
- `npm run check` 执行 Astro 和 TypeScript 检查。
- `npm run build` 将所有语言路由静态生成到 `dist/`。
- `npm run preview -- --host` 本地预览生产构建。

## 添加一篇已公开论文

在 `src/content/publications/` 新建 Markdown 文件。字段由 `src/content/config.ts` 的 `publications` schema 校验：

```yaml
---
title: "正式论文标题"
authors:
  - "Z. Kang"
venue: "正式会议、期刊或公开平台名称"
year: 2026
publicDate: "2026-08-01"
status: "Preprint"
featured: true
order: 3
paperUrl: "https://公开论文文件"
arxivUrl: "https://公开摘要页面"
---
```

- 标题、作者顺序和 venue 必须与公开页面一致；作者展示统一使用“名首字母 + 姓氏”，例如 `Z. Kang`。
- `src/data/site-content.ts` 中的 `profile.publicationAuthorName` 用于突出显示本人姓名，必须与论文条目中的缩写完全一致。
- `publicDate` 填写论文首次公开日期（`YYYY-MM-DD`），并以 arXiv、出版社或会议页面为依据。
- `paperUrl`、`publisherUrl`、`arxivUrl` 或 `projectUrl` 至少存在一个真实地址。
- 没有 Code、Demo 或 Project Page 时直接省略字段。
- `featured: true` 使条目进入首页预览；完整 Publications 页面始终按年份组织。
- 不要为缺失字段填写伪链接或 `#`。

## 添加一项已公开合作

在 `src/content/collaborations/` 新建 Markdown 文件：

```yaml
---
title:
  zh: "机构正式中文名称"
  en: "Official institution name in English"
officialUrl:
  zh: "https://机构中文官网"
  en: "https://institution-official-website"
collaborators:
  - "公开页面中的正式姓名"
relatedOutputs:
  - title: "正式成果标题"
    url: "https://公开成果页面"
featured: true
order: 3
---
```

- `title` 使用机构官网或论文 affiliation 中的正式名称，不自行缩写或扩展机构层级。
- `officialUrl` 必须指向机构官网；中英文官网相同时可以填写同一地址。
- 共同作者姓名必须来自公开成果页面，并且确实与该机构存在公开关联。
- `relatedOutputs` 至少包含一个真实公开成果地址，它同时作为该合作的公开依据。
- 只描述共同署名或联合发表等能够从公开页面直接确认的关系。
- 不根据一次共同署名推断导师关系、长期合作状态、职称或单位关系。
- 没有公开成果支撑时不要创建条目。

## 添加一项已公开项目

公开项目统一添加到 `src/data/site-content.ts` 顶部的 `publicProjects` 数组：

```ts
{
  title: {
    zh: '公开项目正式名称',
    en: 'Official Public Project Name',
  },
  description: {
    zh: '公开且概括性的项目说明。',
    en: 'A concise description supported by the public project page.',
  },
  publicUrl: 'https://公开项目页面',
}
```

- 项目至少需要一个真实可访问的公开主页、代码仓库或 Demo。
- `title` 与 `description` 必须同时填写中英文；正式项目名无需强制翻译时，两种语言可使用相同原文。
- 没有公开项目时保持 `publicProjects` 为空，首页模块与导航入口会自动隐藏，Projects 路由会返回首页。
- 不得将未公开项目写入数组，也不要用隐藏字段、内部代号或“Coming soon”保存未来计划。

## 更换头像

1. 使用本人真实且允许公开的照片替换 `src/assets/images/ziyue-kang.jpg`。
2. 在 `src/data/site-content.ts` 的 `profile.portrait.alt` 中同步更新中英文替代文本。
3. 当前样式使用 1:1 小头像和 `object-position`；如人物位置发生变化，在 `src/styles/global.css` 的 `.profile-photo` 中调整。
4. Astro 会在构建时自动优化图片，不要手工修改 `dist/`。

## 中英文和路由

- 所有普通界面文字和个人简介使用 `{ zh, en }` 同时维护。
- 论文标题、作者、venue、项目正式名称和仓库名称保持官方原文。
- `src/config/site.ts` 的 `paths` 定义同一页面的中英文路径，`siteConfig` 保存站点 URL 和语言存储键。
- `src/data/site-content.ts` 的 `navigation`、`labels` 和 `metadata` 保存所有可见的中英文界面文字与 SEO 文案。
- Language Switcher 会从当前页面切换到对应语言页面，并将选择写入 `personal-site-language`。
- 根路由优先读取已保存语言；没有记录时，中文浏览器进入 `/zh/`，其他浏览器进入 `/en/`。
- 直接访问任一语言子页面时，以 URL 中的语言为准。
- Projects 页面由 `src/pages/[lang]/projects.astro` 生成；旧的 About 路由重定向到相应语言首页，旧的 Experience 路由重定向到相应语言 Projects 页面。

## 修改首页姓名、教育与研究兴趣

- 姓名：修改 `src/data/site-content.ts` 的 `profile.name` 与 `profile.alternateName`。
- 首页教育背景直接读取 `education`。新增记录时，同时填写学校、学位、专业、时间和地点的中英文版本；`endDate: null` 表示当前在读。
- 研究概述：修改 `researchInterests.statement.zh` 与 `researchInterests.statement.en`。
- 研究兴趣：修改 `researchInterests.items[].title.zh` 与 `researchInterests.items[].title.en`；首页紧凑显示三个方向。

普通界面文字必须同时填写 `.zh` 和 `.en`。教育与研究兴趣仅写能够确认且适合公开的内容。

## Accordion 默认规则

- Home：有公开数据时 Projects 与合作预览默认折叠，Selected Publications 默认展开；Research Interests 在 Hero 中以紧凑行直接显示。
- Publications：最新年份默认展开，其他年份默认折叠。
- Collaborations：第一个公开合作分组默认展开，其余默认折叠。
- Publications 有多个年份时显示“全部展开 / 全部收起”；Collaborations 超过 3 个分组时才显示，避免少量内容出现多余控件。

原生 `<details>` 与 `<summary>` 提供 Enter、Space 和键盘焦点能力。`src/layouts/BaseLayout.astro` 同步维护 `aria-expanded`，动画与 reduced-motion 规则在 `src/styles/global.css` 中。

## 补充 TODO(profile)

执行：

```bash
rg -n "TODO\(profile\)" src CONTENT_EDIT_GUIDE.md
```

当前 `src/` 中没有 `TODO(profile)` 标记，也没有保存任何未公开项目占位数据。

## 公开范围判断

论文必须已有会议、期刊、出版社、arXiv 或公开项目页面。项目必须已有公开主页、代码仓库或 Demo。合作必须能够由公开共同署名成果、机构页面或其他公开资料直接确认。状态不明确时直接省略。

不得把非公开条目写入 `src/data/site-content.ts`、`src/content/`、组件、注释、SEO 元数据或静态资源。即使增加隐藏字段或条件渲染，这些数据仍可能进入浏览器构建产物，因此不能以“先保存、暂不显示”的方式维护私密内容。

## 空内容行为

- Home 仅在有公开数据时渲染发表、项目或合作预览。
- Header 根据对应数据是否有内容生成 Publications、Projects 和 Collaborations 导航。
- Publications、Projects 或 Collaborations 为空时，相应入口自动隐藏；直接访问空的 Projects 页面会返回对应语言首页。
- 修改集合后运行 `npm run build`，检查 `dist/` 中的路由和导航是否符合预期。
