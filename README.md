# 康子越 | Ziyue Kang

西安交通大学控制科学与工程硕士研究生，本科毕业于陕西科技大学人工智能专业。我的研究聚焦于面向可控、数据高效生成的结构化与多模态表征学习。

I am an M.S. student in Control Science and Engineering at Xi'an Jiaotong University. I received my B.Eng. in Artificial Intelligence from Shaanxi University of Science & Technology. My research focuses on structured and multimodal representation learning for controllable and data-efficient generation.

## 研究兴趣 | Research Interests

- 结构化与多模态表征学习 · Structured and Multimodal Representation Learning
- 可控生成模型 · Controllable Generative Modeling
- 数据高效学习 · Data-Efficient Learning

## 联系方式 | Contact

- 个人主页：[aibincultars.github.io](https://aibincultars.github.io/)
- Google Scholar：[Ziyue Kang](https://scholar.google.com/citations?user=ltaBNZIAAAAJ&hl=en)
- Email：[edu.kangziyue@gmail.com](mailto:edu.kangziyue@gmail.com)

## 项目网页 | Project Pages

- [UOT-IR](https://aibincultars.github.io/projects/uot-ir/)：页面使用 Astro，入口为 `src/pages/projects/uot-ir/index.astro`，组件位于 `src/components/uot-ir/`，案例定义位于 `src/data/uot-ir.ts`。MIDI、图片与指标 JSON 维护在 `public/projects/uot-ir/assets/`，算法代码维护在 [UOT-IR 仓库](https://github.com/AIBincultars/UOT-IR)。
- `src/pages/UOT-IR/index.astro` 为旧项目地址提供跳转。项目与论文入口分别维护在 `src/data/site-content.ts` 和 `src/content/publications/uot-ir.md`。
- 项目页通过 `src/layouts/ResearchProjectLayout.astro` 复用主页导航、页脚、字体与 `src/styles/global.css` 中的主题变量。

```bash
npm ci
npm run check
npm run build
```

推送到 `main` 后，现有 GitHub Actions 工作流会构建并发布个人主页及项目网页。
