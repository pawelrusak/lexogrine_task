type PagePricingPlan = {
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

const pagePricingPlans: PagePricingPlan[] = [
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

export { pagePricingPlans as pagePricingPlansData };
