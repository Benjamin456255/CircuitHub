// CircuitHub — Shared interactivity

document.addEventListener("DOMContentLoaded", () => {
  // ---- Set active nav based on current page ----
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.dataset.page === page) item.classList.add("active");
  });
  document.querySelectorAll(".topbar-nav a").forEach(link => {
    if (link.dataset.page === page) link.classList.add("active");
  });

  // ---- Online counter ----
  let count = 42;
  const el = document.getElementById("onlineCount");
  if (el) {
    setInterval(() => {
      count = Math.max(30, Math.min(55, count + Math.floor(Math.random() * 5) - 2));
      el.textContent = count;
    }, 8000);
  }

  // ---- Search (hero) ----
  const heroSearch = document.getElementById("heroSearch");
  if (heroSearch) {
    heroSearch.addEventListener("input", function () {
      const q = this.value.toLowerCase().trim();
      if (!q) {
        renderFeaturedResources(RESOURCES.slice(0, 4));
        return;
      }
      const filtered = RESOURCES.filter(r =>
        r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) ||
        r.tags.some(t => tagLabel(t).includes(q)) || r.author.toLowerCase().includes(q)
      );
      renderFeaturedResources(filtered.slice(0, 6));
    });
  }

  // ---- Tag filtering (resources page) ----
  const tagBar = document.getElementById("tagBar");
  if (tagBar) {
    tagBar.addEventListener("click", e => {
      if (!e.target.classList.contains("tag")) return;
      tagBar.querySelectorAll(".tag").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      renderResourceGrid(e.target.dataset.tag);
    });
  }

  // ---- Community tag filtering ----
  const ctagBar = document.getElementById("communityTagBar");
  if (ctagBar) {
    ctagBar.addEventListener("click", e => {
      if (!e.target.classList.contains("tag")) return;
      ctagBar.querySelectorAll(".tag").forEach(t => t.classList.remove("active"));
      e.target.classList.add("active");
      const ch = e.target.dataset.ctag;
      document.getElementById("channelTitle").textContent = ch === "all" ? "全部频道" : "#" + channelLabel(ch);
      renderPostList(ch);
    });
  }

  // ---- Sidebar channel click → navigate to community page with filter ----
  document.querySelectorAll(".nav-item[data-channel]").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = "community.html?channel=" + item.dataset.channel;
    });
  });
});

// ---- Resource rendering ----
function renderResourceCard(r) {
  return `
    <div class="card">
      <div class="card-type">${r.type}</div>
      <div class="card-title">${r.title}</div>
      <div class="card-desc">${r.desc}</div>
      <div class="card-meta">
        <span class="meta-item">${r.author}</span>
        <span class="meta-item">★ ${r.stars}</span>
        <span class="meta-item">${r.time}</span>
      </div>
      <div class="card-tags">${r.tags.map(t => `<span class="card-tag">${tagLabel(t)}</span>`).join("")}</div>
      ${r.link !== "#" ? `<a class="card-link" href="${r.link}" target="_blank" rel="noopener">打开资源 ↗</a>` : ""}
    </div>`;
}

function renderFeaturedResources(list) {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.innerHTML = list.map(renderResourceCard).join("");
}

function renderResourceGrid(filterTag) {
  const grid = document.getElementById("resourceGrid");
  if (!grid) return;
  const filtered = filterTag === "all" ? RESOURCES : RESOURCES.filter(r => r.tags.includes(filterTag));
  grid.innerHTML = filtered.map(renderResourceCard).join("");
}

// ---- Post rendering ----
function renderPost(p) {
  return `
    <div class="post">
      <div class="post-avatar">${p.avatar}</div>
      <div class="post-body">
        <div class="post-header">
          <span class="post-author">${p.author}</span>
          <span class="post-channel">#${channelLabel(p.channel)}</span>
          <span class="post-time">${p.time}</span>
        </div>
        <div class="post-title">${p.title}</div>
        <div class="post-excerpt">${p.excerpt}</div>
        <div class="post-footer">
          <span>▲ ${p.upvotes}</span>
          <span>💬 ${p.replies} 回复</span>
          ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderPostList(filterChannel) {
  const list = document.getElementById("postList");
  if (!list) return;
  const filtered = filterChannel === "all" ? POSTS : POSTS.filter(p => p.channel === filterChannel);
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-text">该频道暂无帖子</div></div>`;
    return;
  }
  list.innerHTML = filtered.map(renderPost).join("");
}


// ---- Article rendering ----
function renderArticle(a) {
  return `
    <div class="article-card">
      <div class="article-source">${a.source}</div>
      <div class="article-title">${a.title}</div>
      <div class="article-desc">${a.desc}</div>
      <div class="article-meta">
        <span>${a.author}</span>
        <span>${a.date}</span>
        <a class="article-link" href="${a.link}" target="_blank" rel="noopener">阅读原文 ↗</a>
      </div>
      <div class="article-tags">${a.tags.map(t => '<span class="card-tag">' + t + '</span>').join("")}</div>
    </div>`;
}

// ---- Project rendering ----
function renderProjectCard(p) {
  let icon = "📦";
  if (p.tags.includes("component-lib")) icon = "📚";
  if (p.tags.includes("instrument")) icon = "🔬";
  if (p.tags.includes("tool")) icon = "🔧";
  return `
    <div class="lib-card">
      <div class="lib-icon">${icon}</div>
      <div class="lib-body">
        <div class="lib-title">${p.title}</div>
        <div class="lib-desc">${p.desc}</div>
        <div class="lib-meta">${p.author} · ★ ${p.stars} · ${p.contributors} 位贡献者</div>
        <div class="card-tags" style="margin-top:8px">${p.tags.map(t => `<span class="card-tag">${tagLabel(t)}</span>`).join("")}</div>
      </div>
    </div>`;
}
