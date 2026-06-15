import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Journey from "./components/Journey";
import CoachingTeam from "./components/CoachingTeam";
import TestimonialsImpact from "./components/TestimonialsImpact";
import Programs from "./components/Programs";
import Businesses from "./components/Businesses";
import FreeGuide from "./components/FreeGuide";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import Resources from "./components/Resources";

export default function App() {
const whatsappUrl =
"https://wa.me/27717926486?text=Hi%20TJ%2C%20I%20want%20to%20book%20a%20private%20English%20consultation.";

const pdfUrl =
"https://fluentenglishhub.com/documents/FEH-English-Placement-Test.pdf";
const formAction = "https://formsubmit.co/tjvanvuuren4@gmail.com";
const benefits = [
"✓ TEFL Certified",
"✓ Business English",
"✓ Interview Preparation",
"✓ Flexible Online Lessons",
];

return (
  <>
    <Navbar whatsappUrl={whatsappUrl} />
    <Hero whatsappUrl={whatsappUrl} />
    <Stats />
    <Journey />
    <CoachingTeam />
    <TestimonialsImpact />
    <Businesses whatsappUrl={whatsappUrl} />
    <Programs whatsappUrl={whatsappUrl} />
    <Resources />
    <FreeGuide formAction={formAction} pdfUrl={pdfUrl} />
    <ContactCTA whatsappUrl={whatsappUrl} />
    <Footer />
  </>
);
}