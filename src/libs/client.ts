import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'goodday-corporate',  // service-domainとは https:// 以降、自分で設定した箇所を指す
  apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
});