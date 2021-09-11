export const network = {
  id: 'phuquocdog',
  name: 'Phu Quoc Dog',
  tokenSymbol: 'PQD',
  tokenDecimals: 10,
  ss58Format: 0,
  coinGeckoDenom: 'phuquocdog',
  nodeWs: 'wss://node.phuquoc.dog',
  backendWs: 'ws://localhost:8082/v1/graphql',
  backendHttp: 'http://localhost:8082/v1/graphql',
  googleAnalytics: 'UA-144344973-1',
  theme: '@/assets/scss/themes/polkastats.scss',
  // ranking
  historySize: 84, // 84 days
  erasPerDay: 1,
  validatorSetSize: 24,
}
export const paginationOptions = [10, 20, 50, 100]