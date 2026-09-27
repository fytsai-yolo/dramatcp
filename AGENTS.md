# 個人網站（DRAMATCP）

## 這是什麼
個人靜態網站：自介、文章、短札。作者是 SRE，也是跳了十四年 breaking 的舞者；文章橫跨系統工程、身體經驗，以及用工程方法檢驗命理。

做這個網站的核心目的：想發表，但不想被讚數、留言數、瀏覽數評分。**保留回饋（email），拿掉計分。**

## 技術與部署
- 框架：Astro（官方 blog 範本為基礎）
- 託管：GitHub Pages，push 到 `main` 後由 GitHub Actions（`deploy.yml`）自動部署
- Repo：[`fytsai-yolo/dramatcp`](https://github.com/fytsai-yolo/dramatcp)（目前為 **public**；是否維持公開待 Phase 0 決策）
- 網址：`https://fytsai-yolo.github.io/dramatcp/`
- 常用指令：`npm install`、`npm run dev`、`npm run build`

### 開發伺服器
啟動 dev server 時使用背景模式：

```
astro dev --background
```

用 `astro dev stop`、`astro dev status`、`astro dev logs` 管理背景伺服器。

### 文件
完整文件：https://docs.astro.build

處理相關任務前參考：
- [新增頁面、動態路由、middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [使用 React、Vue、Svelte 等框架元件](https://docs.astro.build/en/guides/framework-components/)
- [新增或管理內容](https://docs.astro.build/en/guides/content-collections/)
- [樣式與 Tailwind](https://docs.astro.build/en/guides/styling/)
- [多語系支援](https://docs.astro.build/en/guides/internationalization/)

> 上面的技術資訊已依 `.git/config`、`gh repo view`、`.github/workflows/` 校正；之後 repo 若有變動（改名、換 host），可再跑 `/init` 重新校正。

## 內容規則
- 文章 frontmatter：`title`、`date`、`description`、`tags`、`draft`
- 內文為繁體中文（台灣用語），排版以長文閱讀舒適為優先
- 頁尾保留 email 聯絡方式
- 不要做：留言區、按讚、瀏覽次數、任何公開數字、分析與追蹤工具

## 協作原則（最重要，所有 agent 都要遵守）
1. **AI 不改寫我的文字。** 訪談只產生問題，審稿只產生意見；文章內文的任何修改都由我決定、由我動手。格式修正（frontmatter、檔名、圖片路徑）可以做，但要先說明。
2. **不自動發布。** 唯一的發布動作是我手動 merge 或 push 到 `main`。agent 不可執行 `git push`，除非我在當下明確要求。
3. **未發布內容不可公開可見。** 逐字稿、草稿、審稿意見的存放方式依 Phase 0 的決定。
4. **一次只做一個 Phase。** 完成後停下，等我明確說「開始下一個 Phase」。
5. **先問再做：** 新增依賴套件、外部服務、付費 API、刪除檔案之前都要先問我。
6. **每個 Phase 結束時更新 README。**
7. **範圍控制：** 如果我在當前 Phase 的完成條件打勾之前要求新功能、換框架、調樣式細節，提醒我先完成目前的完成條件；我堅持的話照做。

## 參考文件（已由 `opencode.json` 的 `instructions` 自動載入）
- `docs/roadmap.md`：Phase 0–4 開發計畫與閘門規則
- `docs/style.md`：「舞台」視覺風格規格

## 本專案的 agents 與指令
- `interviewer`：訪談我，一次問一個問題，不替我寫文章。用 Tab 切到它直接對話，或用 `/interview <主題或檔案>` 開場
- `@reviewer`／`/review <檔案>`：審稿意見與附圖建議，不改原文
- `/status`：對照路線圖回報目前進度與閘門狀態，不改檔
