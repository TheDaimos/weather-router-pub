(() => {
  "use strict";

  const tabs = Array.from(document.querySelectorAll("[data-routing-step]"));
  const panels = Array.from(document.querySelectorAll("[data-routing-panel]"));

  if (!tabs.length || !panels.length) return;

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
  activateFromHash();
})();