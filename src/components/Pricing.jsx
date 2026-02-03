import { pricingPlans } from "../constants";
import Button from "./Button";

const Pricing = () => {
  return (
    <section id="pricing" className="container py-20">
      <div className="text-center">
        <p className="tagline text-n-3">Pricing</p>
        <h2 className="h2 mt-4">Simple plans that grow with you</h2>
        <p className="body-2 mt-4 text-n-3">
          Choose a plan that matches your scale. Upgrade, downgrade, or cancel
          anytime.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col rounded-3xl border border-n-6 bg-n-8/80 p-6"
          >
            <div>
              <p className="h6">{plan.name}</p>
              <p className="h3 mt-4">{plan.price}</p>
              <p className="body-2 mt-2 text-n-3">{plan.description}</p>
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-n-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-color-1" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="#footer" white>
                Choose plan
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
