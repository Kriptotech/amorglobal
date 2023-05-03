import { Header } from "../components/header/Index";
import { WhatsAppLogo } from "../components/whatsapp_logo/Index";
import { Footer } from "../components/footer/Index";
import { About } from "../features/aboutpage/components/about/Index";
import { Hero } from "../features/aboutpage/components/hero/Index";

export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
            <WhatsAppLogo />
        </div>
    );
}
