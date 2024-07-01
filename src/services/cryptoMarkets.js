import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoMarketsHeaders = {
  "x-rapidapi-host": "tokeninsight-crypto-api1.p.rapidapi.com",
  "x-rapidapi-key": "7fc4f1e2f9mshe08cf622ca76678p1edfc2jsn68b57ab4def4",
  TI_API_KEY: "ff8cce2793c345fea56ea2788608c211",
};
const baseUrl = "https://tokeninsight-crypto-api1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoMarketsHeaders });

export const cryptoMarkets = createApi({
  reducerPath: "cryptoMarkets",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoGainer: builder.query({
      query: () => createRequest("/api/v1/coins/top-gainers?range=100"),
    }),
    getCryptoLoser: builder.query({
      query: () => createRequest("/api/v1/coins/top-losers?range=100"),
    }),
    getCryptoExchanges: builder.query({
      query: () => createRequest("/api/v1/exchanges/list?limit=300&offset=0"),
    }),
  }),
});

export const {
  useGetCryptoGainerQuery,
  useGetCryptoLoserQuery,
  useGetCryptoExchangesQuery,
  useGetCryptoExchangeDataQuery,
} = cryptoMarkets;
