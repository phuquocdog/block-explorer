export const network = {
  id: 'kusama',
  name: 'Kusama',
  tokenSymbol: 'KSM',
  tokenDecimals: 12,
  ss58Format: 2,
  coinGeckoDenom: 'kusama',
  nodeWs: 'wss://kusama-rpc.polkadot.network',
  backendWs: 'wss://kusama.polkastats.io/api/v3',
  backendHttp: 'https://kusama.polkastats.io/api/v3',
  googleAnalytics: 'UA-172854168-1',
  theme: '@/assets/scss/themes/polkastats.scss',
  // ranking
  historySize: 84, // 21 days
  erasPerDay: 4,
  validatorSetSize: 24,
}
export const paginationOptions = [10, 20, 50, 100]
