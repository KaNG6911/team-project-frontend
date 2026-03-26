"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Users, Activity, Star } from "lucide-react";

const classes = [
  { id: 1, grade: "1-р анги", desc: "Үсэг болон богино үгсийг алдаагүй бичиж сурна.", students: "1,240", avgPerformance: 85, color: "bg-[#FF6B6B]", lightColor: "bg-[#FFF0F0]", icon: "✏️" },
  { id: 2, grade: "2-р анги", desc: "Үг холбож, энгийн өгүүлбэр бичиж дадлагажина.", students: "850", avgPerformance: 78, color: "bg-[#4D96FF]", lightColor: "bg-[#F0F6FF]", icon: "📖" },
  { id: 3, grade: "3-р анги", desc: "Өгүүлбэр зүй болон эх бичвэрийг зөв бичиж сурна.", students: "620", avgPerformance: 92, color: "bg-[#6BCB77]", lightColor: "bg-[#F0FFF4]", icon: "🌟" },
  { id: 4, grade: "4-р анги", desc: "Найруулан бичих болон цээж бичгийн сорилд бэлдэнэ.", students: "430", avgPerformance: 74, color: "bg-[#FFD93D]", lightColor: "bg-[#FFFBEB]", icon: "🎯" },
  { id: 5, grade: "5-р анги", desc: "Ахисан түвшний эх бичвэрийг мастер түвшинд бичнэ.", students: "310", avgPerformance: 88, color: "bg-[#9254DE]", lightColor: "bg-[#F9F0FF]", icon: "👑" },
];

const ClassSelectionEnhanced = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-[#FAFAFF]">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header - Static & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-[#8DC63F] rounded-full" />
              <span className="text-[#8DC63F] font-black text-[10px] uppercase tracking-widest">Сурах зам</span>
            </div>
            <h2 className="text-[#5D3191] font-black text-3xl md:text-5xl tracking-tighter">Ангиа сонгох</h2>
          </div>
          <p className="text-gray-400 font-bold text-[11px] md:text-sm max-w-[280px]">
             Өөрийн түвшинд тохирсон ангиа сонгож цээж бичгийн баатар болоорой!
          </p>
        </div>

        {/* Ангиудын жагсаалт */}
        <div className="grid gap-4 md:gap-6">
          {classes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* КАРТНЫ ҮНДСЭН БИЕ - flex-row-г хэвээр үлдээв (Утас дээр ч хөндлөн) */}
              <div className="bg-white rounded-[24px] md:rounded-[35px] p-3 md:p-8 shadow-sm border border-white hover:border-purple-100 transition-all flex flex-row items-center gap-3 md:gap-8 overflow-hidden relative">
                
                {/* 1. ИКОН - Утас дээр w-14 болгож жижигсгэв */}
                <div className={`w-14 h-14 md:w-24 md:h-24 shrink-0 ${item.lightColor} rounded-[18px] md:rounded-[32px] flex items-center justify-center text-2xl md:text-5xl shadow-inner`}>
                  {item.icon}
                </div>

                {/* 2. ТЕКСТ - Утас дээр хэмжээг нь багасгав */}
                <div className="flex-1 min-w-0">
                  <div className="mb-1 md:mb-4">
                    <h3 className="text-[#5D3191] font-black text-sm md:text-2xl tracking-tight leading-none md:mb-1">{item.grade}</h3>
                    <p className="text-gray-400 font-bold text-[10px] md:text-sm leading-snug line-clamp-1 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>

                  {/* СТАТИСТИК - Маш компакт */}
                  <div className="flex flex-wrap gap-1.5 md:gap-3">
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-full">
                      <Users className="w-2.5 h-2.5 text-[#5D3191]/60" />
                      <span className="text-[8px] md:text-[11px] font-black text-[#5D3191]/60 uppercase">{item.students}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-2 py-0.5 rounded-full">
                      <Activity className="w-2.5 h-2.5 text-[#8DC63F]" />
                      <span className="text-[8px] md:text-[11px] font-black text-[#8DC63F] uppercase">{item.avgPerformance}%</span>
                    </div>
                  </div>
                </div>

                {/* 3. ТОВЧЛУУР - Хөдөлгөөн нь зөвхөн сум дээр */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 md:w-16 md:h-16 ${item.color} rounded-[12px] md:rounded-full flex items-center justify-center text-white shadow-lg group-hover:translate-x-1 transition-transform shrink-0`}
                >
                  <ChevronRight className="w-6 h-6 md:w-10 md:h-10 stroke-[3px]" />
                </motion.button>

                {/* ОД - Чиний өөрийнхөөр чинь үлдээв */}
                <div className="absolute top-4 right-16 md:right-20 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-bounce" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassSelectionEnhanced;