import React from "react";
import usePageTitle from "../hooks/usePageTitle";

const AboutPage: React.FC = () => {
  usePageTitle("Về mình | Trần Anh Tú");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in space-y-24">
      {/* Intro Section - Nâng cấp hình ảnh và layout */}
      <section className="relative text-center space-y-8" data-aos="fade-up">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-600 rounded-[3rem] blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
          <img
            src="/avatar.png"
            alt="Trần Anh Tú"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] mx-auto shadow-2xl border-8 border-white dark:border-gray-800 object-cover transform hover:rotate-2 transition-transform duration-500"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Trần Anh Tú
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-bold border border-primary-100 dark:border-primary-800">
              Frontend Developer
            </span>
            <span className="flex items-center px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              📍 Nha Trang, VN
            </span>
          </div>
        </div>

        <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-medium">
          "Chào mừng bạn đến với không gian nhỏ của mình! Mình là một lập trình viên Gen Z 
          đầy nhiệt huyết. Với mình, code không chỉ là những dòng lệnh khô khan, mà là cách 
          mình hiện thực hóa những ý tưởng và giải quyết các vấn đề trong cuộc sống."
        </p>
      </section>

      {/* Skills Section - Hiển thị dạng thẻ hiện đại */}
      <section data-aos="fade-up" className="space-y-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Nội công
          </h2>
          <div className="h-px flex-grow bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "JavaScript", color: "from-yellow-400/20 to-yellow-500/20", text: "text-yellow-700 dark:text-yellow-400", border: "border-yellow-200/50" },
            { name: "React", color: "from-blue-400/20 to-blue-500/20", text: "text-blue-700 dark:text-blue-400", border: "border-blue-200/50" },
            { name: "Node.js", color: "from-green-400/20 to-green-500/20", text: "text-green-700 dark:text-green-400", border: "border-green-200/50" },
            { name: "Python", color: "from-sky-400/20 to-sky-500/20", text: "text-sky-700 dark:text-sky-400", border: "border-sky-200/50" },
            { name: "MongoDB", color: "from-emerald-400/20 to-emerald-500/20", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-200/50" },
            { name: "C / C++", color: "from-indigo-400/20 to-indigo-500/20", text: "text-indigo-700 dark:text-indigo-400", border: "border-indigo-200/50" },
            { name: "UE 5", color: "from-gray-400/20 to-gray-500/20", text: "text-gray-700 dark:text-gray-400", border: "border-gray-200/50" },
            { name: "Java", color: "from-red-400/20 to-red-500/20", text: "text-red-700 dark:text-red-400", border: "border-red-200/50" },
          ].map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden p-4 rounded-2xl border ${skill.border} bg-gradient-to-br ${skill.color} text-center transition-all hover:-translate-y-1 hover:shadow-xl`}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <span className={`font-bold ${skill.text}`}>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies - Cải thiện UI List */}
      <section data-aos="fade-up" className="space-y-8">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Ngoài giờ Code</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { emoji: "🎮", title: "Gaming", desc: "Hardcore gamer, nơi mình rèn luyện tư duy chiến thuật.", color: "bg-purple-500" },
            { emoji: "📚", title: "Manga", desc: "Tìm kiếm cảm hứng sáng tạo qua từng khung hình.", color: "bg-orange-500" },
            { emoji: "🎬", title: "Movies", desc: "Học ngoại ngữ và khám phá văn hóa thế giới.", color: "bg-red-500" },
            { emoji: "🛌", title: "Recharge", desc: "Ngủ đủ giấc để có những ý tưởng triệu đô.", color: "bg-blue-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 p-6 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-xl group">
              <span className="text-4xl group-hover:scale-125 transition-transform">{item.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Đưa về dạng Card tối giản hiện đại */}
      <section id="contact" className="scroll-mt-24" data-aos="fade-up">
        <div className="p-8 md:p-12 rounded-[3rem] bg-gray-900 dark:bg-primary-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-4">Kết nối với mình</h2>
              <p className="text-gray-300 dark:text-primary-100 text-lg">
                Bạn có dự án thú vị hay chỉ muốn tán gẫu về JavaScript? Đừng ngần ngại nhé!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:mkania369@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-md">
                <span className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full text-xl">📧</span>
                <span className="font-bold truncate">mkania369@gmail.com</span>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/Shinjiiiiiiiii/" target="_blank" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all">
                  <span className="font-bold">GitHub</span>
                </a>
                <a href="https://www.facebook.com/tran.tu.558725" target="_blank" className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all">
                  <span className="font-bold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
