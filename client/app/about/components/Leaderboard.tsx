"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Flame, Crown } from "lucide-react";

// Туршилтын өгөгдөл (Дараа нь Backend-ээс ирнэ)
const topPlayers = [
  { id: 1, name: "Тэмүүлэн", stars: 2450, avatar: "/1.png", rank: 1, color: "from-yellow-400 to-orange-500" },
  { id: 2, name: "Ариунаа", stars: 2100, avatar: "/2.png", rank: 2, color: "from-slate-300 to-slate-400" },
  { id: 3, name: "Билгүүн", stars: 1850, avatar: "/3.png", rank: 3, color: "from-orange-300 to-orange-500" },
  { id: 4, name: "Номин", stars: 1500, avatar: "/4.png", rank: 4 },
  { id: 5, name: "Зоригт", stars: 1200, avatar: "/5.png", rank: 5 },
  { id: 6, name: "Энхээ", stars: 980, avatar: "/6.png", rank: 6 },
];

const Leaderboard = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20" id="leaderboard">
      {/* Толгой хэсэг */}
      <div className="text-center mb-16">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full mb-4 border border-yellow-100"
        >
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-yellow-700 font-black text-[10px] uppercase tracking-[0.2em]">Долоо хоногийн шилдгүүд</span>
        </motion.div>
        <h2 className="text-[#5D3191] font-black text-4xl md:text-5xl tracking-tight">
          Шилдэг <span className="text-[#8DC63F]">Баатрууд</span>
        </h2>
      </div>

      {/* Шилдэг 3 Баатар (Пьедестал) */}
      <div className="grid grid-cols-3 gap-4 items-end mb-12">
        {/* 2-р байр */}
        <div className="order-1">
          <PlayerCard player={topPlayers[1]} height="h-48" />
        </div>
        {/* 1-р байр */}
        <div className="order-2">
          <PlayerCard player={topPlayers[0]} height="h-64" isMain />
        </div>
        {/* 3-р байр */}
        <div className="order-3">
          <PlayerCard player={topPlayers[2]} height="h-40" />
        </div>
      </div>

      {/* Бусад тоглогчдын жагсаалт */}
      <div className="bg-white/50 backdrop-blur-xl rounded-[40px] border border-white p-4 shadow-[0_30px_60px_rgba(93,49,145,0.05)]">
        {topPlayers.slice(3).map((player, index) => (
          <motion.div 
            key={player.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 hover:bg-white rounded-[24px] transition-all group"
          >
            <div className="flex items-center gap-5">
              <span className="text-[#5D3191]/30 font-black text-xl w-6">#{player.rank}</span>
              <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-gray-50 group-hover:scale-110 transition-transform">
                <img src={player.avatar} className="w-full h-full object-cover" alt="avatar" />
              </div>
              <div>
                <p className="text-[#5D3191] font-black text-base">{player.name}</p>
                <div className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-500" />
                  <span className="text-gray-400 text-[10px] font-bold uppercase">Super Streak</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-[#5D3191] font-black">{player.stars}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Туслах компонент: Тоглогчийн карт
const PlayerCard = ({ player, height, isMain = false }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center"
  >
    <div className="relative mb-4">
      {isMain && (
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2"
        >
          <Crown className="w-10 h-10 text-yellow-400 fill-yellow-400" />
        </motion.div>
      )}
      <div className={`
        ${isMain ? 'w-32 h-32' : 'w-24 h-24'} 
        rounded-[35%] overflow-hidden border-4 border-white shadow-2xl relative z-10
      `}>
        <img src={player.avatar} className="w-full h-full object-cover" alt={player.name} />
      </div>
      <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-lg bg-gradient-to-tr ${player.color} z-20`}>
        {player.rank}
      </div>
    </div>
    
    <div className={`
      ${height} w-full bg-white/70 backdrop-blur-md rounded-t-[32px] rounded-b-[16px] 
      flex flex-col items-center justify-center p-4 border border-white/50 shadow-sm
    `}>
      <p className="text-[#5D3191] font-black text-sm mb-1">{player.name}</p>
      <div className="flex items-center gap-1.5 bg-yellow-400/10 px-3 py-1 rounded-full">
        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
        <span className="text-[#5D3191] font-black text-xs">{player.stars}</span>
      </div>
    </div>
  </motion.div>
);

export default Leaderboard;