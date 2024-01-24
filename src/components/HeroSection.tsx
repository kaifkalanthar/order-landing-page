import { Icon } from "@shopify/polaris";
import { AlertTriangleIcon, InfoIcon } from "@shopify/polaris-icons";
import CardContainer from "./CardContainer";
import CustomButton from "./CustomButton";

const HeroSection = () => {
  return (
    <div className="pt-11 pb-16 space-y-8 px-16 ">
      <h1 className="text-2xl font-bold">Welcome, John Mathew!!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-4">
        <CardContainer>
          <div className="space-y-2">
            <CardContainer.Title>Order Sync Successful!</CardContainer.Title>
            <CardContainer.Description>
              Your order details from the last 30 days have been successfully
              synced. Check them out now!
            </CardContainer.Description>
          </div>
          <div className="pb-2">
            <CustomButton variant="primary">Explore your orders</CustomButton>
          </div>
        </CardContainer>

        <CardContainer background="bg-surface-caution">
          <div className="space-y-2">
            <CardContainer.Title>
              <span className="w-6 h-6">
                <Icon source={AlertTriangleIcon} />
              </span>
              Customize Customer Notification
            </CardContainer.Title>
            <CardContainer.Description>
              Tailor Your Email Experience: Set the Sender Email and Choose
              Notification Triggers
            </CardContainer.Description>
          </div>
          <div className="pb-2">
            <CustomButton variant="primary">
              Configure Notifications
            </CustomButton>
          </div>
        </CardContainer>

        <CardContainer background="bg-surface-info">
          <div className="flex flex-col justify-between space-y-12">
            <div className="space-y-2">
              <CardContainer.Title>
                <span className="w-6 h-6">
                  <Icon source={InfoIcon} />
                </span>
                Your Tracking Link has been generated
              </CardContainer.Title>
              <CardContainer.Description>
                Include the Link to Your Store's Navigation Menu.
              </CardContainer.Description>
            </div>
            <div className="pb-2 flex space-x-2">
              <CustomButton>Copy Link</CustomButton>
              <CustomButton variant="primary">
                Go To Navigation Menu
              </CustomButton>
            </div>
          </div>
        </CardContainer>
      </div>
    </div>
  );
};

export default HeroSection;
