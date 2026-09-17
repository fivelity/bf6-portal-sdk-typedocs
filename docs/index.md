---
layout: home

hero:
  name: BF6 Portal SDK
  text: OPERATIONS MANUAL
  tagline: Build, extend, and automate Battlefield 6 Portal experiences with a typed toolkit for gameplay logic, conditions, arrays, player state, and custom UI.
  actions:
    - theme: brand
      text: Read the Guide
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: Join Community
      link: /community

features:
  - title: Release-Synced
    details: Documentation is regenerated automatically when a new official SDK version is published.
  - title: Runtime-Aware
    details: Explore helpers designed for Portal objects, teams, players, conditions, arrays, and UI widgets.
  - title: Versioned Intel
    details: Every previous API reference is archived so you can audit and maintain older experiences.
---

<div class="home-grid">
  <div>
    <p class="eyebrow">01 / QUICK DEPLOY</p>
    <h2>Start with a clean ruleset.</h2>
    <p>Use the guide to move from an empty Portal project to a tested gameplay loop. Then use the API reference as your field guide for the complete exported surface.</p>
  </div>
  <div class="quick-code">
    <span class="code-label">SDK / FIRST CONTACT</span>
    <div class="code-block">
      <span class="kw">import</span> { And, WaitUntil } <span class="kw">from</span> <span class="str">'bf6-portal-sdk'</span><br><br>
      <span class="kw">if</span> (And(objectiveActive, teamReady)) {<br>
      &nbsp;&nbsp;<span class="kw">await</span> WaitUntil(<span class="num">10</span>, () =&gt; objectiveComplete)<br>
      }
    </div>
  </div>
</div>

<style>
.home-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 64px; max-width: 1152px; margin: 0 auto 90px; padding: 0 32px; }
.home-grid h2 { border: 0; padding: 0; margin: 16px 0; font-size: 34px; }
.home-grid p:not(.eyebrow) { color: #939ba5; line-height: 1.75; }
.eyebrow, .code-label { color: #e8a020; font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .13em; }
.quick-code { border: 1px solid #343941; background: #101217; padding: 24px; box-shadow: 10px 10px 0 rgba(232,160,32,.05); }
.code-block { margin-top: 18px; color: #d5d9df; font: 12px/1.8 'JetBrains Mono', monospace; }
.code-block .kw { color: #e8a020; }
.code-block .str { color: #9ca3af; }
.code-block .num { color: #f2b83f; }
@media (max-width: 768px) { .home-grid { grid-template-columns: 1fr; gap: 30px; padding: 0 24px; margin-bottom: 60px; } }
</style>
