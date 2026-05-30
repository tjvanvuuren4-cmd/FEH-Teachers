import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Journey from "./components/Journey";
import CoachingTeam from "./components/CoachingTeam";
import Programs from "./components/Programs";
import FreeGuide from "./components/FreeGuide";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
const whatsappUrl =
"https://wa.me/27717926486?text=Hi%20TJ%2C%20I%20want%20to%20book%20a%20private%20English%20consultation.";

const pdfUrl = "/TJ_English_Confidence_Guide.pdf";
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
    <Programs whatsappUrl={whatsappUrl} />
    <FreeGuide formAction={formAction} pdfUrl={pdfUrl} />
    <Testimonials />
    <ContactCTA whatsappUrl={whatsappUrl} />
    <Footer />
  </>
);
}