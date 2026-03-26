"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Crown, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const players = [
  { id: 1, name: "Тэмүүлэн", stars: 2450, avatar: "/1.png", rank: 1, title: "Алтан Баатар" },
  { id: 2, name: "Ариунаа", stars: 2100, avatar: "/2.png", rank: 2, title: "Мөнгөн Баатар" },
  { id: 3, name: "Билгүүн", stars: 1850, avatar: "/3.png", rank: 3, title: "Хүрэл Баатар" },
  { id: 4, name: "Номин", stars: 1500, avatar: "/4.png", rank: 4, title: "Ухаант" },
  { id: 5, name: "Зоригт", stars: 1200, avatar: "/5.png", rank: 5, title: "Зоригт" },
  { id: 6, name: "Энхээ", stars: 980, avatar: "/6.png", rank: 6, title: "Хурд" },
  { id: 7, name: "Хулан", stars: 850, avatar: "/7.png", rank: 7, title: "Сэргэлэн" },
  { id: 8, name: "Мишээл", stars: 720, avatar: "/8.png", rank: 8, title: "Дайчин" },
  { id: 9, name: "Тулга", stars: 650, avatar: "/9.png", rank: 9, title: "Мэргэн" },
  { id: 10, name: "Сарнай", stars: 580, avatar: "/10.png", rank: 10, title: "Гэрэлт" },
];

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFE] relative overflow-hidden pt-20 pb-16">
      
      {/* Background Auras */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full blur-[100px] -z-10" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-green-100 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 pt-6 relative z-10">
        
        {/* Navigation & Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <Link href="/">
            <motion.button whileHover={{ x: -3 }} className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white text-[#5D3191] font-black text-[10px] uppercase tracking-widest">
              <ArrowLeft className="w-3.5 h-3.5" /> Буцах
            </motion.button>
          </Link>
          <h1 className="text-[#5D3191] font-black text-2xl md:text-4xl tracking-tight text-center">
            Шилдэг <span className="text-[#8DC63F]">Баатрууд</span>
          </h1>
        </div>

        {/* Podium Section: Optimized Spacing */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-12 lg:gap-6 mb-20 px-2">
          
          {/* 2nd Place */}
          <div className="order-2 lg:order-1 w-full max-w-[260px]">
            <PodiumCard player={players[1]} height="h-[170px] lg:h-[210px]" delay={0.2} />
          </div>
          
          {/* 1st Place */}
          <div className="order-1 lg:order-2 w-full max-w-[280px]">
            <PodiumCard player={players[0]} height="h-[220px] lg:h-[280px]" isMain delay={0} />
          </div>
          
          {/* 3rd Place */}
          <div className="order-3 lg:order-3 w-full max-w-[260px]">
            <PodiumCard player={players[2]} height="h-[140px] lg:h-[170px]" delay={0.4} />
          </div>
        </div>

        {/* List Section */}
        <div className="max-w-3xl mx-auto space-y-3">
          {players.slice(3).map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-3 md:p-4 bg-white/60 backdrop-blur-md rounded-[24px] md:rounded-[30px] border border-white shadow-sm"
            >
              <div className="flex items-center gap-3 md:gap-5">
                <span className="w-6 text-center font-black text-[#5D3191]/20 text-sm md:text-lg italic">{p.rank}</span>
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-[16px] overflow-hidden p-0.5 bg-white border border-gray-100">
                  <img src={p.avatar} className="w-full h-full object-cover rounded-[14px]" alt="avatar" />
                </div>
                <div>
                  <h3 className="text-[#5D3191] font-black text-[13px] md:text-lg leading-none mb-1">{p.name}</h3>
                  <p className="text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.title}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 md:gap-2 bg-yellow-400/5 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-yellow-100/50">
                <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-[#5D3191] font-black text-sm md:text-lg">{p.stars}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PodiumCard = ({ player, height, isMain = false, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="flex flex-col items-center w-full px-2"
  >
    <div className="relative mb-3 md:mb-5">
      {/* Responsive Trophies */}
      {player.rank === 1 && (
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 z-20">
          <Crown className="w-12 h-12 md:w-18 md:h-18 text-yellow-400 fill-yellow-400 drop-shadow-md" />
        </motion.div>
      )}
      {player.rank === 2 && (
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-9 md:-top-12 left-1/2 -translate-x-1/2 z-20">
          <Trophy className="w-9 h-9 md:w-13 md:h-13 text-slate-300 fill-slate-100 drop-shadow-sm" />
        </motion.div>
      )}
      {player.rank === 3 && (
        <motion.div className="absolute -top-7 md:-top-10 left-1/2 -translate-x-1/2 z-20">
          <Trophy className="w-8 h-8 md:w-11 md:h-11 text-orange-300 fill-orange-100 drop-shadow-sm" />
        </motion.div>
      )}

      {/* Optimized Avatar Size */}
      <div className={`
        ${isMain ? 'w-36 h-36 md:w-44 md:h-44 border-yellow-400 shadow-yellow-50' : 
          player.rank === 2 ? 'w-28 h-28 md:w-36 md:h-36 border-slate-100' : 
          'w-24 h-24 md:w-32 md:h-32 border-orange-100'} 
        rounded-[30px] md:rounded-[40px] overflow-hidden p-1 bg-white shadow-xl relative z-10 border-[3px] md:border-4
      `}>
        <img src={player.avatar} className="w-full h-full object-cover rounded-[25px] md:rounded-[34px]" alt="avatar" />
      </div>
      
      <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white font-black shadow-md z-20 text-[8px] md:text-[10px] uppercase tracking-wider
        ${player.rank === 1 ? 'bg-yellow-400' : player.rank === 2 ? 'bg-slate-400' : 'bg-orange-400'}`}>
        {player.rank}-р байр
      </div>
    </div>
    
    <div className={`
      ${height} w-full bg-white/90 backdrop-blur-md rounded-t-[35px] md:rounded-t-[50px] rounded-b-[25px] md:rounded-b-[35px] 
      flex flex-col items-center justify-center p-4 md:p-6 border border-white shadow-sm
    `}>
      <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-[#5D3191]/40 mb-1">{player.title}</span>
      <h3 className="text-[#5D3191] font-black text-lg md:text-2xl mb-3 md:mb-4 italic uppercase">{player.name}</h3>
      <div className="flex items-center gap-1.5 md:gap-2 bg-yellow-50 px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl border border-yellow-100/30">
        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
        <span className="text-[#5D3191] font-black text-base md:text-xl tracking-tighter">{player.stars}</span>
      </div>
    </div>
  </motion.div>
);

export default LeaderboardPage;