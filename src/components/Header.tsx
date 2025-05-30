import Link from "next/link";

/**
 * Headerコンポーネント
 * - サイトのヘッダー部分を定義
 */
function Header() {
  return (
    <header className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* サイトタイトル */}
        <h1 className="text-xl font-bold">
          <Link href="/">Portfolio</Link>
        </h1>

        {/* ナビゲーションリンク */}
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            トップ
          </Link>
          <Link href="/about" className="hover:underline">
            自己紹介
          </Link>
          <Link href="/works" className="hover:underline">
            実績
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
