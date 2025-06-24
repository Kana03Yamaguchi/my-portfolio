import Link from "next/link";
import Image from "next/image";

/**
 * Headerコンポーネント
 * - サイトのヘッダー部分を定義
 */
function Header() {
  return (
    <header className="bg-gray-100 text-gray-900 shadow-md">
      <div className="container mx-auto  flex justify-between items-center">
        {/* サイトタイトル */}
        <h1 className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/portfolio-logo.png"
              alt="Portfolio"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
          </Link>
        </h1>

        {/* ナビゲーションリンク */}
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            TOP
          </Link>
          <Link href="/profile" className="hover:underline">
            PROFILE
          </Link>
          <Link href="/projects" className="hover:underline">
            PROJECT
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
