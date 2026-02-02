import { useEffect, useMemo, useState } from 'react'
import './App.css'

type ChainCategory =
  | 'L1'
  | 'L2'
  | 'Sidechain'
  | 'Appchain'
  | 'Cosmos'
  | 'Substrate'
  | 'ZK'
  | 'EVM'
  | 'Non‑EVM'
  | 'UTXO'

type Chain = {
  id: number
  name: string
  symbol: string
  category: ChainCategory[]
  ecosystem: string
  explorer: string
  color: string
  logo?: string
}

const chains: Chain[] = [
  {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    category: ['L1', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://etherscan.io',
    color: '#627EEA',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
  },
  {
    id: 2,
    name: 'BNB Smart Chain',
    symbol: 'BNB',
    category: ['L1', 'EVM'],
    ecosystem: 'BNB Chain',
    explorer: 'https://bscscan.com',
    color: '#F0B90B',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg',
  },
  {
    id: 3,
    name: 'Polygon PoS',
    symbol: 'MATIC',
    category: ['Sidechain', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://polygonscan.com',
    color: '#8247E5',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
  },
  {
    id: 4,
    name: 'Arbitrum One',
    symbol: 'ARB',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://arbiscan.io',
    color: '#28A0F0',
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg',
  },
  {
    id: 5,
    name: 'Optimism',
    symbol: 'OP',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://optimistic.etherscan.io',
    color: '#FF0420',
    logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg',
  },
  {
    id: 6,
    name: 'Base',
    symbol: 'BASE',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://basescan.org',
    color: '#0052FF',
    logo: 'https://cryptologos.cc/logos/base-base-logo.svg',
  },
  {
    id: 7,
    name: 'Avalanche C-Chain',
    symbol: 'AVAX',
    category: ['L1', 'EVM'],
    ecosystem: 'Avalanche',
    explorer: 'https://snowtrace.io',
    color: '#E84142',
    logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.svg',
  },
  {
    id: 8,
    name: 'Fantom Opera',
    symbol: 'FTM',
    category: ['L1', 'EVM'],
    ecosystem: 'Fantom',
    explorer: 'https://ftmscan.com',
    color: '#1969FF',
    logo: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg',
  },
  {
    id: 9,
    name: 'Solana',
    symbol: 'SOL',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Solana',
    explorer: 'https://solscan.io',
    color: '#9945FF',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
  },
  {
    id: 10,
    name: 'Tron',
    symbol: 'TRX',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Tron',
    explorer: 'https://tronscan.org',
    color: '#FF060A',
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.svg',
  },
  {
    id: 11,
    name: 'Cronos',
    symbol: 'CRO',
    category: ['L1', 'EVM'],
    ecosystem: 'Cosmos / Crypto.org',
    explorer: 'https://cronos.org/explorer',
    color: '#002D74',
    logo: 'https://cryptologos.cc/logos/cronos-cro-logo.svg',
  },
  {
    id: 12,
    name: 'Gnosis Chain',
    symbol: 'GNO',
    category: ['Sidechain', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://gnosisscan.io',
    color: '#04795B',
    logo: 'https://cryptologos.cc/logos/gnosis-gno-logo.svg',
  },
  {
    id: 13,
    name: 'zkSync Era',
    symbol: 'ZKS',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://explorer.zksync.io',
    color: '#6E56FF',
    logo: 'https://cryptologos.cc/logos/zksync-era-zks-logo.svg',
  },
  {
    id: 14,
    name: 'Linea',
    symbol: 'LINEA',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://explorer.linea.build',
    color: '#00BFFF',
    logo: 'https://cryptologos.cc/logos/linea-link-logo.svg',
  },
  {
    id: 15,
    name: 'Scroll',
    symbol: 'SCROLL',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://scrollscan.com',
    color: '#F6C042',
    logo: 'https://cryptologos.cc/logos/scroll-scroll-logo.svg',
  },
  {
    id: 16,
    name: 'Mantle',
    symbol: 'MNT',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://mantlescan.xyz',
    color: '#00FF9C',
    logo: 'https://cryptologos.cc/logos/mantle-mnt-logo.svg',
  },
  {
    id: 17,
    name: 'Blast',
    symbol: 'BLAST',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://blastscan.io',
    color: '#FFE44D',
    logo: 'https://cryptologos.cc/logos/blast-blast-logo.svg',
  },
  {
    id: 18,
    name: 'Mode',
    symbol: 'MODE',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://modescan.io',
    color: '#FF7A7A',
    logo: 'https://cryptologos.cc/logos/mode-mode-logo.svg',
  },
  {
    id: 19,
    name: 'zkSync Lite',
    symbol: 'ZKS-L',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://zkscan.io',
    color: '#4C4CFF',
    logo: 'https://cryptologos.cc/logos/zksync-era-zks-logo.svg',
  },
  {
    id: 20,
    name: 'Polygon zkEVM',
    symbol: 'POL-ZK',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://zkevm.polygonscan.com',
    color: '#AE00FF',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg',
  },
  {
    id: 21,
    name: 'Immutable zkEVM',
    symbol: 'IMX',
    category: ['Appchain', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://explorer.immutable.com',
    color: '#00D1FF',
    logo: 'https://cryptologos.cc/logos/immutable-x-imx-logo.svg',
  },
  {
    id: 22,
    name: 'Ronin',
    symbol: 'RON',
    category: ['Appchain', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://scope.roninchain.com',
    color: '#0A86FF',
    logo: 'https://cryptologos.cc/logos/ronin-ron-logo.svg',
  },
  {
    id: 23,
    name: 'Aptos',
    symbol: 'APT',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Move',
    explorer: 'https://explorer.aptoslabs.com',
    color: '#101010',
    logo: 'https://cryptologos.cc/logos/aptos-apt-logo.svg',
  },
  {
    id: 24,
    name: 'Sui',
    symbol: 'SUI',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Move',
    explorer: 'https://suiscan.xyz',
    color: '#6DD6FF',
    logo: 'https://cryptologos.cc/logos/sui-sui-logo.svg',
  },
  {
    id: 25,
    name: 'Cosmos Hub',
    symbol: 'ATOM',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/cosmos',
    color: '#2E3148',
    logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.svg',
  },
  {
    id: 26,
    name: 'Osmosis',
    symbol: 'OSMO',
    category: ['Appchain', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/osmosis',
    color: '#6D4AFF',
    logo: 'https://cryptologos.cc/logos/osmosis-osmo-logo.svg',
  },
  {
    id: 27,
    name: 'Injective',
    symbol: 'INJ',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/injective',
    color: '#00C4FF',
    logo: 'https://cryptologos.cc/logos/injective-inj-logo.svg',
  },
  {
    id: 28,
    name: 'Kava EVM',
    symbol: 'KAVA',
    category: ['L1', 'Cosmos', 'EVM'],
    ecosystem: 'Cosmos',
    explorer: 'https://kavascan.com',
    color: '#FF433E',
    logo: 'https://cryptologos.cc/logos/kava-kava-logo.svg',
  },
  {
    id: 29,
    name: 'Aurora',
    symbol: 'AURORA',
    category: ['Sidechain', 'EVM'],
    ecosystem: 'NEAR',
    explorer: 'https://aurorascan.dev',
    color: '#70FF00',
    logo: 'https://cryptologos.cc/logos/aurora-dao-aura-logo.svg',
  },
  {
    id: 30,
    name: 'Near',
    symbol: 'NEAR',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'NEAR',
    explorer: 'https://nearblocks.io',
    color: '#111111',
    logo: 'https://cryptologos.cc/logos/near-protocol-near-logo.svg',
  },
  {
    id: 31,
    name: 'Metis Andromeda',
    symbol: 'METIS',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://andromeda-explorer.metis.io',
    color: '#00D6C9',
    logo: 'https://cryptologos.cc/logos/metisdao-metis-logo.svg',
  },
  {
    id: 32,
    name: 'Arbitrum Nova',
    symbol: 'ARB-NOVA',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://nova.arbiscan.io',
    color: '#2096F3',
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.svg',
  },
  {
    id: 33,
    name: 'zkFair',
    symbol: 'ZKF',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://scan.zkfair.io',
    color: '#FFE89A',
    logo: 'https://cryptologos.cc/logos/zkfair-zkf-logo.svg',
  },
  {
    id: 34,
    name: 'Taiko',
    symbol: 'TAIKO',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://taikoscan.io',
    color: '#9F65FF',
    logo: 'https://cryptologos.cc/logos/taiko-tko-logo.svg',
  },
  {
    id: 35,
    name: 'Cyber',
    symbol: 'CYBER',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://cyberscan.co',
    color: '#00E6B4',
    logo: 'https://cryptologos.cc/logos/cyberconnect-cyb-logo.svg',
  },
  // UTXO 型主流公链
  {
    id: 51,
    name: 'Bitcoin',
    symbol: 'BTC',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Bitcoin',
    explorer: 'https://mempool.space',
    color: '#F7931A',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
  },
  {
    id: 52,
    name: 'Litecoin',
    symbol: 'LTC',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Litecoin',
    explorer: 'https://blockchair.com/litecoin',
    color: '#345D9D',
    logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.svg',
  },
  {
    id: 53,
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Bitcoin Cash',
    explorer: 'https://blockchair.com/bitcoin-cash',
    color: '#0AC18E',
    logo: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg',
  },
  {
    id: 54,
    name: 'Dogecoin',
    symbol: 'DOGE',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Dogecoin',
    explorer: 'https://blockchair.com/dogecoin',
    color: '#C2A633',
    logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg',
  },
  {
    id: 55,
    name: 'Dash',
    symbol: 'DASH',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Dash',
    explorer: 'https://blockchair.com/dash',
    color: '#008DE4',
    logo: 'https://cryptologos.cc/logos/dash-dash-logo.svg',
  },
  {
    id: 56,
    name: 'Zcash',
    symbol: 'ZEC',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Zcash',
    explorer: 'https://blockchair.com/zcash',
    color: '#F4B728',
    logo: 'https://cryptologos.cc/logos/zcash-zec-logo.svg',
  },
  {
    id: 57,
    name: 'Monero',
    symbol: 'XMR',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Monero',
    explorer: 'https://blockchair.com/monero',
    color: '#FF6600',
    logo: 'https://cryptologos.cc/logos/monero-xmr-logo.svg',
  },
  {
    id: 58,
    name: 'Xion',
    symbol: 'XION',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/xion',
    color: '#000000',
  },
  {
    id: 59,
    name: 'Secret Network',
    symbol: 'SCRT',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/secret',
    color: '#1B1B1B',
  },
  {
    id: 60,
    name: 'Initia',
    symbol: 'INIT',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://explorer.initia.xyz',
    color: '#FF6B35',
  },
  {
    id: 61,
    name: 'Babylon',
    symbol: 'BABYLON',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/babylon',
    color: '#8B5CF6',
  },
  {
    id: 62,
    name: 'Sei',
    symbol: 'SEI',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/sei',
    color: '#5A67D8',
  },
  {
    id: 63,
    name: 'Terra Classic',
    symbol: 'LUNC',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Terra',
    explorer: 'https://finder.terra.money/classic',
    color: '#172852',
    logo: 'https://cryptologos.cc/logos/terra-luna-luna-logo.svg',
  },
  {
    id: 64,
    name: 'Terra',
    symbol: 'LUNA',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Terra',
    explorer: 'https://finder.terra.money',
    color: '#172852',
    logo: 'https://cryptologos.cc/logos/terra-luna-luna-logo.svg',
  },
  {
    id: 65,
    name: 'Kava',
    symbol: 'KAVA',
    category: ['L1', 'Cosmos', 'EVM'],
    ecosystem: 'Cosmos',
    explorer: 'https://www.mintscan.io/kava',
    color: '#FF433E',
    logo: 'https://cryptologos.cc/logos/kava-kava-logo.svg',
  },
  {
    id: 66,
    name: 'Mantra',
    symbol: 'OM',
    category: ['L1', 'Cosmos'],
    ecosystem: 'Cosmos',
    explorer: 'https://explorer.mantrachain.io',
    color: '#FF6B6B',
  },
  // 新增常见链
  {
    id: 67,
    name: 'Zilliqa',
    symbol: 'ZIL',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Zilliqa',
    explorer: 'https://viewblock.io/zilliqa',
    color: '#00BCFF',
    logo: 'https://cryptologos.cc/logos/zilliqa-zil-logo.svg',
  },
  {
    id: 68,
    name: 'zkLink Nova',
    symbol: 'ZKL',
    category: ['L2', 'ZK', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://explorer.zklink.io',
    color: '#6366F1',
    logo: 'https://chainid.network/icons/zklink.png',
  },
  {
    id: 69,
    name: 'Zig',
    symbol: 'ZIG',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Zig',
    // Zig 目前没有独立公链主网，这里指向代币信息页，确保地址可访问
    explorer: 'https://www.coingecko.com/en/coins/zigcoin',
    color: '#FF6B35',
  },
  // Bybit 交易所支持的额外链
  {
    id: 70,
    name: 'Cardano',
    symbol: 'ADA',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Cardano',
    explorer: 'https://cardanoscan.io',
    color: '#0033AD',
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.svg',
  },
  {
    id: 71,
    name: 'Polkadot',
    symbol: 'DOT',
    category: ['L1', 'Substrate'],
    ecosystem: 'Polkadot',
    explorer: 'https://polkascan.io/polkadot',
    color: '#E6007A',
    logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg',
  },
  {
    id: 72,
    name: 'Kusama',
    symbol: 'KSM',
    category: ['L1', 'Substrate'],
    ecosystem: 'Polkadot',
    explorer: 'https://polkascan.io/kusama',
    color: '#000000',
    logo: 'https://cryptologos.cc/logos/kusama-ksm-logo.svg',
  },
  {
    id: 73,
    name: 'Starknet',
    symbol: 'STRK',
    category: ['L2', 'ZK', 'Non‑EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://starkscan.co',
    color: '#FF0420',
    logo: 'https://cryptologos.cc/logos/starknet-starknet-logo.svg',
  },
  {
    id: 74,
    name: 'Celo',
    symbol: 'CELO',
    category: ['L1', 'EVM'],
    ecosystem: 'Celo',
    explorer: 'https://celoscan.io',
    color: '#35D07F',
    logo: 'https://cryptologos.cc/logos/celo-celo-logo.svg',
  },
  {
    id: 76,
    name: 'Moonbeam',
    symbol: 'GLMR',
    category: ['L1', 'EVM'],
    ecosystem: 'Polkadot',
    explorer: 'https://moonscan.io',
    color: '#53CBC9',
    logo: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.svg',
  },
  {
    id: 77,
    name: 'Moonriver',
    symbol: 'MOVR',
    category: ['L1', 'EVM'],
    ecosystem: 'Kusama',
    explorer: 'https://moonriver.moonscan.io',
    color: '#F2B705',
    logo: 'https://cryptologos.cc/logos/moonriver-movr-logo.svg',
  },
  {
    id: 78,
    name: 'Astar',
    symbol: 'ASTR',
    category: ['L1', 'EVM'],
    ecosystem: 'Polkadot',
    explorer: 'https://astar.subscan.io',
    color: '#1B6DFF',
    logo: 'https://cryptologos.cc/logos/astar-astr-logo.svg',
  },
  {
    id: 79,
    name: 'Harmony',
    symbol: 'ONE',
    category: ['L1', 'EVM'],
    ecosystem: 'Harmony',
    explorer: 'https://explorer.harmony.one',
    color: '#00DEE6',
    logo: 'https://cryptologos.cc/logos/harmony-one-logo.svg',
  },
  {
    id: 80,
    name: 'Boba Network',
    symbol: 'BOBA',
    category: ['L2', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://bobascan.com',
    color: '#CCFF00',
    logo: 'https://cryptologos.cc/logos/boba-network-boba-logo.svg',
  },
  {
    id: 81,
    name: 'BSC Testnet',
    symbol: 'BNB-TEST',
    category: ['L1', 'EVM'],
    ecosystem: 'BNB Chain',
    explorer: 'https://testnet.bscscan.com',
    color: '#F0B90B',
  },
  {
    id: 82,
    name: 'Goerli',
    symbol: 'ETH-GOERLI',
    category: ['L1', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://goerli.etherscan.io',
    color: '#627EEA',
  },
  {
    id: 83,
    name: 'Sepolia',
    symbol: 'ETH-SEPOLIA',
    category: ['L1', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://sepolia.etherscan.io',
    color: '#627EEA',
  },
  {
    id: 84,
    name: 'Mumbai',
    symbol: 'MATIC-MUMBAI',
    category: ['Sidechain', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://mumbai.polygonscan.com',
    color: '#8247E5',
  },
  {
    id: 85,
    name: 'Holesky',
    symbol: 'ETH-HOLESKY',
    category: ['L1', 'EVM'],
    ecosystem: 'Ethereum',
    explorer: 'https://holesky.etherscan.io',
    color: '#627EEA',
  },
  {
    id: 86,
    name: 'Filecoin',
    symbol: 'FIL',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Filecoin',
    explorer: 'https://filfox.info',
    color: '#0090FF',
    logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.svg',
  },
  {
    id: 87,
    name: 'ICP',
    symbol: 'ICP',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Internet Computer',
    explorer: 'https://dashboard.internetcomputer.org',
    color: '#29ABE2',
    logo: 'https://cryptologos.cc/logos/internet-computer-icp-logo.svg',
  },
  {
    id: 88,
    name: 'Theta',
    symbol: 'THETA',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Theta',
    explorer: 'https://explorer.thetatoken.org',
    color: '#2AB8E6',
    logo: 'https://cryptologos.cc/logos/theta-theta-logo.svg',
  },
  {
    id: 89,
    name: 'VeChain',
    symbol: 'VET',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'VeChain',
    explorer: 'https://explore.vechain.org',
    color: '#15BDD4',
    logo: 'https://cryptologos.cc/logos/vechain-vet-logo.svg',
  },
  {
    id: 90,
    name: 'EOS',
    symbol: 'EOS',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'EOS',
    explorer: 'https://eosflare.io',
    color: '#000000',
    logo: 'https://cryptologos.cc/logos/eos-eos-logo.svg',
  },
  {
    id: 91,
    name: 'Waves',
    symbol: 'WAVES',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Waves',
    explorer: 'https://wavesexplorer.com',
    color: '#0055FF',
    logo: 'https://cryptologos.cc/logos/waves-waves-logo.svg',
  },
  {
    id: 92,
    name: 'Algorand',
    symbol: 'ALGO',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Algorand',
    explorer: 'https://algoexplorer.io',
    color: '#000000',
    logo: 'https://cryptologos.cc/logos/algorand-algo-logo.svg',
  },
  {
    id: 93,
    name: 'Hedera',
    symbol: 'HBAR',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Hedera',
    explorer: 'https://hashscan.io',
    color: '#0088CC',
    logo: 'https://cryptologos.cc/logos/hedera-hbar-logo.svg',
  },
  {
    id: 94,
    name: 'Tezos',
    symbol: 'XTZ',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Tezos',
    explorer: 'https://tzkt.io',
    color: '#2C7DF7',
    logo: 'https://cryptologos.cc/logos/tezos-xtz-logo.svg',
  },
  {
    id: 95,
    name: 'Stellar',
    symbol: 'XLM',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Stellar',
    explorer: 'https://stellar.expert',
    color: '#7D00FF',
    logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.svg',
  },
  {
    id: 96,
    name: 'Ripple',
    symbol: 'XRP',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Ripple',
    explorer: 'https://xrpscan.com',
    color: '#23292F',
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg',
  },
  {
    id: 97,
    name: 'Acala',
    symbol: 'ACA',
    category: ['L1', 'Substrate'],
    ecosystem: 'Polkadot',
    explorer: 'https://acala.subscan.io',
    color: '#645AFF',
    logo: 'https://cryptologos.cc/logos/acala-aca-logo.svg',
  },
  {
    id: 98,
    name: 'Phala Network',
    symbol: 'PHA',
    category: ['L1', 'Substrate'],
    ecosystem: 'Polkadot',
    explorer: 'https://phala.subscan.io',
    color: '#C4FA50',
  },
  {
    id: 99,
    name: 'Bifrost',
    symbol: 'BNC',
    category: ['L1', 'Substrate'],
    ecosystem: 'Polkadot',
    explorer: 'https://bifrost.subscan.io',
    color: '#FF6B9D',
  },
  {
    id: 100,
    name: 'Oasis Network',
    symbol: 'ROSE',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Oasis',
    explorer: 'https://explorer.oasis.io',
    color: '#00D9FF',
    logo: 'https://cryptologos.cc/logos/oasis-network-rose-logo.svg',
  },
  // 币安（Binance）支持但上面尚未覆盖的部分链，方便一站式体验
  {
    id: 101,
    name: 'Toncoin',
    symbol: 'TON',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'TON',
    explorer: 'https://tonscan.org',
    color: '#0098EA',
    logo: 'https://cryptologos.cc/logos/toncoin-ton-logo.svg',
  },
  {
    id: 102,
    name: 'Chiliz Chain',
    symbol: 'CHZ',
    category: ['L1', 'EVM'],
    ecosystem: 'Chiliz',
    explorer: 'https://scan.chiliz.com',
    color: '#E51C44',
    logo: 'https://cryptologos.cc/logos/chiliz-chz-logo.svg',
  },
  {
    id: 103,
    name: 'Ontology',
    symbol: 'ONT',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Ontology',
    explorer: 'https://explorer.ont.io',
    color: '#00A6C4',
    logo: 'https://cryptologos.cc/logos/ontology-ont-logo.svg',
  },
  {
    id: 104,
    name: 'Klaytn',
    symbol: 'KLAY',
    category: ['L1', 'EVM'],
    ecosystem: 'Klaytn',
    explorer: 'https://scope.klaytn.com',
    color: '#5C3E2F',
    logo: 'https://cryptologos.cc/logos/klaytn-klay-logo.svg',
  },
  {
    id: 105,
    name: 'Neo',
    symbol: 'NEO',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Neo',
    explorer: 'https://neotube.io',
    color: '#00E599',
    logo: 'https://cryptologos.cc/logos/neo-neo-logo.svg',
  },
  {
    id: 106,
    name: 'Qtum',
    symbol: 'QTUM',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Qtum',
    explorer: 'https://explorer.qtum.org',
    color: '#2E9AD0',
    logo: 'https://cryptologos.cc/logos/qtum-qtum-logo.svg',
  },
  {
    id: 107,
    name: 'XDC Network',
    symbol: 'XDC',
    category: ['L1', 'EVM'],
    ecosystem: 'XDC',
    explorer: 'https://explorer.xdc.org',
    color: '#1E4DD8',
    logo: 'https://cryptologos.cc/logos/xdc-network-xdc-logo.svg',
  },
  {
    id: 108,
    name: 'MultiversX',
    symbol: 'EGLD',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'MultiversX',
    explorer: 'https://explorer.multiversx.com',
    color: '#23F7DD',
    logo: 'https://cryptologos.cc/logos/multiversx-egld-logo.svg',
  },
  {
    id: 109,
    name: 'ZetaChain',
    symbol: 'ZETA',
    category: ['L1', 'EVM'],
    ecosystem: 'ZetaChain',
    explorer: 'https://explorer.zetachain.com',
    color: '#FFCE45',
    logo: 'https://cryptologos.cc/logos/zetachain-zeta-logo.svg',
  },
  {
    id: 110,
    name: 'Core',
    symbol: 'CORE',
    category: ['L1', 'EVM'],
    ecosystem: 'Core',
    explorer: 'https://scan.coredao.org',
    color: '#FFB300',
    logo: 'https://cryptologos.cc/logos/core-core-logo.svg',
  },
  {
    id: 111,
    name: 'Kaspa',
    symbol: 'KAS',
    category: ['L1', 'Non‑EVM', 'UTXO'],
    ecosystem: 'Kaspa',
    explorer: 'https://explorer.kaspa.org',
    color: '#4C79FF',
    logo: 'https://cryptologos.cc/logos/kaspa-kas-logo.svg',
  },
  {
    id: 112,
    name: 'Stacks',
    symbol: 'STX',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'Bitcoin',
    explorer: 'https://explorer.hiro.so',
    color: '#5546FF',
    logo: 'https://cryptologos.cc/logos/stacks-stx-logo.svg',
  },
  {
    id: 113,
    name: 'BNB Beacon Chain',
    symbol: 'BNB-BEACON',
    category: ['L1', 'Non‑EVM'],
    ecosystem: 'BNB Chain',
    explorer: 'https://explorer.bnbchain.org',
    color: '#F3BA2F',
  },
  {
    id: 114,
    name: 'opBNB',
    symbol: 'OPBNB',
    category: ['L2', 'EVM'],
    ecosystem: 'BNB Chain',
    explorer: 'https://opbnbscan.com',
    color: '#F3BA2F',
  },
]

type RawEvmChain = {
  name: string
  shortName?: string
  chain?: string
  chainId: number
  icon?: string | null
  explorer: string
}

const allCategories: { id: 'all' | ChainCategory; label: string }[] = [
  { id: 'all', label: '全部类别' },
  { id: 'L1', label: 'Layer 1' },
  { id: 'L2', label: 'Layer 2' },
  { id: 'Sidechain', label: '侧链' },
  { id: 'Appchain', label: '应用链' },
  { id: 'Cosmos', label: 'Cosmos' },
  { id: 'Substrate', label: 'Substrate' },
  { id: 'ZK', label: 'ZK Rollup' },
  { id: 'EVM', label: 'EVM' },
  { id: 'Non‑EVM', label: '非 EVM' },
  { id: 'UTXO', label: 'UTXO 模型' },
]

function ChainAvatar({ chain }: { chain: Chain }) {
  const [showLogo, setShowLogo] = useState(Boolean(chain.logo))

  return (
    <div className="chain-avatar" style={{ background: chain.color }}>
      {showLogo && chain.logo ? (
        <img
          src={chain.logo}
          alt={chain.name}
          className="chain-logo"
          loading="lazy"
          // 如果远程 logo 加载失败，则自动回退到首字母，避免坏图标
          onError={() => setShowLogo(false)}
        />
      ) : (
        chain.symbol[0]
      )}
    </div>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'all' | ChainCategory>('all')
  const [ecosystemFilter, setEcosystemFilter] = useState<string>('all')
  // 通过链表数据源动态补充真实 EVM 主网
  const [evmChains, setEvmChains] = useState<Chain[]>([])

  useEffect(() => {
    // 从预先下载好的 chainid.network 主网列表中选取 200 条真实 EVM 主网
    fetch('/data/evm_mainnets.json')
      .then((res) => res.json() as Promise<RawEvmChain[]>)
      .then((raw) => {
        // 过滤掉我们已经手动维护过的主流链（通过 explorer 域名去重）
        const existingHosts = new Set(
          chains.map((c) => {
            try {
              return new URL(c.explorer).hostname
            } catch {
              return c.explorer
            }
          }),
        )

        const palette = ['#4FC3F7', '#FFB74D', '#81C784', '#BA68C8', '#E57373']

        const mapped: Chain[] = []
        for (const item of raw) {
          if (!item.explorer) continue
          let host: string
          try {
            host = new URL(item.explorer).hostname
          } catch {
            // 如果 URL 解析失败，就跳过，保证页面上每个链接都实际可用
            continue
          }
          if (existingHosts.has(host)) continue

          const symbolSource = (item.shortName || item.chain || '').trim()
          const symbol =
            symbolSource.length > 0
              ? symbolSource.toUpperCase()
              : `CHAIN-${item.chainId}`

          const color = palette[mapped.length % palette.length]

          // 优先使用 chainid.network 提供的官方图标（该站图标为 .png）
          const logo = item.icon
            ? `https://chainid.network/icons/${item.icon}.png`
            : undefined

          mapped.push({
            id: chains.length + mapped.length + 1,
            name: item.name,
            symbol,
            category: ['L1', 'EVM'],
            ecosystem: 'EVM Mainnet (Auto)',
            explorer: item.explorer,
            color,
            logo,
          })

          if (mapped.length >= 200) break
        }

        setEvmChains(mapped)
      })
      .catch(() => {
        // 静默失败：如果加载不到远端链表，仍然展示静态主流链，不影响页面可用性
      })
  }, [])

  const extendedChains = useMemo(() => [...chains, ...evmChains], [evmChains])

  const ecosystems = useMemo(() => {
    const set = new Set<string>()
    extendedChains.forEach((c) => set.add(c.ecosystem))
    return ['all', ...Array.from(set)]
  }, [])

  // 安全获取 explorer 的 hostname，避免因为坏 URL 导致整页崩溃
  const getExplorerHost = (url: string): string => {
    try {
      return new URL(url).hostname
    } catch {
      return url
    }
  }

  // 模糊匹配函数：检查 query 的字符是否能在 text 中找到（顺序匹配，可以不连续）
  // 例如 "arbinova" 可以匹配 "Arbitrum Nova"
  const fuzzyMatch = (query: string, text: string): boolean => {
    const q = query.toLowerCase()
    const t = text.toLowerCase()
    let qIndex = 0
    for (let i = 0; i < t.length && qIndex < q.length; i++) {
      if (t[i] === q[qIndex]) {
        qIndex++
      }
    }
    return qIndex === q.length
  }

  // 为每条链计算一个匹配分数，用于排序搜索结果
  const getMatchScore = (chain: Chain, q: string, host: string): number => {
    const name = chain.name.toLowerCase()
    const symbol = chain.symbol.toLowerCase()
    const ecosystem = chain.ecosystem.toLowerCase()

    // 完全等于（最高优先级）
    if (name === q || symbol === q) return 4

    // 前缀匹配：输入 "linea"、"eth" 等
    if (name.startsWith(q) || symbol.startsWith(q)) return 3

    // 子串匹配：输入链名/币种中间的一部分
    if (name.includes(q) || symbol.includes(q)) return 2

    // 生态或域名子串匹配（次要）
    if (ecosystem.includes(q) || host.includes(q)) return 1.5

    // 模糊匹配兜底
    if (fuzzyMatch(q, name) || fuzzyMatch(q, symbol)) return 1
    if (fuzzyMatch(q, ecosystem) || fuzzyMatch(q, host)) return 0.5

    return 0
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    const base = extendedChains.filter((chain) => {
      if (category !== 'all' && !chain.category.includes(category)) return false
      if (ecosystemFilter !== 'all' && chain.ecosystem !== ecosystemFilter) return false
      return true
    })

    if (!q) return base

    const scored = base
      .map((chain) => {
        const host = getExplorerHost(chain.explorer).toLowerCase()
        const score = getMatchScore(chain, q, host)
        return { chain, score }
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)

    return scored.map(({ chain }) => chain)
  }, [query, category, ecosystemFilter, extendedChains])

  const handleOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app-shell">
      <div className="background-glow background-glow-1" />
      <div className="background-glow background-glow-2" />
      <div className="background-grid" />

      <header className="app-header">
        <div className="badge-row">
          <span className="badge-pill badge-primary">On‑chain Radar</span>
          <span className="badge-pill badge-outline">200+ 链浏览器导航</span>
        </div>
        <h1 className="headline">
          区块链浏览器
          <span className="headline-gradient"> 极速导航</span>
        </h1>
        <p className="subheadline">
          一站聚合主流公链、热门 L2、Cosmos 以及长尾 EVM 主网共{' '}
          <span className="accent">{extendedChains.length}</span> 条链的区块浏览器。
          支持中英文搜索，点击即跳转，帮你把时间花在链上，而不是找链接。
        </p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">总链数</div>
            <div className="stat-value">{extendedChains.length}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">当前匹配</div>
            <div className="stat-value">{filtered.length}</div>
          </div>
        </div>

        <div className="search-panel">
          <div className="search-input-wrapper">
            <span className="search-icon">⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索链名 / 符号 / 生态，例如：Ethereum、SOL、Cosmos、Testnet..."
              className="search-input"
            />
            {query && (
              <button className="search-clear" onClick={() => setQuery('')}>
                清空
              </button>
            )}
          </div>

          <div className="filter-row">
            <div className="filter-group">
              {allCategories.map((c) => (
                <button
                  key={c.id}
                  className={
                    'chip ' +
                    (category === c.id
                      ? 'chip-active'
                      : 'chip-ghost')
                  }
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="filter-group ecosystem-select-wrapper">
              <select
                className="ecosystem-select"
                value={ecosystemFilter}
                onChange={(e) => setEcosystemFilter(e.target.value)}
              >
                {ecosystems.map((eco) => (
                  <option key={eco} value={eco}>
                    {eco === 'all' ? '全部生态' : eco}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="card-grid">
        {filtered.map((chain) => (
          <button
            key={chain.id}
            className="chain-card"
            style={{
              borderColor: chain.color,
            }}
            onClick={() => handleOpen(chain.explorer)}
          >
            <ChainAvatar chain={chain} />
            <div className="chain-main">
              <div className="chain-title-row">
                <span className="chain-name">{chain.name}</span>
                <span className="chain-symbol">{chain.symbol}</span>
              </div>
              <div className="chain-meta-row">
                <span className="chip chip-mini chip-soft">
                  {chain.ecosystem}
                </span>
                <span className="chain-dot" />
                <span className="chain-url">
                  {getExplorerHost(chain.explorer)}
                </span>
              </div>
              <div className="chip-row">
                {chain.category.map((cat) => (
                  <span key={cat} className="chip chip-mini chip-outline">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <span className="card-arrow">↗</span>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-title">没找到匹配的链</div>
            <div className="empty-desc">
              换一个关键词试试，例如 <span className="accent">ETH / SOL / L2 / Testnet</span>。
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <span>Made for on‑chain builders · 本地运行：npm install && npm run dev</span>
      </footer>
    </div>
  )
}

export default App
