import style from "./styles.module.css";
import { WhatsappLogo } from "phosphor-react";

export function WhatsAppLogo() {
    return (
        <a href="#" className={style.WhatsappLogo_container}>
            <WhatsappLogo size={40} weight="fill" color="white" />
        </a>
    );
}
