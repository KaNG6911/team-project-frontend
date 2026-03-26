"use client";
import React from "react";
// npm install react-icons суулгахаа мартав аа!
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#5D3191] text-white pt-16 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. БРЭНД ХЭСЭГ */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-[#FFD700] text-2xl font-black tracking-tighter uppercase">
              Цээж Бичиг
            </h2>
            <p className="text-xs font-bold tracking-widest opacity-60 uppercase">
              Бага ангийнханд зориулсан вэбсайт
            </p>
            <p className="text-sm leading-relaxed opacity-90 max-w-sm">
              Монгол хэлний зөв бичих дүрмийг <span className="text-[#8DC63F] font-black underline decoration-2 underline-offset-4">тоглоомын аргаар</span> сонирхолтой хэлбэрээр сурах хамгийн шилдэг туслах.
            </p>
          </div>

          {/* 2. ЦЭС */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 opacity-50 text-[#8DC63F]">Цэс</h4>
            <ul className="space-y-4">
              {[
                "Түвшинүүд (1-5 анги)", 
                "Зөв бичих дүрэм", 
                "Цээж бичиг хийх", 
                "Миний амжилт"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-[#8DC63F] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. ТУСЛАМЖ */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 opacity-50 text-[#8DC63F]">Тусламж</h4>
            <ul className="space-y-4">
              {["Хэрхэн ашиглах вэ?", "Нууцлалын бодлого", "Холбоо барих"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-[#8DC63F] transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. СОШИАЛ - React Icons (Fa) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 opacity-50 text-[#8DC63F]">Бидэнтэй нэгдээрэй</h4>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#3b5998] hover:scale-110 transition-all shadow-lg group">
                <FaFacebookF className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#E1306C] hover:scale-110 transition-all shadow-lg group">
                <FaInstagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:scale-110 transition-all shadow-lg group">
                <FaYoutube className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
            <p className="text-[11px] italic opacity-50 leading-relaxed font-serif">
              "Зөв бичих нь зөв сэтгэхийн үндэс"
            </p>
          </div>
        </div>

        {/* ДООД ХЭСЭГ */}
        {/* <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
            © {currentYear} Цээж Бичиг Вэбсайт. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-2 h-2 bg-[#8DC63F] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Монгол улсад үйлдвэрлэв</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;