import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * サイト全体の基本情報を定義
 */
export const metadata = {
  title: "ポートフォリオサイト", // ページのタイトル
  description: "自己紹介と制作実績", // ページの説明
};

/**
 * 共通レイアウト
 */
export default function RootLayout({
  children, // ページごとの中身
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
        {/* ヘッダー（ナビゲーション）を表示 */}
        <Header />

        {/* ページごとの中身を表示するエリア */}
        <main className="flex-1 container mx-auto p-4">{children}</main>

        {/* フッター（コピーライトなど）を表示 */}
        <Footer />
      </body>
    </html>
  );
}
