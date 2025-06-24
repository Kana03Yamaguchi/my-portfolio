// microCMSのクライアントを読み込み
import ProjectSlider from "@/components/ProjectSlider";
import { client } from "@/libs/client";
import Image from "next/image";
import Link from "next/link";

/**
 * プロジェクトの型定義
 * - microCMSから取得するデータの型を定義
 */
type ProjectType = {
  id: string; // プロジェクトID
  title: string; // タイトル
  description: string; // 概要（HTML形式）
  image?: {
    url: string; // 画像のURL
    height: number; // 画像の高さ
    width: number; // 画像の幅
  };
  technologies: string[]; // 使用技術
  deploy_url?: string; // デプロイ URL
  github_url?: string; // GitHub URL
};

/**
 * プロジェクトページコンポーネント
 * @returns プロジェクトページコンポーネント
 */
async function ProjectsPage() {
  // 実績データを取得
  const data = await client.get({
    endpoint: "projects",
  });
  // 取得したデータの型を指定
  const projects: ProjectType[] = data.contents;

  // プロジェクトデータを整形
  const projectItems = projects.map((project) => ({
    id: project.id,
    title: project.title,
    imageUrl: project.image?.url ?? "/noimage.png",
  }));

  return (
    <main>
      {/* ページタイトル */}
      <h1 className="flex justify-center mb-6">
        <Image
          src="/project-title.png"
          alt="Project List"
          width={300}
          height={60}
          className="drop-shadow"
        />
      </h1>

      {/* スライダー表示 */}
      <ProjectSlider projects={projectItems} />

      {/* 戻るリンク */}
      <div className="mt-12">
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

export default ProjectsPage;
