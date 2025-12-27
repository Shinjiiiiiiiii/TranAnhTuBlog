import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-gray-100 dark:border-gray-800/50 bg-white/50 dark:bg-dark-bg/50 backdrop-blur-md py-12">
      {/* Hiệu ứng tia sáng mờ ở nền (Optional) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Cột trái: Thương hiệu & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">
                Anh Tu <span className="text-primary-600">.</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              © {currentYear} — Designed & Built with ❤️
            </p>
          </div>

          {/* Cột giữa: Trạng thái hệ thống (Làm màu một chút cho "pro") */}
          <div className="hidden lg:flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/40 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Available for new projects
            </span>
          </div>

          {/* Cột phải: Social Icons với hiệu ứng Tooltip/Hover */}
          <div className="flex items-center space-x-5">
            {[
              { 
                name: 'GitHub', 
                url: 'https://github.com/Shinjiiiiiiiii', 
                icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' 
              },
              { 
                name: 'Facebook', 
                url: 'https://www.facebook.com/tran.tu.558725/', 
                icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' 
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-500 transition-all duration-300"
              >
                <span className="sr-only">{social.name}</span>
                <svg className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
                {/* Tooltip nhỏ khi hover */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {social.name}
                </span>
              </a>
            ))}

            {/* Riêng Email icon cần cấu trúc path khác */}
            <a
              href="mailto:mkania369@gmail.com"
              className="group relative p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-500 transition-all duration-300"
            >
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Chốt hạ bằng một dòng text nhỏ mờ phía dưới cùng */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800/50 text-center">
          <p className="text-[10px] text-gray-400 dark:text-gray-600 font-bold uppercase tracking-[0.2em]">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
