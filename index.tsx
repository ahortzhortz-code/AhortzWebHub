import React, { useState, useRef } from 'react';

// นำเข้าข้อมูลจาก Spreadsheet ตามที่ผู้ใช้ระบุ
const webData = [
  {
    id: 1,
    title: "นับจานซูชิโระ",
    url: "https://ahortzhortz-code.github.io/Sushiro-Cal/",
    desc: "สามารถเลือกสีจานได้และหากมีเมนูพิเศษก็สามารถกรอกข้อมูลเพิ่มเข้าไปได้ สามารถบันทึกมื้อและเริ่มมื้อใหม่ได้",
    icon: "🏠"
  },
  {
    id: 2,
    title: "แจ้งเตือนหาร HBO",
    url: "https://ahortzhortz-code.github.io/HBO-Tracker/",
    desc: "สามารถแจ้งระยะเวลาในการจ่ายรายเดือน หรือรายปี หรือกำหนดราคา และมีคิวอาร์โค้ดในการจ่าย",
    icon: "👑"
  },
  {
    id: 3,
    title: "แจ้งเตือนหาร Youtube",
    url: "https://ahortzhortz-code.github.io/Youtube-Tracker-1998/",
    desc: "สามารถแจ้งระยะเวลาในการจ่ายรายเดือน หรือรายปี หรือกำหนดราคา และมีคิวอาร์โค้ดในการจ่าย",
    icon: "📺"
  },
  {
    id: 4,
    title: "MenoTrack",
    url: "https://ahortzhortz-code.github.io/MenoTrack/",
    desc: "ติดตามรอบเดือน และวิเคราะห์สุขภาพของคุณ สามารถกำหนดและคาดการณ์รอบเดือนได้",
    icon: "💌"
  },
  {
    id: 5,
    title: "Split It",
    url: "https://ahortzhortz-code.github.io/split_bill/",
    desc: "หารค่าของ ค่าข้าว เวลาไปเที่ยวกับเพื่อนๆ ระบบจะคำนวณเงินให้รายคน ว่าต้องจ่ายให้ใครบ้างหรือรับเงินจากใครบ้าง โดยมี QR code ให้ชำระทันที",
    icon: "✂️"
  },
  {
    id: 6,
    title: "My Quest Log",
    url: "https://ahortzhortz-code.github.io/Quest-Log---MMORPG-To-Do-List/",
    desc: "to do list ในรูปแบบ MMORPG โดยที่สามารถตั้งเควสระดับสูง กลาง และเควสรายวันเพื่ออัพเลเวลได้",
    icon: "📗"
  },
  {
    id: 7,
    title: "บันทึกค่าน้ำค่าไฟ",
    url: "https://ahortzhortz-code.github.io/Baby-Blue/",
    desc: "เว็บบันทึกค่าน้ำและค่าไฟ กำหนดมิเตอร์เริ่มต้น และรอบบิลได้ สามารถจดบันทึกรายวันได้",
    icon: "📜"
  },
  {
    id: 8,
    title: "Princess Boutique",
    url: "https://ahortzhortz-code.github.io/POS-Point-of-Sale-system-for-book-booths./",
    desc: "ระบบ POS คิดเงินออกบูธ สามารถกำหนดราคา เปลี่ยนชื่อร้าน กำหนดรหัส และสรุปยอดขายให้และนับสต็อกให้ สามารถจ่ายเงินผ่าน QR code ได้",
    icon: "📠"
  },
  {
    id: 9,
    title: "OrderHub",
    url: "https://ahortzhortz-code.github.io/OrderHub/",
    desc: "แอปจดออเดอร์ ไว้สั่งข้าว หรือฝากซื้อของ มีค่าเงินหากเป็นการฝากซื้อของจากต่างประเทศ",
    icon: "🛒"
  }
];

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#cbb8e8] flex items-center justify-center p-2 sm:p-4 font-sans selection:bg-pink-300">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;500;600;700&family=VT323&display=swap');
        
        .font-pixel { font-family: 'VT323', monospace; }
        .font-cute { font-family: 'Mali', cursive; }
        
        .retro-shadow {
          box-shadow: 4px 4px 0px 0px #f8bbd0;
        }
        
        .retro-shadow-hard {
          box-shadow: 6px 6px 0px 0px #8c77b8;
        }
        
        .retro-button-shadow {
          box-shadow: 0px 4px 0px 0px #d81b60;
        }
        
        .retro-button-shadow:active {
          box-shadow: 0px 0px 0px 0px #d81b60;
          transform: translateY(4px);
        }

        .text-outline-pink {
          text-shadow: 
            -2px -2px 0 #fff,  
             2px -2px 0 #fff,
            -2px  2px 0 #fff,
             2px  2px 0 #fff,
             0px  4px 0px #ff9ecd;
        }
      `}} />

      {/* Main Window Container */}
      <div className="max-w-2xl w-full bg-[#fce4ec] rounded-2xl overflow-hidden border-[5px] border-[#a18cd1] retro-shadow-hard font-cute relative">
        
        {/* Window OS Header */}
        <div className="bg-[#a18cd1] text-white px-3 py-1.5 flex justify-between items-center border-b-[5px] border-[#a18cd1]">
          <div className="flex items-center gap-2">
            <span className="text-sm">💖</span>
            <span className="text-sm font-bold tracking-widest font-pixel">AHORTZ WEB HUB</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-blue-300 border-2 border-blue-500"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-300 border-2 border-yellow-500"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-pink-400 border-2 border-pink-600 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white leading-none">X</span>
            </div>
          </div>
        </div>

        {/* Decorative Scenery Header (Rebuilt with Emojis) */}
        <div className="bg-gradient-to-b from-[#a0d8ef] to-[#e0f7fa] h-48 relative overflow-hidden border-b-[4px] border-dashed border-[#ffb6c1]">
          <div className="absolute top-2 left-2 text-6xl drop-shadow-md">🌈</div>
          <div className="absolute top-4 left-1/4 text-5xl opacity-90 drop-shadow-sm">☁️</div>
          <div className="absolute top-8 right-1/4 text-4xl opacity-90 drop-shadow-sm">☁️</div>
          <div className="absolute bottom-5 right-4 text-7xl drop-shadow-lg z-10">🏰</div>
          <div className="absolute bottom-5 left-10 text-6xl drop-shadow-md z-20">🐱</div>
          <div className="absolute bottom-4 left-28 text-4xl drop-shadow-md z-10">🌲</div>
          <div className="absolute bottom-2 right-28 text-3xl drop-shadow-md z-10">🌲</div>
          
          <div className="absolute bottom-0 w-full h-10 bg-[#aed581] border-t-[5px] border-[#8bc34a] rounded-t-[40%] scale-110 z-0"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pt-2">
            <h1 className="text-4xl sm:text-6xl font-black text-[#ff8cbd] text-outline-pink tracking-wider font-pixel drop-shadow-md text-center">
              AHORTZ WEB HUB
            </h1>
            <div className="bg-[#ffb6c1] text-white px-4 sm:px-6 py-1.5 rounded-full border-4 border-white text-xs sm:text-sm font-bold mt-2 shadow-md flex items-center justify-center gap-2 max-w-[90%] text-center leading-tight">
              <span className="text-yellow-200 shrink-0">✨</span>
              <span>รวมทุกเว็บไซต์ของฉัน จากเคะตัวน้อยน่ารัก</span>
              <span className="text-yellow-200 shrink-0">✨</span>
            </div>
          </div>
        </div>

        {/* Dashboard Widgets */}
        <div className="flex flex-col sm:flex-row gap-3 p-4 bg-[#f8e5f0]">
          {/* Left Widget */}
          <div className="flex-1 bg-white border-4 border-[#dcd1f7] rounded-2xl p-3 flex items-center gap-3 retro-shadow">
            <div className="bg-yellow-100 p-2 rounded-xl border-4 border-yellow-300 text-3xl">
              🎮
            </div>
            <div>
              <p className="text-[#6b529e] font-bold text-sm sm:text-base">เลือกเว็บที่ต้องการได้เลย!</p>
              <p className="text-[#8c77b8] text-xs sm:text-sm">คลิกไอคอนเพื่อเข้าเว็บไซต์ ✨</p>
            </div>
          </div>
          
          {/* Right Widget */}
          <div className="sm:w-1/3 bg-white border-4 border-[#ffccbc] rounded-2xl p-3 flex flex-col justify-center retro-shadow">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-purple-100 p-1 rounded-lg border-2 border-purple-300 text-2xl">
                🐻
              </div>
              <div>
                <p className="text-[#d81b60] font-bold text-[10px] sm:text-xs uppercase tracking-widest">WELCOME!</p>
                <p className="text-[#880e4f] font-black font-pixel text-xl leading-none">Lv. 99</p>
              </div>
            </div>
            <div className="w-full bg-[#f8bbd0] rounded-full h-4 border-2 border-[#ec407a] overflow-hidden p-0.5 mt-1">
              <div className="bg-[#ff8cbd] h-full w-4/5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main List */}
        <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 bg-[#fce4ec]">
          {webData.map((app) => (
            <div 
              key={app.id} 
              className="bg-[#fff9fc] border-[4px] border-[#f8bbd0] rounded-2xl p-2 sm:p-3 flex items-center gap-3 hover:border-[#ff9ecd] hover:bg-white transition-colors duration-200 group relative retro-shadow"
            >
              {/* Star Number Badge */}
              <div className="relative shrink-0 flex items-center justify-center w-12 h-12">
                <span className="text-5xl drop-shadow-md text-yellow-400 absolute">⭐</span>
                <span className="relative z-10 text-yellow-900 font-black font-pixel text-2xl mt-1">{app.id}</span>
              </div>

              {/* Icon Box */}
              <div className="shrink-0 bg-white w-14 h-14 rounded-xl border-4 border-[#e1bee7] flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                 {app.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="text-[#4a148c] font-bold text-sm sm:text-base truncate">{app.title}</h3>
                <p className="text-[#7b1fa2] text-[10px] sm:text-xs leading-snug line-clamp-2 mt-0.5 opacity-80">
                  {app.desc}
                </p>
              </div>

              {/* Action Button */}
              <a 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 bg-[#ff9ecd] text-white px-3 sm:px-4 py-2 rounded-xl font-black font-pixel text-xl sm:text-2xl border-4 border-white retro-button-shadow flex items-center gap-1 transition-transform"
              >
                GO! <span className="text-xs sm:text-sm">▶</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="bg-[#a18cd1] text-white p-2.5 sm:p-3 px-4 flex justify-between items-center border-t-[5px] border-[#8c77b8] font-pixel text-xl">
          <div className="flex items-center gap-2">
            <span className="font-bold text-pink-200">HP</span>
            <div className="flex gap-1 text-pink-400 drop-shadow-sm text-sm sm:text-base">
              💖 💖 💖
            </div>
            <span className="text-sm sm:text-lg">100/100</span>
          </div>
          
          <div 
            className="hidden sm:flex items-center gap-2 text-purple-100 cursor-pointer hover:text-white transition-colors select-none"
            onClick={toggleAudio}
            title="Click to play/pause background music"
          >
            <span className={`text-sm ${isPlaying ? 'animate-bounce' : ''}`}>
              {isPlaying ? '🎵' : '🔇'}
            </span>
            <span className="tracking-widest text-sm sm:text-base">
              {isPlaying ? 'BGM: LOFI PIXEL (ON)' : 'BGM: CLICK TO PLAY'}
            </span>
            <audio 
              ref={audioRef} 
              src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" 
              loop 
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm sm:text-base">🪙</span>
            <span className="text-yellow-300 font-bold tracking-widest">9999</span>
          </div>
        </div>

      </div>
    </div>
  );
}