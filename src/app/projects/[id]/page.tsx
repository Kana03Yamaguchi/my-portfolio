import { client } from "@/libs/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

/**
 * props定義
 */
type ProjectDetailProps = {
  params: Promise<{
    id: string; // プロジェクトID
  }>;
};

/**
 * 静的パラメータの生成
 * @returns プロジェクトIDのリスト
 */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  // プロジェクトの一覧を取得
  const data = await client.get({
    endpoint: "projects",
  });

  // プロジェクトのIDのみを抽出
  return data.contents.map((project: { id: string }) => ({
    id: project.id,
  }));
}

/**
 * プロジェクト詳細ページコンポーネント
 * @param param プロジェクト詳細ページのパラメータ
 * @returns プロジェクト詳細ページコンポーネント
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  // パラメータからプロジェクトIDを取得
  const { id } = await params;

  // プロジェクト詳細データを取得
  try {
    const project = await client.get({
      endpoint: "projects", // プロジェクトのエンドポイント
      contentId: id, // プロジェクトID
    });

    return (
      <main className="max-w-6xl mx-auto px-4 py-10 text-gray-500">
        {/* タイトルと画像・説明の横並び */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* 画像 */}
          {project.image?.url && (
            <Image
              src={project.image.url}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-contain w-full md:w-1/2"
            />
          )}

          {/* 右：テキスト */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-gray-500">
              {project.title}
            </h1>

            {/* 使用技術 */}
            <h2 className="text-lg font-semibold mt-8 mb-2">◆ 使用技術</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-white/20 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 関連リンク */}
            <h2 className="text-lg font-semibold mb-2">◆ 関連リンク</h2>
            <div className="flex gap-4 mb-4">
              {project.deploy_url && (
                <Link
                  href={project.deploy_url}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm"
                >
                  デプロイ先
                </Link>
              )}
              {project.github_url && (
                <Link
                  href={project.github_url}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 本文（HTML） */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-12 space-y-4">
          <div
            className="prose prose-invert leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>

        {/* 戻るリンク */}
        <div className="mt-12">
          <Link href="/projects">
            <Image
              src="/back-log.png"
              alt="PROJECTへ戻る"
              width={200}
              height={50}
              className="hover:opacity-80 transition"
            />
          </Link>
        </div>
      </main>
    );
  } catch (e) {
    // エラーが発生した場合は404ページを表示
    console.error("[ProjectDetailPage error]", e);
    notFound();
  }
}
