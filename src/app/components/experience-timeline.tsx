import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'award' | 'founder';
}

const milestones: Milestone[] = [
  {
    year: 'Dec 2025 - Present',
    title: 'Co-Founder',
    organization: 'BillBeam',
    description: 'Co-founding BillBeam — a smart bill-splitting app that simplifies shared expenses between friends and groups with an intuitive, hassle-free experience.',
    type: 'founder',
  },
  {
    year: 'Jun 2025 - Present',
    title: 'AI Engineer (Lab Assistant)',
    organization: 'BigLab',
    description: 'Engineering AI systems and pipelines at BigLab. Leading applied research on LLM-based architectures and production ML deployments.',
    type: 'work',
  },
  {
    year: 'Aug 2024 - May 2025',
    title: 'Research Assistant',
    organization: 'BigLab — Florida State University',
    description: 'Architecting a hybrid Polystore/LLM system for the Florida Cancer Innovation Fund ($1.2M grant). Fine-tuned Llama 2 (7B) via QLoRA achieving BERTScore 0.89. Co-authored EDBT 2025 paper.',
    type: 'work',
  },
  {
    year: '2023 - 2025',
    title: 'M.S. Data Science',
    organization: 'Florida State University',
    description: 'Specialization in Machine Learning and Data Science. GPA research focus on tabular embeddings, LLM pipelines, and structured data extraction.',
    type: 'education',
  },
  // {
  //   year: 'Sep – Oct 2025',
  //   title: '2nd Place — AI Accelerate Hackathon',
  //   organization: 'Google Cloud × Elastic × Fivetran',
  //   description: 'Elastic Challenge Winner at AI Accelerate: Unlocking New Frontiers — a Multi-Partner Google Cloud Hackathon. $50,000 prize pool, 2,735 participants.',
  //   type: 'award',
  // },
  {
    year: 'Sep 2023 - Aug 2024',
    title: 'Volunteer Researcher',
    organization: 'BigLab — Florida State University',
    description: 'Contributed to early-stage cancer data research, building ML pipelines and data validation tooling while completing graduate coursework.',
    type: 'work',
  },
  {
    year: 'Aug 2022 - May 2023',
    title: 'Research Assistant',
    organization: 'SRIHER',
    description: 'Implemented YOLOv4 + DeepSORT vehicle detection and tracking system with 84% accuracy. Containerized with Docker and optimised inference via ONNX Runtime — 40% latency reduction.',
    type: 'work',
  },
];

export function ExperienceTimeline() {
  const getIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'award':
        return Award;
      case 'founder':
        return Rocket;
      default:
        return Briefcase;
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Experience
        </h2>
        <p className="text-foreground/70" style={{ fontFamily: 'var(--font-sans)' }}>
          Career milestones, research, and education
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2E5BFF] via-[#A8E6CF] to-[#2E5BFF]"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const Icon = getIcon(milestone.type);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="rounded-xl p-6 group cursor-pointer"
                    style={{
                      background: 'rgba(30, 30, 30, 0.6)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Year badge */}
                    <div className="inline-block px-3 py-1 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 rounded-lg mb-3">
                      <span
                        className="text-sm text-[#2E5BFF]"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {milestone.year}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold mb-1 group-hover:text-[#2E5BFF] transition-colors"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-[#A8E6CF] mb-2"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {milestone.organization}
                    </p>
                    <p
                      className="text-sm text-foreground/70"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Central node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center relative"
                    style={{
                      background: 'rgba(30, 30, 30, 0.9)',
                      border: '2px solid',
                      borderColor: milestone.type === 'award' ? '#A8E6CF' : '#2E5BFF',
                    }}
                  >
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full opacity-50 blur-md"
                      style={{
                        backgroundColor: milestone.type === 'award' ? '#A8E6CF' : '#2E5BFF',
                      }}
                    />
                    <Icon
                      className="w-5 h-5 relative z-10"
                      style={{
                        color: milestone.type === 'award' ? '#A8E6CF' : '#2E5BFF'
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
