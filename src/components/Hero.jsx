import { heroBackground, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center gap-12 py-16 lg:flex-row lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <p className="tagline text-n-3">Brainwave AI</p>
          <h1 className="h1 mt-4">
            Build, automate, and scale with your AI operations hub.
          </h1>
          <p className="body-1 mt-6 text-n-3">
            Centralize your workflows, generate insights instantly, and deploy
            smarter experiences across every channel.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#pricing">Start for free</Button>
            <Button href="#services" white>
              See capabilities
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-color-1/30 via-color-3/30 to-color-6/30 blur-2xl" />
          <img
            src={robot}
            alt="AI assistant"
            className="relative w-[20rem] rounded-3xl border border-n-6 object-cover shadow-2xl lg:w-[24rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
