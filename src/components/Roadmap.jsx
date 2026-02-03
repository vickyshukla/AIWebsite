import { roadmapItems } from "../constants";
import { hero } from "../assets";

const Roadmap = () => {
  return (
    <section id="roadmap" className="bg-n-7/50 py-20">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="tagline text-n-3">Roadmap</p>
          <h2 className="h2 mt-4">What we are building next</h2>
          <p className="body-2 mt-4 text-n-3">
            The Brainwave team ships new capabilities every week. Here is a look
            at what is coming in the next two quarters.
          </p>
          <div className="mt-8 space-y-6">
            {roadmapItems.map((item) => (
              <div key={item.id} className="rounded-2xl border border-n-6 p-5">
                <h3 className="h6">{item.title}</h3>
                <p className="body-2 mt-2 text-n-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-color-5/30 via-color-1/20 to-color-6/30 blur-2xl" />
          <img
            src={hero}
            alt="Product roadmap"
            className="relative rounded-3xl border border-n-6 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
