import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { NeuralNetwork } from './neural-network';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer & Data Scientist';
  const [isTyping, setIsTyping] = useState(true);
  const [cvToast, setCvToast] = useState(false);

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden pt-20 md:pt-0">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2E5BFF] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8E6CF] rounded-full blur-[120px]"></div>
      </div>

      {/* Grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 rounded-lg"
          >
            <span className="text-[#2E5BFF] text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
              {'>'} Currently: AI Researcher @ BigLab
            </span>
          </motion.div>

          <h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Sai Ganesh Akula
          </h1>

          <div className="h-16">
            <h2
              className="text-2xl md:text-3xl text-[#A8E6CF]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg text-foreground/70 max-w-lg" style={{ fontFamily: 'var(--font-sans)' }}>
            Building intelligent systems that transform data into actionable insights.
            Specialized in LLMs, MLOps, and scalable architecture.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#2E5BFF] text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(46,91,255,0.5)] transition-shadow"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCvToast(true);
                setTimeout(() => setCvToast(false), 3500);
              }}
              className="px-6 py-3 bg-transparent border-2 border-[#2E5BFF] text-[#2E5BFF] rounded-lg hover:bg-[#2E5BFF]/10 transition-colors"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Download CV
            </motion.button>
          </div>

          {/* CV coming-soon toast */}
          <AnimatePresence>
            {cvToast && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-3 px-4 py-3 rounded-xl max-w-sm"
                style={{
                  background: 'rgba(18,18,18,0.95)',
                  border: '1px solid rgba(168,230,207,0.35)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <span className="text-[#A8E6CF] text-lg leading-none mt-0.5">✦</span>
                <div>
                  <p className="text-[#A8E6CF] text-sm font-mono font-bold mb-0.5">
                    Resume in progress
                  </p>
                  <p className="text-foreground/60 text-xs font-mono leading-relaxed">
                    Connect on{' '}
                    <a
                      href="https://linkedin.com/in/saiganeshakula/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2E5BFF] underline"
                    >
                      LinkedIn
                    </a>
                    {' '}or use the{' '}
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-[#2E5BFF] underline cursor-pointer"
                    >
                      contact form
                    </button>
                    {' '}in the meantime.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right side - Neural Network Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <NeuralNetwork />
        </motion.div>
      </div>
    </section>
  );
}