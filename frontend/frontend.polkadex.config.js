export const network = {
  id: 'polkadex',
  name: 'Polkadex',
  tokenSymbol: 'PDEX',
  tokenDecimals: 12,
  ss58Format: 88,
  coinGeckoDenom: 'polkadex',
  backendWs: 'wss://hasura-polkadex.phuquoc.dog',
  backendHttp: 'https://hasura-polkadex.phuquoc.dog',
  nodeWs: 'wss://mainnet.polkadex.trade',
  //nodeWs: 'wss://node.phuquoc.dog',
  //backendWs: 'wss://hasura.phuquoc.dog/',
  //backendHttp: 'https://hasura.phuquoc.dog',
  googleAnalytics: 'UA-144344973-1',
  theme: '@/assets/scss/themes/polkastats.scss',
  // ranking
  historySize: 84, // 84 days
  erasPerDay: 1,
  validatorSetSize: 24,
}
export const paginationOptions = [10, 20, 50, 100]
