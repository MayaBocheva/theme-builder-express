/* Calm AI landing page: small progressive enhancements. The page works without JS. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };
    toggle.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Header shadow after scrolling
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Highlight the menu item of the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__list a[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && byId[entry.target.id]) {
          links.forEach(function (a) { a.classList.remove("is-active"); });
          byId[entry.target.id].classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  // Gentle reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduce) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Portrait placeholder if the photo is missing
  document.querySelectorAll(".portrait img").forEach(function (img) {
    var fail = function () { img.closest(".portrait").classList.add("is-missing"); };
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  });

  // Optional video: activates when data-youtube-id is set; loads YouTube only after a click
  var video = document.querySelector(".video[data-youtube-id]");
  if (video && video.getAttribute("data-youtube-id")) {
    video.hidden = false;
    var poster = video.querySelector(".video__poster");
    poster.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(video.getAttribute("data-youtube-id")) + "?autoplay=1&rel=0";
      iframe.title = "Calm AI Video";
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      poster.replaceWith(iframe);
    });
  }


  // Before / after graphic
  var compare = document.querySelector("[data-compare]");
  if (compare) {
    var stage = compare.querySelector(".compare__stage");
    var caption = compare.querySelector(".compare__caption");
    var buttons = compare.querySelectorAll("[data-view]");
    var touched = false;
    var show = function (view) {
      stage.setAttribute("data-state", view);
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-view") === view)); });
      caption.textContent = caption.getAttribute("data-caption-" + view);
    };
    buttons.forEach(function (b) {
      b.addEventListener("click", function () { touched = true; show(b.getAttribute("data-view")); });
    });
    // Play the change once when the graphic comes into view
    if ("IntersectionObserver" in window && !reduce) {
      var once = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          once.disconnect();
          setTimeout(function () { if (!touched) show("after"); }, 1400);
        }
      }, { threshold: 0.55 });
      once.observe(stage);
    }
  }

  // Use cases highlight their part of the process flow
  var flow = document.querySelector("[data-flow]");
  var caseButtons = document.querySelectorAll("[data-case]");
  if (flow && caseButtons.length) {
    var nodes = flow.querySelectorAll(".flow-node");
    var select = function (n) {
      caseButtons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-case") === n)); });
      flow.classList.add("has-focus");
      nodes.forEach(function (el) {
        el.classList.toggle("is-lit", (" " + el.getAttribute("data-cases") + " ").indexOf(" " + n + " ") > -1);
      });
    };
    caseButtons.forEach(function (b) {
      b.addEventListener("click", function () { select(b.getAttribute("data-case")); });
    });
    select("1");
  }

  // Analytics events (only sent if the visitor accepted analytics, see consent.js)
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (!a || !window.calmTrack) return;
    var href = a.getAttribute("href") || "";
    if (href.indexOf("prozess-check") > -1) window.calmTrack("cta_prozess_check", { link_text: a.textContent.trim() });
    else if (href.indexOf("tally.so") > -1) window.calmTrack("selbstcheck_click", { link_text: a.textContent.trim() });
    else if (href.indexOf("calendly.com") > -1) window.calmTrack("calendly_direct_click");
  });

  // Calendly: two-click loading (nothing is sent to Calendly before consent)
  var cal = document.querySelector("[data-calendly]");
  if (cal) {
    var load = cal.querySelector("[data-calendly-load]");
    load.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = cal.getAttribute("data-calendly");
      iframe.title = "Termin für den Prozess-Check auswählen";
      iframe.loading = "lazy";
      if (window.calmTrack) window.calmTrack("calendly_open");
      cal.innerHTML = "";
      cal.appendChild(iframe);
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
