import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'goodday-corporate',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.NEXT_PUBLIC_API_KEY ?? '',
});