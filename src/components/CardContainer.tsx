import { Card } from "@shopify/polaris";
import { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: "bg-surface-caution" | "bg-surface-info";
}

const CardContainer = ({ children, background }: Props) => {
  return (
    <Card background={background}>
      <div className={`space-y-8`}>{children}</div>
    </Card>
  );
};

CardContainer.Title = function ({ children }: PropsWithChildren) {
  return <h1 className="text-base font-semibold flex">{children}</h1>;
};

CardContainer.Description = function ({ children }: PropsWithChildren) {
  return <p className="text-base">{children}</p>;
};

export default CardContainer;
