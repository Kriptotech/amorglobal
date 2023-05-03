import { Header } from "../components/header/Index";
import { WhatsAppLogo } from "../components/whatsapp_logo/Index";
import { Footer } from "../components/footer/Index";
import { Hero } from "../features/projetcspage/components/hero/Index";
import { Projects } from "../features/projetcspage/components/projects/Index";

export function Projectspage() {
    return (
        <div>
            <Header />
            <Hero />
            <Projects />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
