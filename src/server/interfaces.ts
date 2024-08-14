export interface opBNBStatsResponse {
  data: {
    updateTime: number;
    transferDayCount: LayerStatisticsData[];
  };
}

export interface comboStatsResponse {
  data: {
    updateTime: number;
    transferDayCount: LayerStatisticsData[];
  };
}

export interface xterioStatsResponse {
  chart: { date: string; value: string }[];
}

export interface opBNBDappsResponse {
  currentPage: number;
  list: {
    dapp: DappData;
    staticInfo: DappStatsInfo;
  }[];
  totalCount: number;
}

export interface LayerStatisticsData {
  timestamp: number;
  count: number;
  block_count: number;
  avg_block_time: string;
  avg_block_size: string;
  first_deposit_accounts: string;
  active_accounts: string;
  deposit_transfer_count_without_nft: string;
  deposit_token_amount_without_nft: string;
  withdraw_transfer_count_without_nft: string;
  withdraw_token_amount_without_nft: string;
  transfer_count_without_nft: string;
  transfer_token_amount_without_nft: string;
  gas_used: string;
  average_gas_price: string;
  average_gas_limit: string;
  block_rewards: string;
  receive_from_accounts: string;
  send_to_accounts: string;
  deposit_nft_transfer_count: string;
  withdraw_nft_transfer_count: string;
  nft_transfer_count: string;
  total_cost: string;
  submit_l2_trx_cost: string;
  propose_l2_output_cost: string;
  total_revenue: string;
  l1_data_fee_revenue: string;
  l2_execution_fee_revenue: string;
  l2_base_fee: string;
  priority_fee: string;
  transfer20_count: string;
  contract_create_transfer_count: string;
  tps_per_day: string;
  deposit_address_count: string;
  deposit_transfer_count: string;
  deposit_token_amount: string;
  withdraw_transfer_count: string;
  withdraw_token_amount: string;
  withdraw_address_count: string;
  bep20_deposit_token_count: string;
  bep20_deposit_token_amount: string;
  bep20_withdraw_token_count: string;
  bep20_withdraw_token_amount: string;
  bnb_holder_count: string;
  bnb_transfer_count: string;
  new_add_account_count: string;
  daily_from_count: string;
  daily_to_count: string;
  daily_distinct_from_count: string;
  daily_distinct_fo_count: string;
  weekly_from_count: string;
  weekly_to_count: string;
  weekly_unique_from_count: string;
  weekly_unique_to_count: string;
  tvl: string;
  stable_coins_total_circulating: string;
  stable_coins_total_circulatingUSD: string;
  stable_coins_total_bridgedToUSD: string;
  dex_trading_volume: string;
  active_contract_count: string;
  weekly_active_contract_count: string;
  transaction_fee: string;
  weekly_transaction_fee: string;
  last_week_active_account_count: string;
  last_month_active_contract_count: string;
  last_month_active_account_count: string;
  last_month_transaction_fee: string;
}

export interface DappData {
  category: string;
  description: string;
  logo_url: string;
  name: string;
  website: string;
}

export interface DappStatsInfo {
  daily: {
    users: {
      value: number;
    };
    txns: {
      value: number;
    };
  };
  monthly: {
    users: {
      value: number;
    };
    txns: {
      value: number;
    };
  };
}
