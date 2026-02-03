import { brainwaveSymbol } from "../assets";
import Button from "./Button";

const Footer = () => {
  return (
    <footer id="footer" className="container py-16">
      <div className="rounded-3xl border border-n-6 bg-n-8/80 p-8 text-center lg:p-12">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-n-7">
          <img src={brainwaveSymbol} alt="Brainwave logo" />
        </div>
        <h2 className="h2 mt-6">Ready to activate Brainwave?</h2>
        <p className="body-2 mt-4 text-n-3">
          Schedule a personalized demo and discover how fast your team can move
          with AI automation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="mailto:hello@brainwave.ai">Book a demo</Button>
          <Button href="#hero" white>
            Back to top
          </Button>
        </div>
        <p className="caption mt-10 text-n-4">
          © 2024 Brainwave AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
