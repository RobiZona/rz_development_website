---
layout: doc
title: Herbs
description: Documentation for rz_herbs. A configurable herb harvesting system with multiplayer sync, performance optimization, and SQL or config-only support.
head:
  - - meta
    - name: keywords
      content: rz_herbs, RedM herbs script, RedM harvesting system, RedM gathering, RZ Development
---

# Herbs
**rz_herbs** is a complete herb and plant harvesting system for RedM, designed to be lightweight, performant, and fully configurable.

The script supports both **SQL-based persistence** and **config-only mode**, making it suitable for small and large servers alike.

Add full plant interaction to your server with a **fully configurable**, **multiplayer-synced** herb system.

---
:::tabs
== INFO
<iframe width="560" height="315" src="https://www.youtube.com/embed/mgYJbppJDLU?si=Q02tqjnxv7zh3mnA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<a href="https://robizona.tebex.io/package/7157768" class="button-buy" target="_blank" rel="noopener noreferrer">🛒 Get Free Now</a>
:::

## Version
**Current version:** {{ version }}

## Overview

With **rz_herbs** you can:

- Harvest & eat all supported Red Dead Redemption 2 plants
- Define **custom spawn locations**
- Assign **multiple rewards per plant**
- Apply **custom effects** when items are used
- Support harvesting **on foot and on horseback**
- Sync plants correctly in multiplayer

---
### Performance & Sync

rz_herbs is designed for very low resmon usage.

- Plants are spawned and synced only within render distance
- Client-side render cache
- No global loops or broadcast events
:::details Performance notes
- Average client usage: ~0.00–0.02 ms
- Tested with 40+ plants
:::

---
### Supported Frameworks
- VORP
- Custom framework adapter
(Other frameworks can be added via adapter functions)

## Installation
1. Download the resource
    - On [Cfx.re Portal](https://portal.cfx.re/)
2. Place it in your resources folder:
    - `rz_herbs`
3. Add this ensure in your server.cfg after core and inventory
  ```
    ensure rz_herbs
  ```
4. Configure files inside:
    - `/public/config.lua`
    - `/public/eateffects.lua`
5. Restart the server

### Requirements
:::details VORP
- vorp_core
- vorp_inventory
:::

:::details Custom Framework
- Custom inventory trigger
- Custom character system
:::

:::details Required for all
- OneSync enabled
- oxmysql (optional if SQL disabled)
:::

## Configuration

The main configuration file controls rendering, persistence, interaction logic and framework support.

:::details config.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="configEl" v-html="config"></code></pre>
</div>
:::

## Plant Spawn & Coordinates

Plants can be spawned using:
- predefined coordinates
- random zones
- SQL persistent positions (optional)

Each plant keeps its own state and is synced only to nearby players.
:::details coords.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="coordsEl" v-html="coords"></code></pre>
</div>
:::

## Eat Effects System
Each plant can apply a custom effect

:::details eateffects.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="eatEl" v-html="eateffect"></code></pre>
</div>
:::

## Framework Adaptation

rz_herbs is framework-agnostic.

All framework logic is isolated inside adapter files.
You can edit or replace them without touching the core script.

Included adapters:
- VORP (ready to use)
- Custom template (for any other framework)

### VORP Adapter

The VORP adapter is already functional.

You may edit it only if:
- your VORP build is customized
- your inventory logic differs
:::details vorp_cl.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="vorpclEl" v-html="vorp_cl"></code></pre>
</div>
:::
:::details vorp_sv.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="vorpsvEl" v-html="vorp_sv"></code></pre>
</div>
:::

### Custom Framework Adapter

If you are not using VORP, you must implement the Custom adapter.

The placeholder functions must return the same data expected by the script.
:::details custom_cl.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="customclEl" v-html="custom_cl"></code></pre>
</div>
:::
:::details custom_sv.lua
<div class="code-wrapper">
  <button class="copy-btn" @click="copyCode">Copy</button>
  <pre class="language-lua"><code ref="customsvEl" v-html="custom_sv"></code></pre>
</div>
:::

## Updating <!-- lo lasciamo sempre generico -->

Updating script depends on **what files are changed**.

- **Core logic updates** can usually be applied by replacing the resource
- **Config updates** may require manual changes
- **Framework adapters** should be reviewed if your framework is customized

Always compare updated files before overwriting your existing configuration.


<script setup>
import { ref, onMounted } from 'vue'
import { getHighlighter } from 'shiki'

const version = ref('loading...')
const codeEl = ref(null)
const eateffect = ref('')
const config = ref('')
const coords = ref('')
const vorp_cl = ref('')
const vorp_sv = ref('')
const custom_cl = ref('')
const custom_sv = ref('')

onMounted(async () => {
  // VERSION
  const changelog = await fetch(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/docs/changelog.json'
  ).then(r => r.json())

  version.value = Object.keys(changelog)[0]

  // HIGHLIGHTER (una volta sola)
  const highlighter = await getHighlighter({
    themes: ['dark-plus'],
    langs: ['lua']
  })

  // LOAD FILES
  eateffect.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/eateffects.lua',
    highlighter
  )

  config.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/config.lua',
    highlighter
  )

  coords.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/coords.lua',
    highlighter
  )

  vorp_cl.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/framework/client/vorp_cl.lua',
    highlighter
  )

  vorp_sv.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/framework/server/vorp_sv.lua',
    highlighter
  )

  custom_cl.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/framework/client/custom_cl.lua',
    highlighter
  )

  custom_sv.value = await loadLua(
    'https://raw.githubusercontent.com/RobiZona/rz_herbs/main/framework/server/custom_sv.lua',
    highlighter
  )
})
async function loadLua(url, highlighter) {
  const code = await fetch(url).then(r => r.text())

  const html = highlighter.codeToHtml(code, {
    lang: 'lua',
    theme: 'dark-plus'
  })

  const match = html.match(/<code[^>]*>([\s\S]*?)<\/code>/)
  return match ? match[1] : ''
}
function copyCode() {
  if (!codeEl.value) return

  navigator.clipboard.writeText(codeEl.value.innerText)

  const btn = document.activeElement
  if (btn) {
    btn.textContent = 'Copied!'
    setTimeout(() => (btn.textContent = 'Copy'), 1500)
  }
}
</script>

<style scoped>
.code-wrapper {
  position: relative;
  width: 100%;
  overflow-x: auto;
}

.code-wrapper pre {
  background: var(--vp-code-block-bg);
  margin: 0;
  padding: 1rem;
  border-radius: 8px;

  font-size: 13px;
  line-height: 1.45;
  overflow-x: auto;
}

.code-wrapper code {
  display: block;
  min-width: max-content;
}

/* COPY BUTTON */
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;

  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;

  background: var(--vp-code-copy-bg);
  color: var(--vp-code-copy-text);

  border: 1px solid var(--vp-code-copy-border);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
}

.code-wrapper:hover .copy-btn {
  opacity: 1;
}
</style>