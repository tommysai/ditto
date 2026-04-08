/**
 * Navbar - 数字职工导航栏
 * Design: 赛博朋克企业感 - 深色毛玻璃背景 + 霓虹蓝边框
 */
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "产品定位", href: "#positioning" },
  { label: "核心架构", href: "#architecture" },
  { label: "功能模块", href: "#features" },
  { label: "竞品分析", href: "#comparison" },
  { label: "差异化策略", href: "#differentiation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#080C14]/90 border-b border-[#0EA5E9]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0EA5E9]/20 clip-card-sm" />
            <Zap className="w-4 h-4 text-[#0EA5E9] relative z-10" />
          </div>
          <span className="font-['Sora'] font-bold text-lg text-white">
            数字<span className="text-[#0EA5E9]">职工</span>
          </span>
          <span className="hidden sm:block text-xs font-mono text-[#0EA5E9]/50 border border-[#0EA5E9]/30 px-1.5 py-0.5 rounded">
            ENTERPRISE AI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-white/60 hover:text-[#0EA5E9] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#0EA5E9] group-hover:w-4/5 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-mono">
            <span className="status-dot" />
            系统在线
          </div>
          <a
            href="#contact"
            className="relative px-5 py-2 text-sm font-semibold text-[#080C14] bg-[#0EA5E9] clip-card-sm hover:bg-[#38bdf8] transition-colors duration-200"
          >
            申请演示
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/70 hover:text-[#0EA5E9] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080C14]/95 backdrop-blur-xl border-t border-[#0EA5E9]/20 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-white/70 hover:text-[#0EA5E9] transition-colors border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 text-center py-2.5 text-sm font-semibold text-[#080C14] bg-[#0EA5E9]"
            onClick={() => setMenuOpen(false)}
          >
            申请演示
          </a>
        </div>
      )}
    </nav>
  );
}
