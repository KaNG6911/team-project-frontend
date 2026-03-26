"use client";
import React from "react";
import { motion } from "framer-motion";
import { PencilLine, Sparkles, Volume2, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-[#FDFBFF] flex items-center py-20 lg:py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#F0E7FF] rounded-full blur-[120px] -z-0" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-32 relative z-10">
        
        {/* 1. ТЕКСТ ХЭСЭГ - pr-12 нэмж зургаас холдуулсан */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left lg:pr-12">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-[#5D3191] px-4 py-1.5 rounded-2xl shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8DC63F]" />
            <span className="text-[10px] font-black  uppercase tracking-[0.2em]">Цээж бичгийн ухаалаг туслах</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#5D3191] text-4xl md:text-5xl lg:text-6xl font-[1000] leading-[1.1] tracking-tighter"
            >
              Сонсоод <span className="text-[#8DC63F]">бичиж</span> <br /> 
              эхэлье!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed font-bold mx-auto lg:mx-0 pt-2"
            >
              Чиний доторх "Баатар" сэрэхэд бэлэн үү? <br /> 
              Зөв Бичгийн Баатар чамд үг бүрийг зөв сонсож, төгс бичиж сурахад туслах болно. Өнөөдөр чи хэдэн үг "аврах" вэ?
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <button className="bg-[#5D3191] text-white px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-widest hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 group">
              Бичиж эхлэх 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border-2 border-purple-50 text-[#5D3191] px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-widest hover:bg-purple-50 transition-all flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#8DC63F]" />
              Заавар үзэх
            </button>
          </motion.div>
        </div>

        {/* 2. ЗУРАГ ХЭСЭГ - Badge-ийг доош нь шилжүүлсэн */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-[50px] overflow-hidden border-[12px] border-white shadow-[0_40px_80px_rgba(93,49,145,0.1)] bg-white group">
            <img 
              src="/huuhed.png" 
              alt="Dictation Practice"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Шинэ сорилт Badge - Нүүр таглахгүй байхаар bottom-6 руу шилжүүлэв */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-[24px] shadow-2xl border border-purple-50 flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-100">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#5D3191] font-[1000] text-[10px] uppercase tracking-tighter leading-none">Шинэ сорилт</span>
                <span className="text-gray-400 font-bold text-[9px] uppercase mt-1">Бэлэн боллоо</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
