import Image from "next/image";
import BannerImage from "@/assets/banner.png";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto  py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl border border-border bg-surface px-10 py-14">
                <div className="flex flex-col gap-4 max-w-xl">
                    <h5 className="font-oswald font-semibold text-sm tracking-wide uppercase text-accent">
                        Workout Library
                    </h5>

                    <h1 className="font-oswald font-bold text-5xl uppercase leading-tight text-foreground">
                        Train with intent. Log every set.
                    </h1>

                    <p className="text-base leading-relaxed font-light">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="font-semibold text-sm uppercase bg-accent text-on-accent px-6 py-3 rounded-md w-fit mt-2">
                        Browse Workouts
                    </button>
                </div>

            
                <div className="shrink-0">
                    <Image
                        src={BannerImage}
                        alt="Hero Image"
                        width={350}
                        height={350}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;