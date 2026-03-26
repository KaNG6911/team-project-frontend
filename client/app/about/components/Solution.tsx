"use client";
import React from "react";
import { motion } from "framer-motion";
import { Headphones, PenTool, Trophy, Sparkles } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Сонсох",
    desc: "Мэргэжлийн багшийн уншсан цээж бичгийг анхааралтай сонсоно.",
    icon: <Headphones className="w-8 h-8 text-[#4D96FF]" />,
    color: "bg-[#F0F6FF]",
    borderColor: "border-blue-100",
  },
  {
    id: 2,
    title: "Бичих",
    desc: "Сонссон зүйлээ алдаагүй зөв бичиж, гараа дасгалжуулна.",
    icon: <PenTool className="w-8 h-8 text-[#8DC63F]" />,
    color: "bg-[#F4FFF0]",
    borderColor: "border-green-100",
  },
  {
    id: 3,
    title: "Шалгах",
    desc: "Систем таны алдааг шууд засаж, зөв хувилбарыг харуулна.",
    icon: <Trophy className="w-8 h-8 text-[#FFD93D]" />,
    color: "bg-[#FFFBEB]",
    borderColor: "border-yellow-100",
  },
];

const Solution = () => {
  return (
    <section className="pb-24 bg-[#FDFCFE]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Хэсгийн толгой */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-50 px-4 py-1.5 rounded-full mb-6 border border-purple-100"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#5D3191]" />
            <span className="text-[#5D3191] font-black text-[10px] uppercase tracking-widest">Яаж ажилладаг вэ?</span>
          </motion.div>
          
          <h2 className="text-[#5D3191] font-black text-4xl md:text-5xl tracking-tighter mb-6">
            Бидний <span className="text-[#8DC63F]">Шийдэл</span>
          </h2>
          <p className="text-gray-400 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
            Цээж бичиг хийх явцыг хамгийн энгийн бөгөөд үр дүнтэйгээр <br className="hidden md:block" /> 
            3 алхамд багтаалаа.
          </p>
        </div>

        {/* Шийдлийн картууд */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          
          {/* Холбогч зураас (Зөвхөн том дэлгэцэнд) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-50 -z-0" />

          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <div className="bg-white rounded-[45px] p-10 shadow-[0_15px_45px_rgba(93,49,145,0.04)] border border-transparent hover:border-purple-100 transition-all flex flex-col items-center text-center h-full hover:shadow-[0_25px_60px_rgba(93,49,145,0.08)]">
                
                {/* Икон хэсэг */}
                <div className={`w-20 h-20 ${item.color} ${item.borderColor} border rounded-[30px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                {/* Алхамын дугаар */}
                <div className="absolute top-6 right-8 text-6xl font-black text-gray-50 group-hover:text-purple-50 transition-colors pointer-events-none">
                  0{item.id}
                </div>

                <h3 className="text-[#5D3191] font-black text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-400 font-bold text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Доод талын товч */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8DC63F] text-white px-12 py-5 rounded-[28px] font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-green-100 hover:bg-[#7db137] transition-all"
          >
            Одоо туршаад үзэх
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Solution;