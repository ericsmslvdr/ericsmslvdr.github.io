import type { PropsWithChildren } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { MenuContextProvider } from "@/contexts/MenuContextProvider";

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function AppProvider({ children }: PropsWithChildren) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
            <MenuContextProvider>
                {children}
            </MenuContextProvider>
        </GoogleReCaptchaProvider>
    );
}

export default AppProvider;