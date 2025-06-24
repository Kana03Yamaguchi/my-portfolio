"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

/**
 * プロジェクトの型定義
 */
type ProjectType = {
  id: string; // プロジェクトID
  title: string; // タイトル
  imageUrl: string; // 画像のURL
};

/**
 * props定義
 */
type ProjectSliderProps = {
  projects: ProjectType[];
};

/**
 * プロジェクトスライダーコンポーネント
 * @param projects プロジェクトの配列
 * @returns プロジェクトスライダーコンポーネント
 */
function ProjectSlider({ projects }: ProjectSliderProps) {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full max-w-5xl shadow-lg"
      >
        {projects.map((project, index) => (
          // 各プロジェクトをスライドとして表示
          <SwiperSlide key={project.id}>
            <Link href={"/projects/" + project.id}>
              <div className="flex flex-col items-center gap-6 cursor-pointer">
                {/* プロジェクトの画像 */}
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="rounded-lg object-contain max-h-[60vh] w-auto"
                />
                {/* プロジェクトのタイトル */}
                <h2 className="text-2xl font-bold text-center text-white drop-shadow">
                  {project.title}
                </h2>
                {/* スライドのインデックス表示 */}
                <p className="text-sm text-white drop-shadow mt-2">
                  {index + 1} / {projects.length}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* カスタムスタイルでページネーション下にずらす */}
        <style jsx global>{`
          /* スライダーのナビゲーションボタン */
          .swiper-button-prev,
          .swiper-button-next {
            color: #9ca3af; /* gray-400 */
            transition: color 0.3s ease;
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            color: #6b7280; /* gray-500 */
          }

          .swiper-pagination {
            bottom: 20px !important;
          }

          .swiper-pagination-bullet {
            background-color: #9ca3af !important; /* gray-400 */
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: #6b7280 !important; /* gray-500 */
          }
        `}</style>
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
