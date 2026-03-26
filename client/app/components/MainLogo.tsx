"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MainLogo = () => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer select-none">
      <div className="relative">
        {/* Ар талын зөөлөн гэрэлтэлт - GrapeSEED шиг нил ягаан өнгөтэй */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -inset-2 bg-purple-200 rounded-[30px] blur-xl opacity-40 group-hover:opacity-70 transition-opacity"
        />
        
        {/* Логоны үндсэн хэлбэр - Маш зөөлөн дугуйрсан (Super Rounded) */}
        <div className="relative w-16 h-16 bg-[#5D3191] rounded-[24px] flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(93,49,145,0.4)] border-b-4 border-purple-900 overflow-hidden transition-transform group-hover:scale-105 active:scale-95">
          
          {/* Баатрын нөмрөгний эффект (background дээр) */}
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-purple-400/20 rotate-45 rounded-full" />
          
          <div className="flex flex-col items-center justify-center pt-1">
            {/* Гэрэлтдэг шар од */}
            <motion.div
              animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]" />
            </motion.div>
            
            {/* "З" үсэг - Маш зузаан, дугуйрсан фонттой мэт */}
            <span className="text-white font-black text-3xl leading-none mt-[-2px] drop-shadow-md">
              З
            </span>
          </div>

          {/* Баатрын гялалзах эффект */}
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "200%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />
        </div>
      </div>

      {/* Текст хэсэг */}
      <div className="flex flex-col -space-y-1">
        <h1 className="flex items-center gap-1.5">
          <span className="text-[#5D3191] font-black text-[26px] tracking-tight">Зөв Бичгийн</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-[#8DC63F] font-black text-[22px] tracking-tight uppercase">
            Баатар
          </span>
          {/* Хөөрхөн Badge */}
          <div className="bg-purple-100 px-2 py-0.5 rounded-full flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#8DC63F] rounded-full animate-pulse" />
            <span className="text-[10px] text-[#5D3191] font-bold uppercase tracking-wider">Сурагч</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogo;