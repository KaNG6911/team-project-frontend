"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFE] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Арын чимэглэл хөдөлгөөнт дүрсүүд */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px] z-10"
      >
        {/* Лого хэсэг */}
        <div className="flex flex-col items-center mb-10">
          <motion.div 
            whileHover={{ rotate: 10 }}
            className="w-16 h-16 bg-[#5D3191] rounded-[22px] flex items-center justify-center shadow-xl shadow-purple-100 mb-4"
          >
            <span className="text-white font-black text-3xl">З</span>
          </motion.div>
          <h1 className="text-[#5D3191] font-black text-2xl tracking-tight">
            Зөв Бичгийн <span className="text-[#8DC63F]">Баатар</span>
          </h1>
          <p className="text-gray-400 font-medium text-sm mt-2">Баатар болох аялалаа эхлүүлье!</p>
        </div>

        {/* Форм хэсэг */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_20px_70px_rgba(93,49,145,0.08)] border border-white">
          <h2 className="text-[#5D3191] font-black text-xl mb-8 flex items-center gap-2">
            Нэвтрэх <Sparkles className="w-5 h-5 text-yellow-400" />
          </h2>

          <div className="space-y-5">
            {/* Имэйл оруулах */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-[#5D3191]/40 uppercase tracking-widest ml-1">Имэйл хаяг</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <input 
                  type="email" 
                  placeholder="example@mail.com"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:border-purple-200 focus:bg-white transition-all font-medium text-[#5D3191]"
                />
              </div>
            </div>

            {/* Нууц үг оруулах */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black text-[#5D3191]/40 uppercase tracking-widest">Нууц үг</label>
                <button className="text-[10px] font-bold text-[#8DC63F] hover:underline">Нууц үг мартсан?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:border-purple-200 focus:bg-white transition-all font-medium text-[#5D3191]"
                />
              </div>
            </div>

            {/* Нэвтрэх товч */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#4a2775" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#5D3191] text-white font-black py-4 rounded-[22px] shadow-lg shadow-purple-100 flex items-center justify-center gap-2 mt-4 transition-all"
            >
              Аялалыг эхлүүлэх
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-medium">
              Бүртгэлгүй юу? {" "}
              <button className="text-[#5D3191] font-black hover:text-[#8DC63F] transition-colors">Бүртгүүлэх</button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;