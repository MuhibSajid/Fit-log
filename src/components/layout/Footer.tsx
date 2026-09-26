import Image from "next/image";
import FooterLogo from "../../assets/footer-logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-border">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                    <Image
                        src={FooterLogo}
                        alt="FitLog footer logo"
                        width={22}
                        height={22}
                    />
                    <span className="font-oswald font-bold text-lg uppercase text-foreground">
                        FitLog
                    </span>
                </div>

                <p className="text-muted text-sm">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;