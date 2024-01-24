import { Card, TextField } from "@shopify/polaris";
import logos from "../../assets/Logos.svg";
import CustomButton from "../CustomButton";

const Footer = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="px-16 space-y-8">
        <h1 className="text-2xl font-bold">
          Discover the Heart of Our Functionality
        </h1>

        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Card>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-base font-[650]">
                    Elevate Your Brand Aesthetics with Custom Tracking Page
                    Styles
                  </h1>
                  <p>
                    Immerse your customers in a branded experience by
                    personalizing the colors on your tracking page.
                  </p>
                </div>

                <div className="flex w-full items-end space-x-2">
                  <div className="w-full">
                    <TextField
                      value="FF9898"
                      label="Accent Color"
                      autoComplete="off"
                    />
                  </div>
                  <div className="rounded-md w-[64px] relative h-[32px] bg-[#FF9898]" />
                </div>
                <div className="flex w-full items-end space-x-2">
                  <div className="w-full">
                    <TextField
                      value="571010"
                      label="Text Color"
                      autoComplete="off"
                    />
                  </div>
                  <div className="rounded-md w-[64px] relative h-[32px] bg-[#571010]" />
                </div>
                <div className="flex w-full items-end space-x-2">
                  <div className="w-full">
                    <TextField
                      value="FFEAEA"
                      label="Background Color"
                      autoComplete="off"
                    />
                  </div>
                  <div className="rounded-md w-[64px] relative h-[32px] bg-[#FFEAEA]" />
                </div>

                <div className="space-x-2">
                  <CustomButton>Preview</CustomButton>
                  <CustomButton variant="primary">Apply Changes</CustomButton>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-1 row-span-2 space-y-2">
            <Card>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-base font-[650]">
                    Exclusive Onboarding Support for High-Volume Brands
                  </h1>
                  <p>
                    Unlock personalized guidance! Book a one-on-one onboarding
                    call to streamline your experience.
                  </p>
                </div>
                <CustomButton variant="primary">
                  Explore Integrations
                </CustomButton>
              </div>
            </Card>
            <Card>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-base font-[650]">
                    Explore Our Integrated Ecosystem{" "}
                  </h1>
                  <p>
                    Discover a variety of popular integrations tailored for your
                    convenience.
                  </p>
                </div>
                <img src={logos} />
                <CustomButton variant="primary">
                  Explore Integrations
                </CustomButton>
              </div>
            </Card>
          </div>

          <div className="col-span-1 row-span-2">
            <Card>
              <div className="flex flex-col justify-around space-y-9">
                <div className="space-y-2">
                  <h1 className="text-base font-[650]">
                    Seamlessly Integrate Custom HTML Elements{" "}
                  </h1>
                  <p>
                    Unleash creativity Onboarding Support for High-Volume Brands
                    with our Custom HTML feature. Add links, custom messages, or
                    any HTML content to elevate the tracking page experience for
                    your customers.
                  </p>
                </div>
                <TextField
                  label="HTML Link"
                  value="Value"
                  multiline={4}
                  autoComplete="off"
                />
                <div className="flex space-x-2">
                  <CustomButton>Preview</CustomButton>
                  <CustomButton variant="primary">Save changes</CustomButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
