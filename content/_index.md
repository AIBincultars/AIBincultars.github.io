---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: features
    content:
      title: Technical Skills
      items:
        - name: Programming & Frameworks
          description: 'Python,C++ , Pytorch, Tensorflow, LangChain, FastAPI, llama.cpp, Xinference'
          icon: code
          icon_pack: fas
        - name: AI & Machine Learning
          description: 'Computer Vision, LLM Fine-Tuning, RAG, Multimodal Learning, Deep Learning, Gaussian Processes'
          icon: robot
          icon_pack: fas
        - name: Languages
          description: 'English(CET-4:469, CET-6:472)'
          icon: language
          icon_pack: fas
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Student Research Lead
          company: Joint Innovation Lab of AI Image Compression, SUSTech
          company_url: 'http://dianzhi.www.sust.edu.cn/info/4667/37512.htm'
          company_logo: org-gc
          location: Shaanxi, Xian
          date_start: '2024-11-01'
          date_end: ''
          description: |2-
              Served as the first student author and project lead for two key research papers:
              * **Few-Shot Learning**: Investigated Bayesian few-shot image classification using Gaussian Processes, enhancing model generalization in data-scarce scenarios.
              * **Sparse-Data Vision**: Designed a novel Frequency-Adaptive Discrete Cosine-ViT-ResNet architecture that outperformed ResNet50 by 59.51%.
              * **Supervisor**: Prof. Weichuan Zhang, Head of the Lab. (Reference available upon request)
        - title: Team Member, LLM Engineering
          company: Complex Environment Intelligent Perception Team, SUSTech
          company_url: 'http://dianzhi.www.sust.edu.cn/info/4667/37862.htm'
          company_logo: org-x
          location: Shaanxi, Xian
          date_start: '2023-09-01'
          date_end: ''
          description: |2-
              Managed the end-to-end pipeline for applied large language model research, focusing on two key areas:
              * **Efficient LLM Fine-Tuning:** Implemented Parameter-Efficient Fine-Tuning (PEFT) techniques, specifically LoRA, to adapt large models for specialized tasks while minimizing computational overhead.
              * **On-Premise Deployment & Serving:** Engineered the full deployment workflow, including model quantization to GGUF for hardware efficiency and building high-performance inference services with FastAPI.
              * **Supervisor**: Prof. Haiyang Yao, Head of the Team. (Reference available upon request)
        - title: Team Member, Intelligent Acoustics
          company: Intelligent Acoustics & Immersive Communication Team, SUSTech
          company_url: 'http://dianzhi.www.sust.edu.cn/info/4667/38002.htm'
          company_logo: org-x
          location: Shaanxi, Xian
          date_start: '2023-09-01'
          date_end: ''
          description: |2-
              Developed feature extraction pipelines for environmental sound classification and re-engineered signal processing algorithms from MATLAB to high-performance Python code.
    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Awards & Honors'
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - date_end: '2025-05-01'
          date_start: '2025-07-01'
          description: Project Lead for "GuardianEye," an intelligent report generation system for endangered animals.Independently designed a novel data-driven adaptive DCT algorithm and a dual-branch fusion model to solve small-sample recognition challenges, boosting accuracy by 59%.
          organization: China Association for Artificial Intelligence
          organization_url: https://www.caai.cn/index.php?s=/Home/Index/index.html
          title: National First Prize, The 27th China Robotics & AI Competition (AI Innovation Track)
          url: https://www.caairobot.com/
        - date_end: '2024-08-01'
          date_start: '2024-01-01'
          description: Project Lead for "AnYuXinQiao," a real-time, bi-directional sign language translation engine.Innovated by extending MediaPipe keypoints and building a 4-layer LSTM encoder-decoder to achieve high-accuracy, real-time translation.
          organization: China Association for Artificial Intelligence
          organization_url: https://www.caai.cn/index.php?s=/Home/Index/index.html
          title: National First Prize, The 26th China Robotics & AI Competition (New Quality Productive Forces Track)
          url: https://www.caairobot.com/
        - date_end: '2025-02-01'
          date_start: '2025-07-01'
          description: Project Lead for "Graph-RAG Tutor Assistant," a system combining Knowledge Graphs and RAG to mitigate LLM hallucination. Fine-tuned the DeepSeekR1-7B model using LoRA and Prefix-Tuning.
          organization: Talent exchange center of Ministry of industry and information technology
          organization_url: https://www.miitec.cn/
          title: National Third Prize,The 16th Lanqiao Cup National Software Competition (Digital Innovation Track)
          url: https://dasai.lanqiao.cn/
        - date_end: '2024-06-01'
          date_start: '2024-03-01'
          organization: Talent exchange center of Ministry of industry and information technology
          organization_url: https://www.miitec.cn/
          title: National Third Prize,The 15th Lanqiao Cup National Software Competition (AI Project Practical Track)
          url: https://dasai.lanqiao.cn/
        - date_end: '2024-09-01'
          date_start: '2024-12-01'
          organization: Talent exchange center of Ministry of industry and information technology
          organization_url: https://www.miitec.cn/
          title: National Third Prize, 2024 RAICOM Robot Developer Competition (Large Model Application Track)
          url: https://www.raicom.com.cn/match.html
    design:
      columns: '2'
  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Deep Learning
          tag: Deep Learning
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  - block: tag_cloud
    content:
      title: Popular Topics
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: edu.kangziyue@gmail.com
      phone: 888 888 88 88
      appointment_url: 'https://calendly.com'
      address:
        street: 450 Serra Mall
        city: Stanford
        region: CA
        postcode: '94305'
        country: United States
        country_code: US
      directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      office_hours:
        - 'Monday 10:00 to 13:00'
        - 'Wednesday 09:00 to 10:00'
      contact_links:
        - icon: twitter
          icon_pack: fab
          name: DM Me
          link: 'https://twitter.com/Twitter'
        - icon: skype
          icon_pack: fab
          name: Skype Me
          link: 'skype:echo123?call'
        - icon: video
          icon_pack: fas
          name: Zoom Me
          link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---
