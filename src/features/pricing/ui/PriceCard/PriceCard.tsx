import { cva } from "class-variance-authority";
import "./PriceCard.scss";

import { VariantProps } from "class-variance-authority";

const priceCard = cva("price-card", {
  variants: {
    variant: {
      primary: "price-card--primary",
      secondary: "price-card--secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type PriceCardVariants = VariantProps<typeof priceCard>;

type PriceCardProps = React.ComponentPropsWithoutRef<"section"> &
  PriceCardVariants;

const PriceCard = ({
  className,
  variant,
  children,
  ...props
}: PriceCardProps) => {
  return (
    <section className={priceCard({ variant, className })} {...props}>
      {children}
    </section>
  );
};

type PriceCardLabelProps = React.ComponentPropsWithoutRef<"p">;

const PriceCardLabel = (props: PriceCardLabelProps) => {
  return <p className="price-card__label" {...props} />;
};

type PriceCardCostBoxProps = React.ComponentPropsWithoutRef<"div">;

const PriceCardCostBox = (props: PriceCardCostBoxProps) => {
  return <div className="price-card__cost-box" {...props} />;
};

type PriceCardCostProps = React.ComponentPropsWithoutRef<"span">;

const PriceCardCostBoxAmount = (props: PriceCardCostProps) => {
  return <span className="price-card__cost-box-amount" {...props} />;
};

type PriceCardCostNoteProps = React.ComponentPropsWithoutRef<"p">;

const PriceCardCostNote = (props: PriceCardCostNoteProps) => {
  return <span className="price-card__cost-note" {...props} />;
};

type PriceCardDescriptionProps = React.ComponentPropsWithoutRef<"p">;

const PriceCardDescription = (props: PriceCardDescriptionProps) => {
  return <p className="price-card__description" {...props} />;
};

PriceCard.Label = PriceCardLabel;
PriceCard.CostBoxAmount = PriceCardCostBoxAmount;
PriceCard.CostBox = PriceCardCostBox;
PriceCard.CostNote = PriceCardCostNote;
PriceCard.Description = PriceCardDescription;

export default PriceCard;
