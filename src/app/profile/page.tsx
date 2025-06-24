import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";

/**
 * プロフィールページコンポーネント
 * @returns プロフィールページコンポーネント
 */
async function ProfilePage() {
  let content = "";

  try {
    // プロフィールデータを取得
    const data = await client.get({
      endpoint: "profile",
      customRequestInit: {
        cache: "no-cache",
      },
    });
    console.log(data); // ここで確認！
    // 取得したデータからcontentを抽出
    content = data.content;
  } catch (error) {
    // 取得失敗時のエラー処理
    console.error("プロフィールの取得に失敗しました:", error);
    content = "プロフィールの情報を取得できませんでした。";
  }

  return (
    <main>
      {/* ページタイトル */}
      <h1 className="flex justify-center mb-6">
        <Image
          src="/profile-title.png"
          alt="プロフィール"
          width={300}
          height={60}
          className="drop-shadow"
        />
      </h1>

      {/* プロフィールコンテンツ */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* 左側：アイコン画像 */}
        <div className="w-60 h-60">
          <Image
            src="/profile-image.png" // アイコン画像
            alt="Profile Image"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        {/* 右側：本文 */}
        <div className="flex-1 text-lg leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>

      {/* 戻るリンク */}
      <div className="absolute left-4 bottom-26">
        <Link href="/">
          <Image
            src="/back-log.png"
            alt="TOPへ戻る"
            width={200}
            height={50}
            className="hover:opacity-80 transition"
          />
        </Link>
      </div>
    </main>
  );
}

export default ProfilePage;
