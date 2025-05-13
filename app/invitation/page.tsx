import Countdown from '../components/Countdown';
import RSVPForm from '../components/RSVPForm';
import WeddingLocation from '../components/WeddingLocation';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedTitle from '../components/AnimatedTitle';


export default function InvitationPage() {
  return (
  <main className="min-h-screen text-[var(--foreground)] py-12 px-4 md:px-10 space-y-20 bg-sides">
      <section className="text-center max-w-3xl mx-auto space-y-6">
          <AnimatedTitle text="Jeudi 4 septembre 2025" />
        <p className="text-lg italic">Paris, France</p>
        <div className="mt-2 w-16 h-[3px] mx-auto bg-[var(--secondary)] rounded-full"></div>
      </section>
<div className="h-[1px] bg-[var(--accent)] opacity-20 mx-auto w-[80%] my-16" />

      <AnimatedSection><Countdown /></AnimatedSection>
      <div className="h-[1px] bg-[var(--accent)] opacity-20 mx-auto w-[80%] my-16" />

      <AnimatedSection><RSVPForm /></AnimatedSection>
      <div className="h-[1px] bg-[var(--accent)] opacity-20 mx-auto w-[80%] my-16" />

      <AnimatedSection><WeddingLocation /></AnimatedSection>

      <footer className="text-center text-sm opacity-60 py-8">
        © Lena & Leroy – 2025 • Merci de célébrer avec nous 💕
      </footer>
    </main>
  );
}