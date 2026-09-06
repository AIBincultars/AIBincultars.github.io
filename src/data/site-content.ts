import portrait from '../assets/images/ziyue-kang.jpg';
import type { LocalizedText } from '../config/site';

export type PublicProject = {
  title: LocalizedText;
  description: LocalizedText;
  publicUrl: string;
};

const publicProjects: PublicProject[] = [];

// 日常修改个人信息和中英文页面文案时，只需要编辑这个文件。
// 未发表或未公开的研究内容不得写入前端数据。
export const siteContent = {
  profile: {
    name: {
      zh: '康子越',
      en: 'Ziyue Kang',
    },
    alternateName: {
      zh: 'Ziyue Kang',
      en: '康子越',
    },
    publicationAuthorName: 'Z. Kang',
    portrait: {
      src: portrait,
      alt: {
        zh: '康子越的个人照片',
        en: 'Portrait of Ziyue Kang',
      },
    },
  },

  researchInterests: {
    statement: {
      zh: '我的研究聚焦于面向可控、数据高效生成的结构化与多模态表征学习。',
      en: 'My research focuses on structured and multimodal representation learning for controllable and data-efficient generation.',
    },
    items: [
      {
        title: {
          zh: '结构化与多模态表征学习',
          en: 'Structured and Multimodal Representation Learning',
        },
      },
      {
        title: {
          zh: '可控生成模型',
          en: 'Controllable Generative Modeling',
        },
      },
      {
        title: {
          zh: '数据高效学习',
          en: 'Data-Efficient Learning',
        },
      },
    ],
  },

  education: [
    {
      institution: {
        zh: '西安交通大学',
        en: "Xi'an Jiaotong University",
      },
      degree: {
        zh: '硕士研究生',
        en: 'M.S. student',
      },
      major: {
        zh: '控制科学与工程',
        en: 'Control Science and Engineering',
      },
      startDate: '2026',
      endDate: null as string | null,
      expectedEndDate: '2029' as string | null,
      location: {
        zh: '中国西安',
        en: "Xi'an, China",
      },
    },
    {
      institution: {
        zh: '陕西科技大学',
        en: 'Shaanxi University of Science & Technology',
      },
      degree: {
        zh: '工学学士',
        en: 'B.Eng.',
      },
      major: {
        zh: '人工智能',
        en: 'Artificial Intelligence',
      },
      startDate: '2022',
      endDate: '2026' as string | null,
      expectedEndDate: null as string | null,
      location: {
        zh: '中国西安',
        en: "Xi'an, China",
      },
    },
  ],

  projects: {
    intro: {
      zh: '公开项目。',
      en: 'Public projects.',
    },
    items: publicProjects,
  },

  contact: {
    email: 'edu.kangziyue@gmail.com',
    github: 'https://github.com/AIBincultars',
    scholar: 'https://scholar.google.com/citations?user=ltaBNZIAAAAJ&hl=en',
  },

  navigation: {
    home: { zh: '首页', en: 'Home' },
    publications: { zh: '论文', en: 'Publications' },
    collaborations: { zh: '合作', en: 'Collaborations' },
    projects: { zh: '项目', en: 'Projects' },
  },

  labels: {
    languageNames: { zh: '中文', en: 'English' },
    languageShort: { zh: '中', en: 'EN' },
    skipToContent: { zh: '跳到主要内容', en: 'Skip to main content' },
    primaryNavigation: { zh: '主导航', en: 'Primary navigation' },
    mobileNavigation: { zh: '移动端导航', en: 'Mobile navigation' },
    menu: { zh: '菜单', en: 'Menu' },
    switchTo: { zh: '切换到英文', en: 'Switch to Chinese' },
    email: { zh: '邮箱', en: 'Email' },
    github: { zh: 'GitHub', en: 'GitHub' },
    scholar: { zh: 'Google Scholar', en: 'Google Scholar' },
    selectedPublications: { zh: '代表性论文', en: 'Selected Publications' },
    publicCollaborations: { zh: '研究合作', en: 'Research Collaborations' },
    viewAllPublications: { zh: '查看全部论文', en: 'View all publications' },
    viewAllCollaborations: { zh: '查看全部合作', en: 'View all collaborations' },
    viewAllProjects: { zh: '查看全部项目', en: 'View all projects' },
    publications: { zh: '论文', en: 'Publications' },
    publicationsIntro: { zh: '已公开论文与预印本，按年份排列。', en: 'Public papers and preprints, organized by year.' },
    collaborations: { zh: '合作', en: 'Collaborations' },
    collaborationsIntro: { zh: '按公开合作机构整理的研究成果。', en: 'Public research outputs organized by collaborating institution.' },
    projects: { zh: '项目', en: 'Projects' },
    researchInterests: { zh: '研究兴趣', en: 'Research Interests' },
    education: { zh: '教育背景', en: 'Education' },
    institutionPage: { zh: '机构主页', en: 'Institution' },
    officialWebsite: { zh: '访问官方网站', en: 'Official website' },
    collaborators: { zh: '公开共同作者', en: 'Public co-authors' },
    relatedOutputs: { zh: '相关成果', en: 'Related outputs' },
    paper: { zh: '论文', en: 'Paper' },
    arxiv: { zh: 'arXiv', en: 'arXiv' },
    publisher: { zh: '出版页面', en: 'Publisher' },
    code: { zh: '代码', en: 'Code' },
    projectPage: { zh: '项目主页', en: 'Project Page' },
    demo: { zh: '演示', en: 'Demo' },
    publicPreprint: { zh: '预印本', en: 'Preprint' },
    publicDate: { zh: '首次公开', en: 'First posted' },
    present: { zh: '至今', en: 'Present' },
    expected: { zh: '预计', en: 'expected' },
    expandAll: { zh: '全部展开', en: 'Expand all' },
    collapseAll: { zh: '全部收起', en: 'Collapse all' },
    expandSection: { zh: '展开该区域', en: 'Expand section' },
    collapseSection: { zh: '收起该区域', en: 'Collapse section' },
    homeRedirect: { zh: '正在前往首页…', en: 'Redirecting to Home…' },
  },

  metadata: {
    home: {
      title: { zh: '康子越｜科研主页', en: 'Ziyue Kang | Research Homepage' },
      description: {
        zh: '康子越的个人科研主页，包含教育背景、研究兴趣、公开论文、项目与合作。',
        en: 'Personal research homepage of Ziyue Kang, featuring education, research interests, public papers, projects, and collaborations.',
      },
    },
    publications: {
      title: { zh: '论文｜康子越', en: 'Publications | Ziyue Kang' },
      description: { zh: '康子越已公开的论文与预印本。', en: 'Public papers and preprints by Ziyue Kang.' },
    },
    collaborations: {
      title: { zh: '合作｜康子越', en: 'Collaborations | Ziyue Kang' },
      description: {
        zh: '康子越按公开合作机构整理的研究成果。',
        en: 'Public research outputs by Ziyue Kang, organized by collaborating institution.',
      },
    },
    projects: {
      title: { zh: '项目｜康子越', en: 'Projects | Ziyue Kang' },
      description: {
        zh: '康子越的公开项目。',
        en: 'Public projects by Ziyue Kang.',
      },
    },
  },
} as const;
