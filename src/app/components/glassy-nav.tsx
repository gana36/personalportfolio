import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function GlassyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to backdrop blur and background opacity
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
      style={{
        backdropFilter: useTransform(backdropBlur, (value) => `blur(${value}px)`),
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto rounded-2xl border border-white/10 px-6 py-3 relative overflow-hidden"
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (value) => `rgba(30, 30, 30, ${value})`
          ),
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E5BFF]/5 to-[#A8E6CF]/5 opacity-50"></div>

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="text-[#2E5BFF]">{'<'}</span>
            AC
            <span className="text-[#A8E6CF]">{'/>'}</span>
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ scale: 1.1, color: '#2E5BFF' }}
                className="text-sm text-foreground/80 hover:text-[#2E5BFF] transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="/your_resume.docx"
              download
              className="px-4 py-2 bg-[#2E5BFF] text-white rounded-lg text-sm transition-transform hover:scale-105 active:scale-95 inline-block"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Download CV
            </a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  whileHover={{ x: 5, color: '#2E5BFF' }}
                  className="text-sm text-foreground/80 hover:text-[#2E5BFF] transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="/your_resume.docx"
                download
                className="px-4 py-2 bg-[#2E5BFF] text-white rounded-lg text-sm w-full text-center transition-transform active:scale-95 inline-block"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
