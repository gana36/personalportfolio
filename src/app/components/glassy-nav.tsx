import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function GlassyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [cvToast, setCvToast] = useState(false);

  const handleCvClick = () => {
    setCvToast(true);
    setTimeout(() => setCvToast(false), 3500);
  };
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
        {/* Force solid background when mobile menu is open */}
        {isOpen && (
          <div className="absolute inset-0 bg-[#121212]/97 rounded-2xl md:hidden" />
        )}
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
            ASG
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
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCvClick}
                className="px-4 py-2 bg-[#2E5BFF] text-white rounded-lg text-sm"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Download CV
              </motion.button>
              <AnimatePresence>
                {cvToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-60 p-3 rounded-xl z-[60] text-left"
                    style={{
                      background: 'rgba(18,18,18,0.97)',
                      border: '1px solid rgba(168,230,207,0.35)',
                      backdropFilter: 'blur(16px)',
                    }}
                  >
                    <p className="text-[#A8E6CF] text-xs font-mono font-bold mb-1">
                      Resume in progress ✦
                    </p>
                    <p className="text-foreground/60 text-xs font-mono leading-relaxed">
                      Connect on{' '}
                      <a href="https://linkedin.com/in/saiganeshakula/" target="_blank" rel="noopener noreferrer"
                        className="text-[#2E5BFF] underline">LinkedIn</a>
                      {' '}or use the{' '}
                      <button onClick={() => { scrollToSection('#contact'); setCvToast(false); }}
                        className="text-[#2E5BFF] underline cursor-pointer">
                        contact form
                      </button>
                      {' '}in the meantime.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
              <div>
                <button
                  onClick={handleCvClick}
                  className="px-4 py-2 bg-[#2E5BFF] text-white rounded-lg text-sm w-full text-center active:scale-95 transition-transform"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Download CV
                </button>
                <AnimatePresence>
                  {cvToast && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 p-3 rounded-xl overflow-hidden"
                      style={{
                        background: 'rgba(168,230,207,0.06)',
                        border: '1px solid rgba(168,230,207,0.25)',
                      }}
                    >
                      <p className="text-[#A8E6CF] text-xs font-mono font-bold mb-1">
                        Resume in progress ✦
                      </p>
                      <p className="text-foreground/60 text-xs font-mono leading-relaxed">
                        Connect on{' '}
                        <a href="https://linkedin.com/in/saiganeshakula/" target="_blank" rel="noopener noreferrer"
                          className="text-[#2E5BFF] underline">LinkedIn</a>
                        {' '}or use the contact form below.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
