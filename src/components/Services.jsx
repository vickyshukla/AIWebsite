import { service1, service2, service3 } from "../assets";
import { services } from "../constants";

const serviceImages = [service1, service2, service3];

const Services = () => {
  return (
    <section id="services" className="bg-n-7/50 py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="tagline text-n-3">Services</p>
            <h2 className="h2 mt-4">AI capabilities tuned for modern teams</h2>
          </div>
          <p className="body-2 max-w-xl text-n-3">
            Deploy tailored experiences across sales, product, support, and
            marketing with configurable automation blocks.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl border border-n-6 bg-n-8/70 p-6"
            >
              <img
                src={serviceImages[index]}
                alt=""
                className="h-40 w-full rounded-2xl object-cover"
              />
              <h3 className="h6 mt-6">{service.title}</h3>
              <p className="body-2 mt-3 text-n-3">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
