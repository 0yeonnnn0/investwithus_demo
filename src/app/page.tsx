// 분기 선택 페이지
"use client";

import { useRouter } from "next/navigation";

export default function VersionSelectPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      {/* 상단 로고/텍스트 */}
      <h1 className="text-4xl font-bold mb-12 text-gray-800">Investwithus</h1>

      {/* 선택 버튼 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl h-[70vh]">
        <button
          onClick={() => router.push("/v1")}
          className="w-full h-full bg-white border border-gray-300 rounded-2xl text-3xl font-bold shadow-md transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
        >
          Version 1
        </button>

        <button
          onClick={() => router.push("/v2")}
          className="w-full h-full bg-white border border-gray-300 rounded-2xl text-3xl font-bold shadow-md transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
        >
          Version 2
        </button>
      </div>
    </div>
  );
}
