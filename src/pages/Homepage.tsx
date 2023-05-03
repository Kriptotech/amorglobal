import { Header } from "../components/header/Index";
import { Hero } from "../features/homepage/components/hero/Index";
import { StartNow } from "../features/homepage/components/start_now/Index";
import { WhatsAppLogo } from "../components/whatsapp_logo/Index";
import { Mission } from "../features/homepage/components/mission/Index";
import { Projects } from "../features/homepage/components/projects/Index";
import { Footer } from "../components/footer/Index";

export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <StartNow />
            <Mission />
            <Projects />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
