import { cva } from "class-variance-authority";
import "./FeaturesList.scss";

import type { VariantProps } from "class-variance-authority";

type FeaturesListProps = React.ComponentPropsWithoutRef<"ul">;

const FeaturesList = (props: FeaturesListProps) => {
  return <ul {...props} className="features-list" />;
};

const featuresListItem = cva("features-list__item", {
  variants: {
    checked: {
      true: "features-list__item--checked",
      false: null,
    },
  },
  defaultVariants: {
    checked: false,
  },
});

type FeaturesListItemVariants = VariantProps<typeof featuresListItem>;
type FeatureListItemProps = React.ComponentPropsWithoutRef<"li"> &
  FeaturesListItemVariants;

const FeatureListItem = ({
  className,
  checked,
  ...props
}: FeatureListItemProps) => {
  return <li className={featuresListItem({ className, checked })} {...props} />;
};

FeaturesList.Item = FeatureListItem;

export default FeaturesList;
