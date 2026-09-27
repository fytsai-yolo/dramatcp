# 開發路線圖

## 閘門規則
每個 Phase 完成後，至少發布兩篇文章或短札，才開始下一個 Phase。

當我要求開始下一個 Phase 時，agent 先用 `git log` 確認上一個 Phase 完成之後是否已有兩篇新發布內容。沒有的話提醒我一次，由我決定是否仍要繼續。

## 目前狀態
- v1 已上線（Astro + GitHub Pages）
- 下一步：Phase 0

---

## Phase 0：盤點與隱私決策
- 確認 v1 完成條件：RSS 可用、README 存在、新增測試文章 push 後能自動上線。
- 確認 repo 是公開還是私有。若是公開 repo，草稿與逐字稿一旦 commit 就任何人都看得到（`AGENTS.md` 與 `.opencode/` 也會公開）。
  提出最簡單的解法並說明取捨，讓我選：
  - a. 草稿與逐字稿放在 gitignore 的本機資料夾，準備發布時才移入文章資料夾
  - b. 草稿另開一個私有 repo
  - c. 網站 repo 改為私有（先確認 GitHub Pages 在我的方案下是否支援私有 repo）
- 完成條件：我選定方案，並寫進 README。

## Phase 1：寫作流程
- 新增指令 `npm run new "標題"`：在文章資料夾建立「日期-slug」檔案，並填好 frontmatter（title、date、description 留空、tags 留空、`draft: true`）。
- 支援 draft：`draft: true` 的內容本機預覽看得到，正式站不發布、不進 RSS。草稿實際存放位置依 Phase 0 的決定。
- 新增「短札」類型：獨立資料夾，不需要標題與摘要，依日期列出，也進 RSS。
- Obsidian 相容：我會用 Obsidian 開文章資料夾寫作。把 `.obsidian` 加進 `.gitignore`；設定附件資料夾，讓在 Obsidian 貼上的圖片在網站上能正確顯示。
- 完成條件：我用 new 指令建一篇、用 Obsidian 寫完、貼一張圖、改成 `draft: false`、push 後正確上線。

## Phase 2：語音輸入
- 設計從 iPhone／Apple Watch 語音到待整理區的最短路徑：錄音或聽寫 → 逐字稿 → 存成 markdown 放進 inbox。先提出方案並說明步驟（例如 iOS 捷徑），優先用 Apple 內建功能；需要外部服務時先問我。
- 逐字稿需能處理中文夾英文。
- 新增指令 `npm run ingest`：把 inbox 裡的逐字稿轉成短札或草稿檔（`draft: true`），原始逐字稿保留不刪。
- inbox 不可被網站建置，也不可公開（依 Phase 0 的決定）。
- 完成條件：我對 Apple Watch 講一段話，能在電腦上用 ingest 變成一份草稿。

## Phase 3：訪談與審稿助手（已改由 opencode agents 實作）
原計畫是寫 npm script 呼叫 LLM API。搬到 opencode 之後，改用本 repo 的 `.opencode/agents/interviewer.md` 與 `.opencode/agents/reviewer.md`，不需要額外寫程式或另外管理 API 金鑰。

這兩個 agent 隨時可以用，不算跳 Phase。剩下的只有驗收：
- 完成條件：對一份草稿跑 `/interview` 與 `/review`，拿到問題與意見，原文一字未動。

## Phase 4：以 PR 作為發布閘門
- 流程：文章以 PR 提交 → 自動審稿，把意見與附圖建議貼成 PR comment → 我在手機或電腦上 merge → 自動部署。
- 兩個實作選項，先說明取捨讓我選：
  - A. 自寫 GitHub Actions，呼叫 LLM API 產生審稿留言。
  - B. 用 opencode 的 GitHub 整合（`opencode github install`），在 PR 留言輸入 `/oc review` 觸發，沿用本 repo 的 `AGENTS.md` 與 reviewer 規則。需要在 GitHub secrets 放模型供應商的 API key。
- 若 repo 為公開，PR 內容與審稿留言也會公開；先跟我確認是否可接受，不可接受就提出替代方案。
- 先告訴我預估成本。
- 完成條件：一篇文章從開 PR、自動審稿留言，到我 merge 上線，全程跑通。
