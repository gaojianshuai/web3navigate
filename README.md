## On‑chain Radar · 区块链浏览器极速导航

**On‑chain Radar** 是一个基于 React + TypeScript + Vite 构建的 **区块链浏览器导航站**，聚合了主流公链、热门 L2、Cosmos 生态、Substrate 生态、UTXO 公链以及大量长尾 EVM 主网的区块浏览器入口，方便开发者和普通用户一站式跳转。

前端采用 Web3 霓虹风格 UI（渐变背景、卡片列表、类别 / 生态筛选），并通过「预置链列表 + `chainid.network` 主网数据」自动扩展，实际展示的链数量通常在 **200+**。

---

## 功能概览

- 多生态链浏览器聚合
  - EVM：Ethereum、BNB Chain、Polygon、Arbitrum、Optimism、Base、zkSync、Linea、Scroll、Mantle、Blast、Mode、zkLink Nova 等
  - 非 EVM / Cosmos：Solana、Tron、Aptos、Sui、Cosmos Hub、Osmosis、Injective、Kava、Mantra 等
  - Substrate：Polkadot、Kusama、Acala、Moonbeam、Moonriver、Astar、Bifrost 等
  - UTXO：Bitcoin、Litecoin、Dogecoin、Kaspa 等
  - 其他：TON、Zilliqa、Filecoin、ICP、VeChain、Chiliz、Ontology、Klaytn、Neo、Qtum、XDC、MultiversX、ZetaChain、Core、Stacks 等
  - 尽量覆盖 Bybit、币安等主流交易所支持的链，方便充提时快速查交易

- 智能搜索
  - 支持按 **链名**（如 `Linea`、`Kaspa`）
  - 支持按 **币种符号**（如 `ETH`、`BNB`、`MATIC`、`ZIL`、`TON`）
  - 支持按 **生态名称**（如 `Cosmos`、`Polkadot`、`BNB Chain`）
  - 支持按 **浏览器域名**（如 `etherscan`、`bscscan`、`arbiscan`）
  - 搜索结果有打分排序：精确匹配 > 前缀匹配 > 子串匹配 > 模糊匹配  
    - 示例：  
      - 输入 `linea`：优先展示 Linea 浏览器  
      - 输入 `zil`：优先展示 Zilliqa  
      - 输入 `zklink`：优先展示 zkLink Nova

- 多维筛选
  - 按 **类别** 过滤：L1 / L2 / Sidechain / Appchain / Cosmos / Substrate / ZK / EVM / 非 EVM / UTXO
  - 按 **生态** 过滤：Ethereum / Cosmos / Polkadot / BNB Chain / Solana / Tron / NEAR / Move 等

- 链图标 & 自动扩展
  - 手动维护的主流链全部接入官方 logo（数据源：`cryptologos.cc`）
  - 从 `public/data/evm_mainnets.json` 读取 `chainid.network` 主网数据，自动拓展 200 条真实 EVM 主网，并优先使用 `https://chainid.network/icons/{icon}.png`
  - 对远程 logo 加载失败做了回退：自动显示代币符号首字母，避免“坏图标”

- 一键跳转 & 安全处理
  - 点击任意链卡片，在新标签页打开对应链的区块浏览器
  - 对 URL 做了安全解析，单条链的错误 URL 不会导致整页崩溃或搜索失效

---

## 本地开发

要求 Node.js 版本 **≥ 18**。

```bash
npm install
npm run dev
```

启动后访问：

- 开发环境：`http://localhost:5173`

---

## 构建与部署

### 本地构建

```bash
npm run build
```

会执行：

- TypeScript 编译（类型检查）
- Vite 打包，构建产物输出到 `dist/` 目录

### 部署到 Vercel

项目根目录已经包含 `vercel.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

在 Vercel 控制台中：

1. 新建项目，选择本仓库  
2. 构建命令：`npm run build`（可以使用默认自动识别）  
3. 输出目录：`dist`  

保存后即可完成自动构建与部署。

---

## 使用指南

1. 打开站点首页（本地 `http://localhost:5173` 或线上 Vercel 域名）
2. 在顶部搜索框输入关键字：
   - 链名：如 `Ethereum`、`Solana`、`Aptos`、`Kaspa`
   - 币种：如 `ETH`、`BNB`、`MATIC`、`ZIL`、`TON`、`ZETA`
   - 生态 / 域名：如 `Cosmos`、`Polkadot`、`arbiscan`、`bscscan`
3. 使用上方的 **类别标签** 和右侧的 **生态下拉框** 做进一步过滤
4. 点击任意链卡片，即可在新标签打开对应的区块浏览器
5. 如果结果过多，可以继续缩小关键词或只选择某个类别（例如只看 L2 / ZK / Cosmos）

典型使用场景：

- 做链上交互、任务、空投时，快速查找对应链的浏览器  
- 在 Bybit / 币安 / 其他交易所充提时，查询交易确认状态  
- 多链环境下的 Web3 开发、调试和链上数据排查。

---

## 技术栈

- 框架：React 19 + TypeScript
- 构建工具：Vite 7
- 样式：手写 CSS，响应式布局 + Web3 霓虹风格
- 数据来源：
  - 手动维护的主流链列表（`src/App.tsx` 中的 `chains`）
  - `chainid.network` 导出的 EVM 主网列表（`public/data/evm_mainnets.json`）

