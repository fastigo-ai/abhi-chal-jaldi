/**
 * Helper to trigger and open Dora AI (Omnidimension) Live Chat widget
 */
export const openDoraChat = () => {
  // Method 1: Check for Omnidim / Dora AI global API
  if (typeof (window as any).OmniDimension?.open === "function") {
    (window as any).OmniDimension.open();
    return;
  }
  if (typeof (window as any).openOmnidimChat === "function") {
    (window as any).openOmnidimChat();
    return;
  }

  // Method 2: Click the launcher button / icon injected into the DOM
  const widgetBtn =
    document.querySelector<HTMLElement>("#omnidim-widget-button") ||
    document.querySelector<HTMLElement>("button[id*='omnidim']") ||
    document.querySelector<HTMLElement>("div[id*='omnidim'] button") ||
    document.querySelector<HTMLElement>(".omnidim-chat-button") ||
    document.querySelector<HTMLElement>("#omnidimension-launcher");

  if (widgetBtn) {
    widgetBtn.click();
    return;
  }

  // Method 3: Send postMessage to the widget iframe
  const iframe = document.querySelector<HTMLIFrameElement>("iframe[src*='omnidim']");
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage({ type: "OPEN_CHAT", action: "open" }, "*");
    iframe.scrollIntoView({ behavior: "smooth" });
  }
};
