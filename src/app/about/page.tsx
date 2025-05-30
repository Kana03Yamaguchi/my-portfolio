// microCMSのクライアントを読み込み
import { client } from "@/libs/client";

async function About() {
  let content = "";

  try {
    // 自己紹介データを取得
    const data = await client.get({ endpoint: "about" });
    content = data.content;
  } catch (error) {
    // 取得失敗時のエラー処理
    console.error("自己紹介の取得に失敗しました:", error);
    content = "自己紹介の情報を取得できませんでした。";
  }

  return (
    <div>
      <h1>自己紹介</h1>
      {/* content表示エリア */}
      <p>{content}</p>
    </div>
  );
}

export default About;
