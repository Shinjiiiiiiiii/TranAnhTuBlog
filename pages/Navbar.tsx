import { NavLink } from "react-router-dom";

const Navbar = () => {
  const baseLink =
    "px-4 py-2 rounded-full text-sm font-semibold transition-all";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border border-gray-200/50 dark:border-gray-800/50 px-6 py-3">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600"
          >
            TranAnhTu
          </NavLink>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-primary-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              Trang chủ
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-primary-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              class={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "bg-primary-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              Giới thiệu
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
