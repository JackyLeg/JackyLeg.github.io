// chatbot.config.js
// Edit this file to update the chatbot on ALL pages at once

const CHATBOT_CONFIG = {
  "server-url": "https://emerald-wearing-perhaps-stereo.trycloudflare.com/",
  "authentication-token": "",
  "sender-id": "",
  "initial-payload": "/greet",
  "rest-enabled": "false",
  "widget-title": "Bot terbaik",
  "bot-icon": "punpun.jpeg",
  "widget-icon": "",
  "font-family": "Lato, sans-serif",
  "toggle-full-screen": "true",
  "message-delay": "1000",
  "stream-messages": "false",
  "display-timestamp": "false",
  "message-timestamp": "",
  "input-message-placeholder": "Tanya apa saja...",
  "error-message": "Something went wrong. Please try again.",
  "auto-open": "false",
  "enable-feedback": "false",
  "feedback-question-text": "Was this conversation helpful?",
  "feedback-thank-you-text": "Thank you for your feedback!",
  "session-started-text": "Session started",
};

// --- Auto-inject the widget --- //
(function () {
  const widget = document.createElement("rasa-chatbot-widget");

  for (const [key, value] of Object.entries(CHATBOT_CONFIG)) {
    widget.setAttribute(key, value);
  }

  document.body.appendChild(widget);
})();