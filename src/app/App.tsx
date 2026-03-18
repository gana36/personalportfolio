import { GlassyNav } from './components/glassy-nav';
import { HeroSection } from './components/hero-section';
import { ProjectsGrid } from './components/projects-grid';
import { ExperienceTimeline } from './components/experience-timeline';
import { AchievementsSection } from './components/achievements-section';
import { TechStackMarquee } from './components/tech-stack-marquee';
import { GitHubActivity } from './components/github-activity';
import { ContactTerminal } from './components/contact-terminal';
import { AIChatbot } from './components/ai-chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white relative overflow-x-hidden">
      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <GlassyNav />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsGrid />
        </div>

        {/* Experience Section */}
        <div id="experience">
          <ExperienceTimeline />
        </div>

        {/* Achievements Section */}
        <div id="achievements">
          <AchievementsSection />
        </div>

        {/* Tech Stack Section */}
        <div id="tech">
          <TechStackMarquee />
        </div>

        {/* GitHub Activity Section */}
        <div id="github">
          <GitHubActivity />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactTerminal />
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-foreground/50" style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Sai Ganesh Akula.
            <br />
            <span className="text-xs text-foreground/30">no neural networks were harmed in the making of this portfolio</span>
          </p>
        </div>
      </footer>
    </div>
  );
}