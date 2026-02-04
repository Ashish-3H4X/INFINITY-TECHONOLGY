import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
/* Reusable NavLink wrapper */
function NavLink({ to, children, className, onClick }) {
  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-shadow  text-[black] ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl  flex items-center justify-center text-black font-bold">
            <img src="src\images\itlogo2.png" alt="" srcset="" />
          </div>
          <Link to={"/"}>
            <h1 className="text-lg font-semibold text-black">Infinity</h1>
            <p className="text-xs text-black/80">Technolgies</p>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={`relative transition text-black hover:text-blue-500
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:bg-blue-500 after:transition-all after:duration-300
                    ${active ? " bg-white/20 backdrop-blur-md border border-blue-400/30 shadow-lg py-2 px-3 rounded-full" : "after:w-0 hover:after:w-full"}`}
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden md:block rounded-full bg-blue-300
            px-6 py-2 text-sm font-semibold text-black backdrop-blur
            hover:bg-white/20    transition shadow"
          >
            Get Started
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-black"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/10 backdrop-blur-md px-6"
          >
            <ul className="py-4 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`block ${pathname === link.href ? "text-purple-600 font-semibold" : "text-gray-800"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full px-6 py-2 font-semibold text-black bg-blue-300/5 shadow"
              >
                Get Started
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
