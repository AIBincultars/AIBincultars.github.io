---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

title: Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:
  - title: 课题负责人 (Project Lead)
    company: 陕西科技大学AI图像压缩编解码联合创新实验室 (AI Image Compression Joint Innovation Lab, SUST)
    company_url: ''
    company_logo: ''
    location: Xi'an, China
    date_start: '2024-11-01'
    date_end: ''
    description: |2-
        * 负责“基于高斯过程的贝叶斯小样本细粒度图像分类研究”课题中的模型设计、对比实验、科技绘图及论文撰写。
        * 设计并实现了适用于小样本学习的特征提取器，结合变分推断和镜像梯度下降等方法提升模型泛化能力。
        * 为高斯过程模型探索并设计了多种核函数（如RBF核、多项式核），以提高预测精度。
        * 引入求解伪逆方法保证了变分推断和后验预测的数值稳定性。

  - title: 学生第一负责人 (Student Lead)
    # --- FIX START: Corrected the quoting on the company line below ---
    company: '"芯智引擎"AI共享网络文化工作室 ("Core Intelligence Engine" AI Sharing Studio)'
    # --- FIX END ---
    company_url: ''
    company_logo: ''
    location: Xi'an, China
    date_start: '2024-10-01'
    date_end: ''
    description: |2-
        * 成立工作室，利用大模型RAG系统优化校园工作流程。
        * 构建以智能问答为核心的功能，实现政策解读自动化、教务办事高效化和校园信息服务智能化。
        * 该项目成功申报为校级网络文化工作室，并荣获“2025全国高校易班技术创新大赛”国家三等奖。

  - title: 项目核心开发者 (Core Developer)
    company: 第二十六届中国机器人及人工智能大赛 (The 26th China Robot and AI Competition)
    company_url: ''
    company_logo: ''
    location: Online
    date_start: '2024-01-01'
    date_end: '2024-08-01'
    description: |2-
        * 负责“人工智能背景下听障失语人群智能辅助设计”项目。
        * 使用 OpenCV 和 MediaPipe 开发了基于计算机视觉的实时手势识别系统。
        * 利用 MediaPipe Hands 模型提取手部21个关键点坐标，并利用卷积神经网络（CNN）设计并实现了手势识别算法。

---
