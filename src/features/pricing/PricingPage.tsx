import Heading from "@/ui/Heading";
import PagePricingPlan from "./ui/PagePricingPlan";
import "./PricingPage.scss";

const PricingPage = () => {
  return (
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
  );
};

export default PricingPage;
