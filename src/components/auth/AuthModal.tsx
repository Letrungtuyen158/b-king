import React, { useState } from "react";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "register">("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-l ${
              tab === "login"
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setTab("login")}
          >
            Đăng nhập
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r ${
              tab === "register"
                ? "bg-blue-800 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setTab("register")}
          >
            Đăng ký
          </button>
        </div>
        {tab === "login" ? (
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
            >
              Đăng nhập
            </button>
            <div className="mt-4 text-center text-sm">
              Chưa có tài khoản?{" "}
              <span
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setTab("register")}
              >
                Đăng ký
              </span>
            </div>
          </form>
        ) : (
          <form>
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
            >
              Đăng ký
            </button>
            <div className="mt-4 text-center text-sm">
              Đã có tài khoản?{" "}
              <span
                className="text-blue-700 underline cursor-pointer"
                onClick={() => setTab("login")}
              >
                Đăng nhập
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

