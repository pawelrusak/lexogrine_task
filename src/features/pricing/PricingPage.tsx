import Heading from "@/ui/Heading";
import "./PricingPage.scss";
import PriceCard from "@/features/pricing/ui/PriceCard";
import FeaturesList from "@/features/pricing/ui/FeaturesList";
import Button from "@/ui/Button";

type PricingPlan = {
  pricingCard: {
    variant: "primary" | "secondary";
    label: string;
    costAmount: string;
    description: string | React.ReactNode;
  };
  buttonCTA: {
    variant: "outline" | undefined;
  };
  features: {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
  };
};

const pricingPlans: PricingPlan[] = [
  {
    pricingCard: {
      variant: "secondary",
      label: "Start",
      costAmount: "19",
      description: (
        <>
          All the features you need to keep <br />
          your personal files safe, <br />
          accessible, and easy to share.
        </>
      ),
    },
    features: {
      1: true,
      2: true,
      3: false,
      4: false,
    },
    buttonCTA: {
      variant: "outline",
    },
  },
  {
    pricingCard: {
      variant: "primary",
      label: "Enterprise",
      costAmount: "49",
      description: (
        <>
          All the features you need to <br />
          keep your personal files safe, <br />
          accessible, and easy to share.
        </>
      ),
    },
    features: {
      1: true,
      2: true,
      3: true,
      4: false,
    },
    buttonCTA: {
      variant: undefined,
    },
  },
  {
    pricingCard: {
      variant: "secondary",
      label: "Enterprise",
      costAmount: "99",
      description: (
        <>
          All the features you need to keep <br />
          your personal files safe, <br />
          accessible, and easy to share.
        </>
      ),
    },
    features: {
      1: true,
      2: true,
      3: true,
      4: true,
    },
    buttonCTA: {
      variant: "outline",
    },
  },
];

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

        <section className="pricing-page__table">
          {pricingPlans.map((pricingPlan, index) => (
            <section className="pricing-page__table-item" key={index}>
              <PriceCard variant={pricingPlan.pricingCard.variant}>
                <PriceCard.Label>
                  {pricingPlan.pricingCard.label}
                </PriceCard.Label>
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
              <div className="pricing-page__table-cta-wrapper">
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
              <div className="pricing-page__table-cta-wrapper">
                <Button variant={pricingPlan.buttonCTA.variant}>
                  Start Free Trial
                </Button>
              </div>
            </section>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
