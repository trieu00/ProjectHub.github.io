/*
 * SCRIPT LOGIC (Cập nhật Data Binding từ window.DAS_DATA)
 * Render dữ liệu động 100%, Parallax Effect, và Scroll Spy cho Navigation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Đảm bảo dữ liệu tồn tại
  if (!window.DAS_DATA) {
    console.error(
      "Lỗi: Không tìm thấy window.DAS_DATA. Hãy kiểm tra file js/data.js.",
    );
    return;
  }

  const DATA = window.DAS_DATA;

  // 1. RENDER DATA VÀO DETAILS.HTML
  renderOverview(DATA.USER_STORIES);
  renderTeamMembers(DATA.DAS_MEMBERS);
  renderCharter(DATA.PROJECT_CHARTER);
  renderAgreement(DATA.GROUP_AGREEMENT);
  renderRAM(DATA.RAM_TASKS, DATA.RAM_MATRIX, DATA.DAS_MEMBERS);
  renderScope(DATA.SCOPE_IN, DATA.SCOPE_OUT);
  renderMilestones(DATA.MILESTONES);
  renderArchitecture(DATA.ARCHITECTURE);
  renderUIUX(DATA.UI_SCREENS);
  renderSchedule(DATA.MILESTONES, DATA.MILESTONE_STATUS);
  renderLinks(DATA.IMPORTANT_LINKS);
  renderContribution(
    DATA.CONTRIBUTION_METHOD,
    DATA.CONTRIBUTION_SCORES,
    DATA.DAS_MEMBERS,
  );
  renderTechStack(DATA.TECH_STACK);
  renderAITasks(DATA.AI_TASKS, DATA.AI_COMPARISON);

  // 2. PARALLAX EFFECT (Cho trang index.html)
  initParallax();

  // 3. SCROLL SPY NAV (Cho trang details.html)
  initScrollSpy();
});

/* ==========================================================================
   CÁC HÀM RENDER DỮ LIỆU
   ========================================================================== */

function renderOverview(stories) {
  const container = document.getElementById("overview-container");
  if (!container || !stories) return;

  let html = `
        <div class="card">
            <h3>Nền tảng Đăng ký & Quản lý Sự kiện Sinh viên</h3>
            <p class="text-muted mb-4">Tên tiếng Anh: Campus Event Hub</p>
            <h4 class="mt-8">User Stories</h4>
            <div class="grid grid-2 mt-4">
    `;

  stories.forEach((story) => {
    let badgeClass = "badge-neutral";
    if (story.roleKey === "student") badgeClass = "badge-success";
    if (story.roleKey === "organizer") badgeClass = "badge-warning";

    html += `
            <div class="card" style="padding: 16px;">
                <span class="badge ${badgeClass} mb-2">${story.role}</span>
                <p>${story.text}</p>
            </div>
        `;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function renderTeamMembers(members) {
  const container = document.getElementById("team-container");
  if (!container || !members) return;

  container.innerHTML = members
    .map((member) => {
      const nameParts = member.name.trim().split(/\s+/);
      const initials =
        nameParts.length > 1
          ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
          : nameParts[0].slice(0, 2);
      const avatar = member.avatar
        ? `<img src="${member.avatar}" alt="Avatar của ${member.name}" loading="lazy">`
        : `<div class="team-member-avatar avatar-fallback" role="img" aria-label="Avatar chữ cái của ${member.name}">${initials.toUpperCase()}</div>`;

      return `
            <div class="card team-member">
                ${avatar}
                <h3 class="mb-4">${member.name}</h3>
                <p class="member-mssv">MSSV: ${member.mssv}</p>
                <span class="badge member-role">${member.role || "Thành viên"}</span>
                ${member.bio ? `<p class="text-muted mt-4" style="font-size: 0.9em;">${member.bio}</p>` : ""}
            </div>
        `;
    })
    .join("");
}

function renderCharter(charter) {
  const container = document.getElementById("charter-container");
  if (!container || !charter) return;

  let html = `
        <div class="table-wrapper">
            <table>
                <tbody>
                    <tr><th>Tên dự án</th><td>${charter.projectName}</td></tr>
                    <tr><th>Trưởng nhóm</th><td>${charter.leader}</td></tr>
                    <tr>
                        <th>Mục tiêu</th>
                        <td><ul style="padding-left:16px;">${charter.objectives.map((o) => `<li>${o}</li>`).join("")}</ul></td>
                    </tr>
                    <tr><th>Phạm vi (Tóm tắt)</th><td>${charter.scopeSummary}</td></tr>
                    <tr>
                        <th>Stakeholders</th>
                        <td>${charter.stakeholders.map((s) => `<strong>${s.name}</strong> (${s.role})`).join("<br>")}</td>
                    </tr>
                    <tr>
                        <th>Rủi ro chính</th>
                        <td><ul style="padding-left:16px;">${charter.risks.map((r) => `<li><strong>${r.risk}</strong>: ${r.mitigation}</li>`).join("")}</ul></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
  container.innerHTML = html;
}

function renderAgreement(agreement) {
  const container = document.getElementById("agreement-container");
  if (!container || !agreement) return;

  container.innerHTML = agreement
    .map(
      (item) => `
        <li><strong>${item.title}:</strong> ${item.content}</li>
    `,
    )
    .join("");
}

function renderRAM(tasks, matrix, members) {
  const thead = document.getElementById("ram-thead");
  const tbody = document.getElementById("ram-tbody");
  if (!thead || !tbody || !tasks || !matrix || !members) return;

  // Header row
  let theadHtml = `<tr><th>Thành viên</th>`;
  tasks.forEach((task) => {
    theadHtml += `<th title="${task.name}">${task.id}</th>`;
  });
  theadHtml += `</tr>`;
  thead.innerHTML = theadHtml;

  // Body rows
  tbody.innerHTML = matrix
    .map((row) => {
      const member = members.find((m) => m.id === row.memberId);
      const name = member ? member.name : row.memberId;

      let rowHtml = `<tr><td><strong>${name}</strong></td>`;
      row.values.forEach((val) => {
        rowHtml += `<td>${val || "-"}</td>`;
      });
      rowHtml += `</tr>`;
      return rowHtml;
    })
    .join("");
}

function renderScope(scopeIn, scopeOut) {
  const inContainer = document.getElementById("scope-in-container");
  const outContainer = document.getElementById("scope-out-container");

  if (inContainer && scopeIn) {
    inContainer.innerHTML = scopeIn.map((item) => `<li>${item}</li>`).join("");
  }
  if (outContainer && scopeOut) {
    outContainer.innerHTML = scopeOut
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function renderMilestones(milestones) {
  const container = document.getElementById("milestones-container");
  if (!container || !milestones) return;

  container.innerHTML = milestones
    .map(
      (ms) => `
        <tr>
            <td><strong>${ms.id}</strong></td>
            <td><strong>${ms.name}</strong></td>
            <td>${ms.week}</td>
            <td class="text-muted">${ms.desc}</td>
        </tr>
    `,
    )
    .join("");
}

function renderArchitecture(architecture) {
  const container = document.getElementById("architecture-container");
  if (!container || !architecture) return;

  let html = "";
  architecture.forEach((layer, index) => {
    html += `
            <div class="arch-layer">
                <div class="arch-box" style="border-color: var(--${layer.color}); background-color: rgba(99, 102, 241, 0.05);">
                    <strong>${layer.layer} Layer</strong><br>
                    <span class="text-muted" style="font-size: 0.9em;">${layer.items.join(", ")}</span>
                </div>
            </div>
        `;
    if (index < architecture.length - 1) {
      html += `<div class="arch-arrow">↓</div>`;
    }
  });
  container.innerHTML = html;
}

function renderUIUX(screens) {
  const container = document.getElementById("uiux-container");
  if (!container || !screens) return;

  container.innerHTML = screens
    .map(
      (screen) => `
        <div class="card wireframe-card">
            <h4>${screen.id}. ${screen.name}</h4>
            <div class="wireframe-mockup">
                <div class="wf-header"></div>
                <div class="wf-body">
                    <div class="wf-box" style="height: 40px; margin-bottom: 8px;"></div>
                    <div class="wf-text" style="width: 80%"></div>
                    <div class="wf-text" style="width: 50%"></div>
                </div>
            </div>
            <p class="text-muted mt-4" style="font-size:0.9rem;">${screen.desc}</p>
        </div>
    `,
    )
    .join("");
}

function renderSchedule(milestones, statusDict) {
  const container = document.getElementById("schedule-container");
  if (!container || !milestones || !statusDict) return;

  container.innerHTML = milestones
    .map((ms) => {
      const statusData = statusDict[ms.id] || {
        status: "not-started",
        actual: "",
      };

      let badgeClass = "badge-neutral";
      let statusText = "Chưa bắt đầu";

      if (statusData.status === "done") {
        badgeClass = "badge-success";
        statusText = "Hoàn thành";
      } else if (statusData.status === "in-progress") {
        badgeClass = "badge-warning";
        statusText = "Đang làm";
      }

      return `
            <tr>
                <td><strong>${ms.id}: ${ms.name}</strong></td>
                <td><span class="badge ${badgeClass}">${statusText}</span></td>
                <td>${statusData.actual || "--"}</td>
            </tr>
        `;
    })
    .join("");
}

function renderLinks(links) {
  const container = document.getElementById("links-container");
  if (!container || !links) return;

  const github = links.github;
  const demo = links.demo;

  let html = "";

  if (github) {
    const disabledAttr =
      github.href === "#" ? 'style="opacity: 0.5; pointer-events: none;"' : "";
    html += `
            <a href="${github.href}" class="btn btn-primary" ${disabledAttr} target="_blank">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style="margin-right: 8px;"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                ${github.label}
            </a>
        `;
  }

  if (demo) {
    const disabledAttr =
      demo.href === "#" ? 'style="opacity: 0.5; pointer-events: none;"' : "";
    html += `
            <a href="${demo.href}" class="btn btn-outline" ${disabledAttr} target="_blank">
                🌐 ${demo.label}
            </a>
        `;
  }

  container.innerHTML = html;
}

function renderContribution(method, scores, members) {
  const methodContainer = document.getElementById(
    "contribution-method-container",
  );
  const thead = document.getElementById("contribution-thead");
  const tbody = document.getElementById("contribution-tbody");

  if (methodContainer && method) {
    methodContainer.innerHTML = method
      .map((m) => `<li><strong>${m.weight}:</strong> ${m.criterion}</li>`)
      .join("");
  }

  if (thead && tbody && scores && members) {
    thead.innerHTML = `
            <tr>
                <th>Thành viên</th>
                <th>Code</th>
                <th>Họp nhóm</th>
                <th>Review chéo</th>
                <th>Tổng điểm</th>
            </tr>
        `;

    tbody.innerHTML = members
      .map((member) => {
        const scoreData = scores[member.id] || {
          code: null,
          meeting: null,
          review: null,
        };
        const c = scoreData.code || 0;
        const m = scoreData.meeting || 0;
        const r = scoreData.review || 0;
        const total =
          scoreData.code === null && scoreData.meeting === null
            ? "Chưa ĐG"
            : c + m + r;

        return `
                <tr>
                    <td><strong>${member.name}</strong></td>
                    <td>${scoreData.code !== null ? scoreData.code : "-"}</td>
                    <td>${scoreData.meeting !== null ? scoreData.meeting : "-"}</td>
                    <td>${scoreData.review !== null ? scoreData.review : "-"}</td>
                    <td><strong class="${total === "Chưa ĐG" ? "text-muted" : "text-success"}">${total}</strong></td>
                </tr>
            `;
      })
      .join("");
  }
}

function renderTechStack(techStack) {
  const container = document.getElementById("tech-container");
  if (!container || !techStack) return;

  container.innerHTML = techStack
    .map(
      (group) => `
        <div class="card">
            <h4>${group.group}</h4>
            <ul class="text-muted pl-4 mt-4">
                ${group.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `,
    )
    .join("");
}

function renderAITasks(aiTasks, aiComparison) {
  const container = document.getElementById("ai-tasks-container");
  if (container && aiTasks) {
    container.innerHTML = aiTasks
      .map(
        (task) => `
            <tr>
                <td><strong>${task.phase}</strong></td>
                <td><span class="badge badge-neutral">${task.tool}</span></td>
                <td class="text-muted">${task.desc}</td>
            </tr>
        `,
      )
      .join("");
  }

  // AI Comparison
  const compTitle = document.getElementById("ai-comparison-title");
  const compPrompt = document.getElementById("ai-comparison-prompt");
  const compThead = document.getElementById("ai-comparison-thead");
  const compTbody = document.getElementById("ai-comparison-tbody");

  if (compTitle && compPrompt && compThead && compTbody && aiComparison) {
    compTitle.innerText = aiComparison.title;
    compPrompt.innerHTML = `<strong>Prompt thử nghiệm:</strong> <em>"${aiComparison.prompt}"</em>`;

    compThead.innerHTML = `
            <tr>
                <th>Tiêu chí đánh giá</th>
                ${aiComparison.tools.map((tool) => `<th>${tool}</th>`).join("")}
            </tr>
        `;

    // Do data schema của bạn chưa map tiêu chí sang tool, mình để dạng table layout với result gộp.
    compTbody.innerHTML = `
            <tr>
                <td>
                    <ul class="pl-4">
                        ${aiComparison.criteria.map((c) => `<li>${c}</li>`).join("")}
                    </ul>
                </td>
                <td colspan="2" class="text-muted">${aiComparison.result}</td>
            </tr>
        `;
  }
}

/* ==========================================================================
   HÀM XỬ LÝ GIAO DIỆN & HIỆU ỨNG (Giữ nguyên)
   ========================================================================== */

function initParallax() {
  const layers = document.querySelectorAll(
    ".parallax-layer, .parallax-divider-image",
  );
  if (layers.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let ticking = false;
  let scrollY = 0;

  function updateParallax() {
    if (window.innerWidth >= 768 && !prefersReducedMotion) {
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed"));
        const yPos = -(scrollY * speed);
        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    } else {
      layers.forEach((layer) => {
        layer.style.transform = "translate3d(0, 0, 0)";
      });
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );

  updateParallax();

  window.addEventListener(
    "resize",
    () => {
      scrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll(
    "#scroll-spy-nav a:not(.site-nav-brand)",
  );
  if (navLinks.length === 0) return;

  const sections = Array.from(navLinks)
    .map((link) => {
      const id = link.getAttribute("href").substring(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `#scroll-spy-nav a:not(.site-nav-brand)[href="#${entry.target.id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");

          if (window.innerWidth < 1024) {
            const navContainer = document.querySelector(
              ".site-nav, .sidebar-nav",
            );
            const linkRect = activeLink.getBoundingClientRect();
            if (!navContainer) return;
            const navRect = navContainer.getBoundingClientRect();

            if (
              linkRect.left < navRect.left ||
              linkRect.right > navRect.right
            ) {
              activeLink.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }
          }
        }
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
