import PriceCard from "@/features/pricing/ui/PriceCard";
import FeaturesList from "@/features/pricing/ui/FeaturesList";
import Button from "@/ui/Button";
import { pagePricingPlansData } from "./PagePricingPlan.data";
import "./PagePricingPlan.scss";

const PagePricingPlan = () => {
  return (
    <section className="page-pricing-plan__container">
      {pagePricingPlansData.map((pricingPlan, index) => (
        <section className="page-pricing-plan__table-item" key={index}>
          <PriceCard variant={pricingPlan.pricingCard.variant}>
            <PriceCard.Label>{pricingPlan.pricingCard.label}</PriceCard.Label>
            <PriceCard.CostBox>
              <PriceCard.CostBoxAmount>
                {pricingPlan.pricingCard.costAmount}
              </PriceCard.CostBoxAmount>
              <PriceCard.CostNote>
                per user <br />
                per month
              </PriceCard.CostNote>
            </PriceCard.CostBox>
            <PriceCard.Description>
              {pricingPlan.pricingCard.description}
            </PriceCard.Description>
          </PriceCard>
          <div className="page-pricing-plan__table-cta-wrapper">
            <FeaturesList>
              <FeaturesList.Item checked={pricingPlan.features[1]}>
                2 GB of hosting space
              </FeaturesList.Item>
              <FeaturesList.Item checked={pricingPlan.features[2]}>
                14 days of free backups
              </FeaturesList.Item>
              <FeaturesList.Item checked={pricingPlan.features[3]}>
                Social integrations
              </FeaturesList.Item>
              <FeaturesList.Item checked={pricingPlan.features[4]}>
                Advanced client billing
              </FeaturesList.Item>
            </FeaturesList>
          </div>
          <div className="page-pricing-plan__table-cta-wrapper">
            <Button variant={pricingPlan.buttonCTA.variant}>
              Start Free Trial
            </Button>
          </div>
        </section>
      ))}
    </section>
  );
};

export default PagePricingPlan;
