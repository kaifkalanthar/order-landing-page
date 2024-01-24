import { Button } from "@shopify/polaris";

interface Props {
  variant?: "plain" | "primary" | "secondary" | "tertiary" | "monochromePlain";
  tone?: "critical" | "success";
  children: string;
}

const CustomButton = ({ children, variant, tone }: Props) => {
  return (
    <Button variant={variant} tone={tone}>
      {children}
    </Button>
  );
};

export default CustomButton;
