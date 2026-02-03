import { benefits } from "../constants";

const Benefits = () => {
  return (
    <section id="benefits" className="container py-20">
      <div className="text-center">
        <p className="tagline text-n-3">Benefits</p>
        <h2 className="h2 mt-4">Everything your team needs to move faster</h2>
        <p className="body-2 mt-4 text-n-3">
          Brainwave ties your tools together, removes busywork, and delivers
          insights the moment you need them.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="rounded-2xl border border-n-6 bg-n-7/60 p-6 shadow-lg"
          >
            <h3 className="h6">{benefit.title}</h3>
            <p className="body-2 mt-3 text-n-3">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
