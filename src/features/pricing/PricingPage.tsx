import Heading from "@/ui/Heading";
import PagePricingPlan from "./ui/PagePricingPlan";
import RevealAnimation from "@/utils/RevealAnimation";

import "./PricingPage.scss";

const PricingPage = () => {
  return (
    <RevealAnimation>
      <div className="pricing-page">
        <main className="pricing-page__container">
          <header className="pricing-page__header">
            <div className="pricing-page__header-inner">
              <Heading level={3} as="h1" className="pricing-page__header-title">
                Simple & flexible pricing built for everyone
              </Heading>
              <p className="pricing-page__header-subtitle">
                Start with 14-day free trial. No credit card needed. Cancel at
                anytime.
              </p>
            </div>
          </header>

          <PagePricingPlan />
        </main>
      </div>
    </RevealAnimation>
  );
};

export default PricingPage;
