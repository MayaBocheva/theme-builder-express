/* Calm AI: Google Analytics 4 with opt-in consent (TDDDG § 25 / DSGVO).
   1. Put your GA4 Measurement ID below (Google Analytics > Verwaltung > Datenstreams > Mess-ID).
   2. Upload. Nothing is loaded from Google until a visitor clicks "Akzeptieren".
   While GA_MEASUREMENT_ID is empty, no banner is shown and no tracking happens. */
(function () {
  "use strict";
  var GA_MEASUREMENT_ID = ""; // e.g. "G-ABC123XYZ9"

  var STORAGE_KEY = "calmai-consent-v1";
  var granted = false;

  // Base path of the site, derived from this script's URL (works on every page and in sub-folders)
  var script = document.currentScript;
  var base = script ? script.src.replace(/assets\/js\/consent\.js.*$/, "") : "/";

  window.calmTrack = function (name, params) {
    if (granted && typeof window.gtag === "function") window.gtag("event", name, params || {});
  };

  if (!GA_MEASUREMENT_ID) return;

  var read = function () {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (e) { return null; }
  };
  var write = function (value) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: value, date: new Date().toISOString() })); } catch (e) { /* ignore */ }
  };

  var loadAnalytics = function () {
    if (granted) return;
    granted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted"
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
  };

  var removeAnalyticsCookies = function () {
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name.indexOf("_ga") === 0) {
        document.cookie = name + "=; Max-Age=0; path=/";
        document.cookie = name + "=; Max-Age=0; path=/; domain=." + location.hostname.replace(/^www\./, "");
      }
    });
  };

  var banner;
  var showBanner = function () {
    if (banner) { banner.hidden = false; banner.querySelector("button").focus(); return; }
    banner = document.createElement("div");
    banner.className = "consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-labelledby", "consent-title");
    banner.innerHTML =
      '<h2 id="consent-title">Darf ich Google Analytics nutzen?</h2>' +
      "<p>Damit sehe ich, welche Inhalte hilfreich sind, und kann die Seite verbessern. Dabei werden Cookies gesetzt und Daten an Google übertragen. " +
      'Du kannst deine Wahl jederzeit unter „Cookie-Einstellungen“ im Footer ändern. Mehr in der <a href="' + base + 'datenschutz/">Datenschutzerklärung</a>.</p>' +
      '<div class="consent-banner__actions">' +
      '<button type="button" class="btn btn--sm btn--ghost" data-consent="deny">Ablehnen</button>' +
      '<button type="button" class="btn btn--sm btn--ghost" data-consent="accept">Akzeptieren</button>' +
      "</div>";
    banner.addEventListener("click", function (e) {
      var b = e.target.closest("[data-consent]");
      if (!b) return;
      var accept = b.getAttribute("data-consent") === "accept";
      write(accept);
      banner.hidden = true;
      if (accept) loadAnalytics();
      else if (granted) { removeAnalyticsCookies(); location.reload(); }
    });
    document.body.appendChild(banner);
  };

  var init = function () {
    document.querySelectorAll("[data-consent-open]").forEach(function (el) {
      el.hidden = false;
      el.addEventListener("click", showBanner);
    });
    var choice = read();
    if (choice && choice.analytics === true) loadAnalytics();
    else if (!choice) showBanner();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
