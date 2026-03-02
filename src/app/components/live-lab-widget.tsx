import { motion } from 'motion/react';
import { Activity, Cpu, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

export function LiveLabWidget() {
  const [status, setStatus] = useState<'learning' | 'training' | 'idle'>('learning');
  const [uptime, setUptime] = useState('24h 31m');

  useEffect(() => {
    const statuses: Array<'learning' | 'training' | 'idle'> = ['learning', 'training', 'idle'];
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    learning: {
      color: '#A8E6CF',
      label: 'Currently Learning: Hybrid Polystore/LLM',
      icon: Activity,
    },
    training: {
      color: '#2E5BFF',
      label: 'Training: Llama 2 (7B) on EC2',
      icon: Cpu,
    },
    idle: {
      color: '#a0a0a0',
      label: 'System Idle',
      icon: Database,
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-8 left-8 z-50 hidden md:block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-2xl p-4 w-72"
        style={{
          background: 'rgba(30, 30, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Animated background gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${config.color}, transparent)`,
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: config.color }}
              />
              <span
                className="text-xs font-bold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                LIVE LAB
              </span>
            </div>
            <Icon className="w-4 h-4" style={{ color: config.color }} />
          </div>

          {/* Status */}
          <p
            className="text-sm mb-3"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {config.label}
          </p>

          {/* Metrics */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground/60">Server Uptime</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: config.color }}>
                {uptime}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground/60">GPU Usage</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: config.color }}>
                {Math.floor(Math.random() * 30 + 60)}%
              </span>
            </div>
            <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: config.color }}
                initial={{ width: '0%' }}
                animate={{ width: '87%' }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
