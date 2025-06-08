import { Ship } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center ">
      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
        <Ship className="w-10 h-10 text-white" />
      </div>
      <p className="mt-6 text-blue-600 font-bold text-xl tracking-wide animate-fade-in">
        Đang tải dữ liệu...
      </p>
    </div>
  );
}

