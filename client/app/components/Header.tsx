"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, X, Star, ChevronDown, LogIn, Lock, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const avatars = [
  { id: 1, name: "Зоригт", src: "/1.png", rank: "Шинэ Баатар" },
  { id: 2, name: "Ухаант", src: "/2.png", rank: "Про Баатар" },
  { id: 3, name: "Шившлэгт", src: "/3.png", rank: "Мастер" },
  { id: 4, name: "Баатар", src: "/4.png", rank: "Домогт" },
  { id: 5, name: "Гайхамшигт", src: "/5.png", rank: "Легенд" },
  { id: 6, name: "Гэрэлт", src: "/6.png", rank: "Эпик" },
  { id: 7, name: "Тамир", src: "/7.png", rank: "Раритет" },
  { id: 8, name: "Сэргэлэн", src: "/8.png", rank: "Найдвартай" },
  { id: 9, name: "Галзуу", src: "/9.png", rank: "Экстрим" },
  { id: 10, name: "Гүн ухаант", src: "/10.png", rank: "Мистик" },
  { id: 11, name: "Гайхамшигт", src: "/11.png", rank: "Гранд" },
  { id: 12, name: "Тэнгэрийн", src: "/12.png", rank: "Бурхан" },
  { id: 13, name: "Галзуу", src: "/13.png", rank: "Экстрим" },
  { id: 14, name: "Гүн ухаант", src: "/14.png", rank: "Мистик" },
  { id: 15, name: "Гайхамшигт", src: "/15.png", rank: "Гранд" },
  { id: 16, name: "Тэнгэрийн", src: "/16.png", rank: "Бурхан" },
  { id: 17, name: "Галзуу", src: "/17.png", rank: "Экстрим" },
  { id: 18, name: "Гүн ухаант", src: "/18.png", rank: "Мистик" },
  { id: 19, name: "Гайхамшигт", src: "/19.png", rank: "Гранд" },
  { id: 20, name: "Тэнгэрийн", src: "/20.png", rank: "Бурхан" },
  
];


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showSelector, setShowSelector] = useState(false);
  const [userStars] = useState(999); 
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[2]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 ${
      isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4 md:py-6"
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* IMAGE-BASED 3D LOGO */}
       {/* FULL-COVER 3D BADGE LOGO */}
<div className="flex items-center gap-2 md:gap-3 shrink-0 group cursor-pointer">
  <div className="relative w-12 h-12 md:w-16 md:h-16">
    
    {/* Арын Ногоон Талбай (Base Layer) - 3D эффекттэй */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#8DC63F] to-[#76a835] rounded-xl md:rounded-2xl shadow-[0_5px_0_0_#5e852a] transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
    
    {/* Зураг - Одоо энэ нь ногоон талбайгаа бүрэн эзэлнэ */}
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl" 
    >
      <div className="relative w-full h-full p-0"> {/* Padding-ийг 0 болгож дүүргэв */}
        <Image 
          src="/logo.png" 
          alt="Hero Logo"
          fill
          className="object-cover scale-110" // scale-110 нь зургийг талбайдаа яг "дүүрэн" харагдуулна
          priority
        />
      </div>
    </motion.div>

    {/* Баатрын гялалзах оч */}
    <motion.div
      animate={{ opacity: [0, 1, 0], y: [-5, 5, -5] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute -top-1 -right-1 z-20"
    >
      <Sparkles className="w-5 h-5 text-white/80" />
    </motion.div>
  </div>

  {/* Текст хэсэг */}
  <div className="flex flex-col ml-1">
    <h1 className="text-[#5D3191] font-black text-sm md:text-xl leading-none tracking-tighter">
      ЗӨВ БИЧГИЙН
    </h1>
    <h2 className="text-[#8DC63F] font-black text-[10px] md:text-sm leading-none uppercase tracking-[0.25em] mt-1">
      БААТАР
    </h2>
  </div>
</div>

        {/* НЭВТРЭХ ЭСВЭЛ ПРОФАЙЛ */}
        {!isLoggedIn ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLoggedIn(true)}
            className="flex items-center gap-2 px-5 py-2 md:px-7 md:py-2.5 bg-[#5D3191] text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-[16px] md:rounded-[18px] shadow-lg shadow-purple-100"
          >
            <LogIn className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Нэвтрэх
          </motion.button>
        ) : (
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/leaderboard"> 
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 bg-white border border-gray-100 rounded-2xl md:rounded-full shadow-sm"
              >
                <Trophy className="w-5 h-5 text-yellow-500 md:mr-2" />
                <span className="text-[#5D3191] font-bold text-[10px] uppercase tracking-widest hidden md:block">Шилдэгүүд</span>
              </motion.div>
            </Link>

            <div className="flex items-center bg-white/90 border border-gray-100 rounded-[20px] md:rounded-[24px] p-0.5 md:p-1 shadow-sm">
              <div className="flex items-center gap-1.5 px-2 md:px-4 py-1.5 bg-gray-50/50 rounded-[16px] md:rounded-[20px] relative">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-[#5D3191] font-black text-sm md:text-lg leading-none">{userStars}</span>
              </div>

              <div 
                onClick={() => setShowSelector(!showSelector)}
                className="flex items-center gap-2 md:gap-3 pl-2 pr-1 cursor-pointer relative"
              >
                <div className="text-right hidden md:block">
                  <p className="text-[#5D3191] font-bold text-[12px] leading-tight">{selectedAvatar.name}</p>
                  <p className="text-[#8DC63F] font-black text-[7px] uppercase tracking-tighter mt-0.5 flex items-center justify-end gap-0.5">{selectedAvatar.rank}</p>
                </div>
                
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#5D3191] to-[#8DC63F]">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                      <Image src={selectedAvatar.src} alt="Hero" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs border border-gray-50 md:hidden">
                    <ChevronDown className={`w-2 h-2 text-[#5D3191] ${showSelector ? "rotate-180" : ""}`} />
                  </div>
                </div>

                <AnimatePresence>
                  {showSelector && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 10, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute right-0 top-full mt-3 w-64 md:w-72 bg-white rounded-[28px] md:rounded-[32px] shadow-2xl border border-gray-50 p-5 md:p-6 z-[60]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#5D3191] font-black text-[9px] uppercase tracking-widest opacity-40 italic">Баатрын сонголт</span>
                        <X className="w-4 h-4 text-gray-300" onClick={(e) => { e.stopPropagation(); setShowSelector(false); }} />
                      </div>
                      <div className="grid grid-cols-4 gap-2 md:gap-3 max-h-52 overflow-y-auto pr-1 no-scrollbar">
                        {avatars.map((av) => {
                          const isLocked = userStars < av.minStars;
                          return (
                            <div key={av.id} className="relative group/item">
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isLocked) { setSelectedAvatar(av); setShowSelector(false); }
                                }}
                                className={`aspect-square rounded-xl md:rounded-2xl transition-all p-0.5 ${selectedAvatar.id === av.id ? "bg-[#5D3191]" : "bg-gray-50"} ${isLocked ? "opacity-30 grayscale cursor-not-allowed" : "cursor-pointer hover:scale-110"}`}
                              >
                                <div className="w-full h-full rounded-[10px] md:rounded-[14px] overflow-hidden border-2 border-white bg-white">
                                  <Image src={av.src} width={50} height={50} className="w-full h-full object-cover" alt={av.name} />
                                </div>
                              </div>
                              {isLocked && <Lock className="absolute inset-0 m-auto w-3 h-3 text-[#5D3191]" />}
                            </div>
                          );
                        })}
                      </div>
                      <button 
                        onClick={() => { setIsLoggedIn(false); setShowSelector(false); }}
                        className="w-full mt-4 pt-4 border-t border-gray-50 text-red-400 font-bold text-[9px] uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        <LogOut className="w-3 h-3" /> Гарах
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
