(() => {
  "use strict";

  const content = {
    zh: {
      pageLanguage: "zh-CN",
      status: "学术主页",
      typingStatus: "正在输入…",
      labels: {
        about: "关于我",
        blog: "Blog",
        contact: "联系我"
      },
      submenu: {
        profile: "个人简介",
        education: "教育经历",
        work: "工作经历",
        research: "科研经历",
        publications: "学术成果"
      },
      welcome: [
        "您好，我是<strong>费天浩（Tianhao Fei）</strong>。欢迎访问我的交互式学术主页。",
        "您可以通过下方菜单了解我的教育背景、研究经历、学术成果与联系方式。"
      ],
      stories: {
        profile: {
          question: "我想进一步了解你。",
          answers: [
            '如果您希望进一步了解我，欢迎访问我的<a href="/about/">个人主页</a>。'
          ]
        },
        education: {
          question: "请介绍一下你的教育经历。",
          answers: [
            "2020年9月，我进入北京科技大学自动化学院学习，并于2024年6月获得自动化专业工学学士学位。",
            "2024年9月，我继续在北京科技大学自动化学院攻读控制工程硕士学位。目前GPA为<strong>3.9/4.0</strong>，平均成绩为<strong>90.1/100</strong>，预计于2027年6月毕业。",
            "我计划于2027年秋季开始攻读博士学位，目前正在积极寻找与研究兴趣契合的机会。"
          ]
        },
        work: {
          question: "请介绍一下你的工作经历。",
          answers: [
            '自2026年7月起，我在国家电网有限公司旗下的中国电力科学研究院实习，主要参与运维工单推荐系统的研究与开发。详情请参阅我的<a href="/about/work/">工作经历</a>。'
          ]
        },
        research: {
          question: "请介绍一下你的科研经历。",
          answers: [
            '硕士期间，我的研究主要涉及控制理论，包括自适应控制、鲁棒控制与最优控制，以及自适应动态规划和博弈论。详情请参阅我的<a href="/about/research/">科研经历</a>。',
            "下一阶段，我希望将理论方法与实际系统结合，开展更具现实价值的研究。"
          ]
        },
        publications: {
          question: "你有哪些学术成果？",
          answers: [
            "截至目前，我已发表<strong>5篇期刊论文</strong>和<strong>3篇会议论文</strong>，并申请了若干项专利。",
            '完整论文列表请参阅我的<a href="/about/publications/">Publications</a>页面，也可访问<a href="https://scholar.google.com/citations?hl=en&tzom=-480&user=-kMGVUAAAAAJ" target="_blank" rel="noopener">Google Scholar</a>或<a href="https://orcid.org/0009-0000-0169-1294" target="_blank" rel="noopener">ORCID</a>。'
          ]
        },
        contact: {
          question: "如何与你联系？",
          answers: [
            "如果您对我的研究感兴趣，并有合适的合作机会或博士名额，欢迎与我联系。",
            '邮箱：<a href="mailto:feith@ieee.org">feith@ieee.org</a>',
            '电话：<a href="tel:+8618201430306">(+86) 182 0143 0306</a>',
            "微信：FTH18201430306"
          ]
        }
      }
    },
    en: {
      pageLanguage: "en",
      status: "Academic Profile",
      typingStatus: "Typing…",
      labels: {
        about: "About",
        blog: "Blog",
        contact: "Contact"
      },
      submenu: {
        profile: "Profile",
        education: "Education",
        work: "Experience",
        research: "Research",
        publications: "Publications"
      },
      welcome: [
        "Hello, I am <strong>Tianhao Fei</strong>. You can also call me <strong>Feith</strong>. Welcome to my interactive academic profile.",
        "Use the menu below to explore my education, research, publications, and contact details."
      ],
      stories: {
        profile: {
          question: "I would like to learn more about you.",
          answers: [
            'You can find a fuller introduction on my <a href="/about/">personal profile</a>.'
          ]
        },
        education: {
          question: "Could you introduce your educational background?",
          answers: [
            "I began my studies at the School of Automation and Electrical Engineering, University of Science and Technology Beijing, in September 2020. I received a B.Eng. degree in Automation in June 2024.",
            "In September 2024, I continued at USTB as an M.Eng. student in Control Engineering. My current GPA is <strong>3.9/4.0</strong>, with an average score of <strong>90.1/100</strong>. I expect to graduate in June 2027.",
            "I plan to begin a PhD in Fall 2027 and am actively seeking opportunities aligned with my research interests."
          ]
        },
        work: {
          question: "Could you introduce your professional experience?",
          answers: [
            'Since July 2026, I have been an intern at China Electric Power Research Institute, a research institute affiliated with State Grid Corporation of China. My work focuses on recommendation systems for power-system inspection work orders. Further details are available on my <a href="/about/work/">Experience</a> page.'
          ]
        },
        research: {
          question: "Could you introduce your research experience?",
          answers: [
            'During my master’s studies, my research has focused on control theory—including adaptive, robust, and optimal control—along with adaptive dynamic programming and game theory. Further details are available on my <a href="/about/research/">Research</a> page.',
            "In the next stage, I hope to connect theoretical methods with real-world systems and pursue research with clearer practical value."
          ]
        },
        publications: {
          question: "What academic work have you published?",
          answers: [
            "To date, I have published <strong>five journal papers</strong> and <strong>three conference papers</strong>, and have filed several patent applications.",
            'For a complete list, please visit my <a href="/about/publications/">Publications</a> page, <a href="https://scholar.google.com/citations?hl=en&tzom=-480&user=-kMGVUAAAAAJ" target="_blank" rel="noopener">Google Scholar</a>, or <a href="https://orcid.org/0009-0000-0169-1294" target="_blank" rel="noopener">ORCID</a>.'
          ]
        },
        contact: {
          question: "How can I contact you?",
          answers: [
            "If my research interests you and you would like to discuss a potential collaboration or PhD opportunity, please feel free to contact me.",
            'Email: <a href="mailto:feith@ieee.org">feith@ieee.org</a>',
            'Phone: <a href="tel:+8618201430306">(+86) 182 0143 0306</a>',
            "WeChat: FTH18201430306"
          ]
        }
      }
    }
  };

  const chatWindow = document.getElementById("chat-window");
  const messageList = document.getElementById("message-list");
  const statusElement = document.getElementById("chat-status");
  const aboutButton = document.getElementById("about-button");
  const aboutMenu = document.getElementById("about-menu");
  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  const storyButtons = [...document.querySelectorAll("[data-story]")];
  const menuLabelElements = [...document.querySelectorAll("[data-label]")];
  const beijingTimeElement = document.getElementById("beijing-time");

  let language = localStorage.getItem("profile-language") === "en" ? "en" : "zh";
  let activeRun = 0;
  let busy = false;

  const wait = (milliseconds) => new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

  function updateBeijingTime() {
    const now = new Date();
    const timeText = new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now);

    beijingTimeElement.textContent = timeText;
    beijingTimeElement.dateTime = now.toISOString();
  }

  function scrollToBottom(behavior = "smooth") {
    window.requestAnimationFrame(() => {
      chatWindow.scrollTo({
        top: chatWindow.scrollHeight,
        behavior
      });
    });
  }

  function createAvatar(type) {
    if (type === "received") {
      const avatar = document.createElement("img");
      avatar.className = "message-avatar";
      avatar.src = "/img/fth.jpg";
      avatar.alt = "";
      return avatar;
    }

    const avatar = document.createElement("span");
    avatar.className = "message-avatar visitor-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "V";
    return avatar;
  }

  function appendMessage(type, html) {
    const row = document.createElement("div");
    row.className = `message ${type}`;

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = `<p>${html}</p>`;

    const avatar = createAvatar(type);
    if (type === "received") {
      row.append(avatar, bubble);
    } else {
      row.append(bubble, avatar);
    }

    messageList.appendChild(row);
    scrollToBottom();
    return row;
  }

  function appendTyping() {
    const row = document.createElement("div");
    row.className = "message received";
    row.setAttribute("aria-label", content[language].typingStatus);

    const bubble = document.createElement("div");
    bubble.className = "bubble typing-bubble";
    bubble.innerHTML = "<span></span><span></span><span></span>";

    row.append(createAvatar("received"), bubble);
    messageList.appendChild(row);
    scrollToBottom();
    return row;
  }

  function setControlsDisabled(disabled) {
    storyButtons.forEach((button) => {
      button.disabled = disabled;
    });
    languageButtons.forEach((button) => {
      button.disabled = disabled;
    });
  }

  function closeAboutMenu() {
    aboutMenu.hidden = true;
    aboutButton.setAttribute("aria-expanded", "false");
  }

  async function showStory(storyName) {
    if (busy) {
      return;
    }

    const story = content[language].stories[storyName];
    if (!story) {
      return;
    }

    const runId = ++activeRun;
    busy = true;
    setControlsDisabled(true);
    closeAboutMenu();
    appendMessage("sent", story.question);

    for (const answer of story.answers) {
      if (runId !== activeRun) {
        break;
      }

      statusElement.textContent = content[language].typingStatus;
      const typingRow = appendTyping();
      const plainLength = answer.replace(/<[^>]+>/g, "").length;
      const delay = Math.min(1350, Math.max(620, 440 + plainLength * 8));
      await wait(delay);

      if (runId !== activeRun) {
        typingRow.remove();
        break;
      }

      typingRow.remove();
      appendMessage("received", answer);
      await wait(180);
    }

    if (runId === activeRun) {
      statusElement.textContent = content[language].status;
      busy = false;
      setControlsDisabled(false);
    }
  }

  function updateInterfaceText() {
    const current = content[language];
    document.documentElement.lang = current.pageLanguage;
    statusElement.textContent = current.status;

    menuLabelElements.forEach((element) => {
      element.textContent = current.labels[element.dataset.label];
    });

    storyButtons.forEach((button) => {
      if (button.closest("#about-menu")) {
        button.textContent = current.submenu[button.dataset.story];
      }
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    });
  }

  function resetConversation() {
    activeRun += 1;
    busy = false;
    setControlsDisabled(false);
    closeAboutMenu();
    messageList.replaceChildren();
    content[language].welcome.forEach((message) => {
      appendMessage("received", message);
    });
    chatWindow.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }

  function setLanguage(nextLanguage) {
    if (!content[nextLanguage] || nextLanguage === language || busy) {
      return;
    }

    language = nextLanguage;
    localStorage.setItem("profile-language", language);
    updateInterfaceText();
    resetConversation();
  }

  aboutButton.addEventListener("click", () => {
    const willOpen = aboutMenu.hidden;
    aboutMenu.hidden = !willOpen;
    aboutButton.setAttribute("aria-expanded", String(willOpen));
    if (willOpen) {
      scrollToBottom();
    }
  });

  storyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showStory(button.dataset.story);
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAboutMenu();
    }
  });

  updateInterfaceText();
  updateBeijingTime();
  window.setInterval(updateBeijingTime, 15000);
  resetConversation();
})();