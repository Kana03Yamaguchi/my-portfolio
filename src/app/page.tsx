import Image from "next/image";

/**
 * トップページコンポーネント
 * @returns トップページコンポーネント
 */
function TopPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* アニメーションGIF */}
      <Image
        src="/intro-animation.gif"
        alt="Intro Animation"
        width={900}
        height={700}
        className="object-contain z-10 relative"
      />
    </div>
  );
}

export default TopPage;
