import Countdown from '../components/Countdown';
import WeddingProgram from '../components/WeddingProgram';
import RSVPForm from '../components/RSVPForm';
import WeddingLocation from '../components/WeddingLocation';
import AnimatedSection from '../components/AnimatedSection';


export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-[var(--primary)] text-[var(--foreground)] py-12 px-4 md:px-10 space-y-20">
      
      {/* Introduction */}
      <section className="text-center max-w-2xl mx-auto">
        <p className="text-sm md:text-xl font-light italic text-[var(--foreground)]">
          Jeudi 4 septembre 2025 – Paris
        </p>
        <div className="mt-4 w-24 h-1 mx-auto bg-[var(--button-bg)] rounded-full"></div>
      </section>

      {/* Sections principales */}
      <AnimatedSection><Countdown /></AnimatedSection>
      <AnimatedSection><WeddingProgram /></AnimatedSection>
      <AnimatedSection><RSVPForm /></AnimatedSection>
      <AnimatedSection><WeddingLocation /></AnimatedSection>

      {/* Footer doux */}
      <footer className="text-center text-sm text-[var(--foreground)] mt-20 opacity-60">
        © Lena & Leroy – 2025 • Merci de célébrer avec nous 💕
      </footer>
    </main>
  );
}
