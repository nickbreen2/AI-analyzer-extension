#!/bin/bash

zip -r browsersky-extension.zip \
  manifest.json \
  service_worker.js \
  content.js \
  sidepanel.html \
  sidepanel.js \
  sidepanel.css \
  settings.html \
  settings.js \
  settings.css \
  icons/icon16.png \
  icons/icon32.png \
  icons/icon48.png \
  icons/icon128.png \
  icons/claude.svg \
  icons/ChatGPT_Logo_0.svg \
  icons/gemini.svg \
  icons/grok.svg \
  "icons/grok (1).svg" \
  icons/deepseek.svg \
  icons/minimax-color.svg \
  icons/Claude_Logo.svg \
  "icons/LLM token.svg" \
  icons/Browsersky-chrome-logo.png \
  icons/Browsersky-chrome-logo.svg \
  icons/Browsersky-logo.svg \
  icons/Browsersky-full-logo.png \
  icons/Browsersky-full-logo.svg \
  "icons/BrowserSky (1).svg" \
  "icons/BrowserSky (white mode).svg" \
  icons/support.gif \
  icons/Command-Key-Image.svg \
  icons/Browsersky-background.svg \
  "icons/google-chrome-logo-svgrepo-com 1.svg" \
  "icons/Command and B keys close-up 1.png" \
  "icons/(1)Browsersky-chrome-logo.png" \
  "icons/(1)Browsersky-logo.svg" \
  icons/Pin-Extension-Image.svg

echo "Done! browsersky-extension.zip is ready to upload."
