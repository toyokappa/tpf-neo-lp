import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tpf-neo",
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export const getNewsList = async (limit: number | null = null) => {
  const queries = { orders: "-postAt" };
  Object.assign(queries, limit ? { limit } : {});

  const data = await client.get({
    endpoint: "news_posts",
    queries,
  });
  return data;
};
