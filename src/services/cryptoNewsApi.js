import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-rapidapi-host": "news-api14.p.rapidapi.com",
  "x-rapidapi-key": "7fc4f1e2f9mshe08cf622ca76678p1edfc2jsn68b57ab4def4",
};

const baseUrl = "https://news-api14.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () =>
        createRequest(`/v2/trendings?topic=Cryptocurrency&language=en&page=1`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
