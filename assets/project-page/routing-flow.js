(() => {
  "use strict";

  const tabs = Array.from(document.querySelectorAll("[data-routing-step]"));
  const panels = Array.from(document.querySelectorAll("[data-routing-panel]"));
  const flow = document.querySelector(".routing-flow");
  const activeLine = document.querySelector(".routing-flow__active-line");
  const showcase = document.querySelector(".routing-showcase");
  const activeGlow = document.querySelector(".routing-showcase__active-glow");

  if (!tabs.length || !panels.length) return;

  function updateActiveLine() {
    if (!flow || !activeLine) return;

    const activeTab = tabs.find(tab => tab.classList.contains("is-active"));
    const plate = activeTab?.querySelector(".routing-step__plate");
    if (!plate) return;

    const flowRect = flow.getBoundingClientRect();
    const plateRect = plate.getBoundingClientRect();
    const targetWidth = Math.max(86, Math.min(132, plateRect.width * 0.62));
    const targetLeft =
      (plateRect.left - flowRect.left) +
      flow.scrollLeft +
      (plateRect.width - targetWidth) / 2;

    activeLine.style.width = targetWidth + "px";
    activeLine.style.transform = "translate3d(" + targetLeft + "px,0,0)";
  }

  function updateActiveGlow() {
    if (!showcase || !activeGlow) return;

    const activeTab = tabs.find(tab => tab.classList.contains("is-active"));
    const plate = activeTab?.querySelector(".routing-step__plate");
    if (!activeTab || !plate) return;

    const showcaseRect = showcase.getBoundingClientRect();
    const plateRect = plate.getBoundingClientRect();

    const glowWidth = Math.max(245, plateRect.width * 1.42);
    const glowHeight = Math.max(155, plateRect.height * 1.18);
    const targetLeft =
      (plateRect.left - showcaseRect.left) +
      (plateRect.width - glowWidth) / 2;
    const targetTop =
      (plateRect.top - showcaseRect.top) +
      (plateRect.height - glowHeight) / 2 +
      Math.min(10, plateRect.height * 0.05);

    activeGlow.style.width = glowWidth + "px";
    activeGlow.style.height = glowHeight + "px";
    activeGlow.style.transform =
      "translate3d(" + targetLeft + "px," + targetTop + "px,0)";

    activeGlow.classList.toggle("is-plain", activeTab.classList.contains("routing-step--plain"));
    activeGlow.classList.toggle("is-core", activeTab.classList.contains("routing-step--core"));
    activeGlow.classList.toggle("is-result", activeTab.classList.contains("routing-step--result"));
  }

  function updateIndicators() {
    updateActiveLine();
    updateActiveGlow();
  }

  const ids = new Set(tabs.map(tab => tab.dataset.routingStep));

  function activate(step, options = {}) {
    if (!ids.has(step)) return;

    tabs.forEach(tab => {
      const active = tab.dataset.routingStep === step;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach(panel => {
      const active = panel.dataset.routingPanel === step;
      panel.hidden = !active;
      if (active) {
        panel.classList.remove("is-entering");
        void panel.offsetWidth;
        panel.classList.add("is-entering");
      } else {
        panel.classList.remove("is-entering");
      }
    });

    requestAnimationFrame(updateIndicators);

    if (options.updateHash !== false) {
      const target = tabs.find(tab => tab.dataset.routingStep === step);
      if (target) history.replaceState(null, "", "#" + target.id);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab.dataset.routingStep));

    tab.addEventListener("keydown", event => {
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex === null) return;
      event.preventDefault();
      const next = tabs[nextIndex];
      activate(next.dataset.routingStep);
      next.focus({preventScroll:true});
      next.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
    });
  });

  function activateFromHash() {
    const hash = window.location.hash.replace(/^#/, "");
    const matched = tabs.find(tab => tab.id === hash);
    if (matched) activate(matched.dataset.routingStep, {updateHash:false});
  }

  window.addEventListener("hashchange", activateFromHash);
  window.addEventListener("resize", () => requestAnimationFrame(updateIndicators));
  window.addEventListener("load", () => requestAnimationFrame(updateIndicators));
  flow?.addEventListener("scroll", () => requestAnimationFrame(updateIndicators), {passive:true});

  if ("ResizeObserver" in window && flow) {
    const resizeObserver = new ResizeObserver(() => requestAnimationFrame(updateIndicators));
    resizeObserver.observe(flow);
  }

  activateFromHash();
  requestAnimationFrame(updateIndicators);
})();