// microCMSとやりとりするための関数を読み込み
import { createClient } from "microcms-js-sdk";

/**
 * microCMSとやりとりするためのクライアント
 */
export const client = createClient({
  // .env.localのサービスドメインを使用
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",

  // .env.local のAPIキーを使用
  apiKey: process.env.MICROCMS_API_KEY || "",
});
