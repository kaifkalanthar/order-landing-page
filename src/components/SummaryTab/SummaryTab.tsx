import { Card, Icon } from "@shopify/polaris";
import { CalendarIcon } from "@shopify/polaris-icons";
import order from "../../assets/Order.svg";
import view from "../../assets/View.svg";
import Badge from "../Badge";
import CustomButton from "../CustomButton";
import ChartSummary from "./ChartSummary";

const SummaryTab = () => {
  const timeCategories = [
    { label: "Lifetime", isSelected: true },
    { label: "Last Week" },
    { label: "Last Month" },
    { label: "Last Year" },
    {
      label: (
        <div className="flex space-x-2">
          <span className="w-6 h-6">
            <Icon source={CalendarIcon} />
          </span>
          Customize Time Line{" "}
        </div>
      ),
    },
  ];
  return (
    <div className="bg-[#FFF7EE] pt-10 pb-16">
      <div className="px-16 space-y-8">
        <h1 className="text-2xl font-bold">
          Instant Dive into Your Performance Metrics
        </h1>

        <div className="space-x-2 flex items-center">
          {timeCategories.map((category) => (
            <Badge isSelected={category.isSelected}>{category.label}</Badge>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4 grid-rows-auto">
          <div className="col-span-2 min-h-[368px]">
            <ChartSummary />
          </div>
          <div className="col-span-1">
            <Card padding={"0"}>
              <div className="bg-[#956F00] flex flex-col justify-between min-h-[368px] text-[#fff] h-full p-4 relative">
                <div className="absolute bg-opacity-65 bottom-24 -right-2 w-[70px] h-[70px] bg-[#FFEBD5] blur-[2px] backdrop-blur-0 rounded-full"></div>
                <h1 className="text-base font-semibold w-[85%]">
                  Star Facts about your orders!!!
                </h1>
                <div className="text-[13px] w-[85%] space-y-5">
                  <p>
                    There are 8 shipments that have been in out for delivery for
                    more than 3 days.
                  </p>
                  <p>There are 5 shipments in exception right now</p>
                  <p>The maximum chargebacks are from Miami.</p>
                </div>
                <CustomButton>Check Order Page</CustomButton>
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <Card padding={"0"}>
              <div className="flex flex-col justify-around min-h-[368px] p-4">
                <div className="space-y-2">
                  <h1 className="text-base font-[650]">
                    Tracking Page Views Vs Orders
                  </h1>
                  <p>
                    Understand user engagement patterns and optimize your
                    tracking page for enhanced customer experiences.
                  </p>
                </div>

                <div className="p-4 flex justify-between items-center rounded-md w-full bg-[#FFDDB6]">
                  <div>
                    <p className="text-base">Orders</p>
                    <h1 className="text-4xl font-bold py-3">80</h1>
                  </div>
                  <div className="">
                    <span className="w-10 h-10">
                      <img src={order} />
                    </span>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center rounded-md w-full bg-[#FFC879]">
                  <div>
                    <p className="text-base">Tracking Page Views</p>
                    <h1 className="text-4xl font-bold py-3">44</h1>
                  </div>
                  <div className="">
                    <span className="w-10 h-10">
                      <img src={view} />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryTab;
