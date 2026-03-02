import { motion } from 'motion/react';
import { Code2, Monitor, Server, Cloud, Brain, Database, Activity } from 'lucide-react';

interface Tech {
  name: string;
  color: string;
}

interface Category {
  label: string;
  accent: string;
  Icon: React.ElementType;
  items: Tech[];
}

const categories: Category[] = [
  {
    label: 'Languages',
    accent: '#3776AB',
    Icon: Code2,
    items: [
      { name: 'Python',     color: '#3776AB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'SQL',        color: '#4479A1' },
      { name: 'Bash',       color: '#4EAA25' },
    ],
  },
  {
    label: 'Frontend',
    accent: '#61DAFB',
    Icon: Monitor,
    items: [
      { name: 'React',      color: '#61DAFB' },
      { name: 'Angular',    color: '#DD0031' },
      { name: 'Streamlit',  color: '#FF4B4B' },
      { name: 'HTML5',      color: '#E34F26' },
      { name: 'TailwindCSS',color: '#06B6D4' },
    ],
  },
  {
    label: 'Backend & APIs',
    accent: '#009688',
    Icon: Server,
    items: [
      { name: 'FastAPI',       color: '#009688' },
      { name: 'REST APIs',     color: '#6D9EEB' },
      { name: 'Microservices', color: '#7B42BC' },
      { name: 'WebSockets',    color: '#A8E6CF' },
      { name: 'Pydantic',      color: '#E92063' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    accent: '#FF9900',
    Icon: Cloud,
    items: [
      { name: 'AWS',       color: '#FF9900' },
      { name: 'Docker',    color: '#2496ED' },
      { name: 'Terraform', color: '#7B42BC' },
      { name: 'Jenkins',   color: '#D24939' },
      { name: 'GitLab CI', color: '#FC6D26' },
      { name: 'Kafka',     color: '#A8E6CF' },
    ],
  },
  {
    label: 'AI & MLOps',
    accent: '#A78BFA',
    Icon: Brain,
    items: [
      { name: 'Gemini',       color: '#4285F4' },
      { name: 'PyTorch',      color: '#EE4C2C' },
      { name: 'scikit-learn', color: '#F7931E' },
      { name: 'MLflow',       color: '#0194E2' },
      { name: 'Airflow',      color: '#017CEE' },
      { name: 'Evidently AI', color: '#ED0056' },
      { name: 'LangChain',    color: '#65A30D' },
    ],
  },
  {
    label: 'Databases',
    accent: '#4169E1',
    Icon: Database,
    items: [
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB',    color: '#47A248' },
      { name: 'Qdrant',     color: '#ED0056' },
      { name: 'InfluxDB',   color: '#22ADF6' },
      { name: 'MySQL',      color: '#4479A1' },
      { name: 'DynamoDB',   color: '#FF9900' },
    ],
  },
  {
    label: 'Observability',
    accent: '#F46800',
    Icon: Activity,
    items: [
      { name: 'Prometheus', color: '#E6522C' },
      { name: 'Grafana',    color: '#F46800' },
      { name: 'Locust',     color: '#A8E6CF' },
      { name: 'Swagger',    color: '#85EA2D' },
      { name: 'Postman',    color: '#FF6C37' },
    ],
  },
];

export function TechStackMarquee() {
  return (
    <section className="py-20 px-4 md:px-8 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
          Tech Stack
        </h2>
        <p className="text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
          Technologies and tools I work with
        </p>
      </motion.div>

      {/* Category grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: catIdx * 0.07 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl p-5 group overflow-hidden"
            style={{
              background: 'rgba(30, 30, 30, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: `2px solid ${cat.accent}`,
            }}
          >
            {/* subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at top, ${cat.accent}18 0%, transparent 70%)` }}
            />

            {/* Category header */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${cat.accent}20`, border: `1px solid ${cat.accent}40` }}
              >
                <cat.Icon className="w-3.5 h-3.5" style={{ color: cat.accent }} />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: cat.accent, fontFamily: 'var(--font-mono)' }}
              >
                {cat.label}
              </span>
              <span
                className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full font-mono"
                style={{ background: `${cat.accent}15`, color: cat.accent }}
              >
                {cat.items.length}
              </span>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {cat.items.map((tech, techIdx) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIdx * 0.07 + techIdx * 0.04 }}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs cursor-default transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: tech.color }}
                  />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
