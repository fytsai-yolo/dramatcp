# 視覺風格：舞台路線

只調配色與字體，其他沿用範本預設。任何樣式調整都排在「當前 Phase 完成條件打勾」之後。

## 配色（全站深色，v1 不做淺色模式）
在全域 CSS 定義以下變數並套用：

| 變數 | 值 | 用途 |
|---|---|---|
| `--bg` | `#2C2C2A` | 頁面背景 |
| `--surface` | `#242422` | 程式碼區塊、卡片背景 |
| `--border` | `#444441` | 分隔線、區塊邊框 |
| `--text` | `#F1EFE8` | 內文（米白，不用純白） |
| `--text-secondary` | `#D3D1C7` | 摘要、次要文字 |
| `--text-muted` | `#B4B2A9` | 日期、標籤等 metadata |
| `--accent` | `#D85A30` | 只用於裝飾：logo 旁的斜線、細邊線、底線 |
| `--accent-text` | `#F0997B` | 連結、hover、重點強調 |

`--accent` 在深色背景上對比不足，不可用於內文或連結文字；可讀文字一律用 `--accent-text`（對比約 6:1，符合 WCAG AA）。

## 字體
- 中英文：Noto Sans TC（Google Fonts，只載 400 與 500 兩個字重，`display=swap`）
  fallback：`'PingFang TC', 'Microsoft JhengHei', sans-serif`
- 等寬（程式碼、日期、標籤）：`'JetBrains Mono', ui-monospace, monospace`
- 全站只用 400（內文）與 500（標題、網站名稱）

## 排版
- 內文 17px，行高 1.8，段落間距約 1.2em
- 文章標題 32–36px，字重 500，行高 1.3
- 內容最大寬度 700px，置中
- 網站名稱全大寫英文（DRAMATCP），letter-spacing 約 0.08em，旁邊加一個 `--accent` 色的「/」
- 導覽列用 `--text-muted`，hover 與目前頁面用 `--accent-text`

## 程式碼區塊
- 背景 `--surface`，邊框 `--border`，圓角 6px
- 語法高亮沿用 Astro 預設深色主題

## 不要做
- 漸層、陰影、動畫、背景圖、圖示庫
- 在標題上逐篇做局部變色

## 已知取捨
深色底配長文比淺色吃力，所以用米白字、17px、1.8 行高緩衝。若讀者反映眼睛累，淺色模式列入之後的版本。
