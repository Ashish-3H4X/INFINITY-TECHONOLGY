import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const iconClass =
    "transition-all duration-200 hover:text-black hover:scale-110 hover:opacity-80";

  return (
    <motion.footer
      className="w-full bg-gradient-to-b from-[#f3e9f5] to-[#f9d7e4]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-black/30 to-transparent bg-[length:200%_200%]" />
      <div className="max-w-7xl mx-auto px-6 py-12 backdrop-blur-sm">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-md" />
              <span className="text-lg font-semibold text-gray-900">
                Infinity Technologies Pvt.Ltd.
              </span>
            </div>

            <p className="text-sm text-black-700 max-w-xs">
              Infinity Technologies provide web-based services and software
              solutions using PHP, Laravel, and modern full-stack technologies
              to ensure speed, scalability, and reliability. We build
              responsive, data-driven applications that help businesses make
              confident decisions.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6 text-black-700">
              <NavLink href="#" className={iconClass} aria-label="X">
                <X size={18} strokeWidth={1.75} />
              </NavLink>
              <NavLink href="#" className={iconClass} aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.75} />
              </NavLink>
              <NavLink href="#" className={iconClass} aria-label="LinkedIn">
                <Linkedin size={18} strokeWidth={1.75} />
              </NavLink>
              <NavLink href="#" className={iconClass} aria-label="GitHub">
                <Github size={18} strokeWidth={1.75} />
              </NavLink>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-black-900">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-black-700">
              <li>
                <NavLink href="/" className="hover:text-blue">
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink href="/pricing" className="hover:text-blue">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink href="/services" className="hover:text-blue">
                  Integrations
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog" className="hover:text-blue">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-black-900">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-black-700">
              <li>
                <NavLink href="#" className="hover:text-blue">
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-blue">
                  Tutorials
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog" className="hover:text-blue">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="hover:text-blue">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-black-900">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-black-700">
              <li>
                <NavLink href="/about" className="hover:text-blue">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink href="/blog" className="hover:text-blue">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink href="/contact" className="hover:text-blue">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink href="/about" className="hover:text-blue">
                  Partners
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-5">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent bg-[length:200%_200%]" />
        </div>
        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span className="text-center sm:text-left">
            © 2027{" "}
            <span className="text-indigo-400">Infinity Technologies</span> All
            rights reserved.
          </span>
          <div className="flex gap-6">
            <NavLink href="/privacypolicy" className="hover:text-blue">
              Privacy Policy
            </NavLink>
            <NavLink href="/termsofservices" className="hover:text-blue">
              Terms of Service
            </NavLink>
            <NavLink href="/cookies" className="hover:text-blue">
              Cookies Settings
            </NavLink>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
