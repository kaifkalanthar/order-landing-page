import { Card } from "@shopify/polaris";
import pieChart from "../../assets/pie-chart.svg";
import classNames from "classnames";

const ChartSummary = () => {
  const categories = [
    { label: "Delivered", isSelected: true },
    { label: "Out of Delivery" },
    { label: "Intransit" },
    { label: "Pending" },
    { label: "Explore" },
  ];

  const labels = [
    { value: "Exception", background: "#5E4200" },
    { value: "Intransit", background: "#956F00" },
    { value: "Pending", background: "#E5A500" },
    { value: "Delivered", background: "#FFC879" },
    { value: "Out of Delivery", background: "#FFDDB6" },
  ];
  return (
    <Card>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-base">
          <p className="font-bold">Shipment Updates</p>
          <p>Total: 392</p>
        </div>

        <div className="flex space-x-2 overflow-x-auto no-bar">
          {categories.map((category) => (
            <div
              className={classNames({
                "cursor-pointer bg-[#F1F1F1] px-3 py-2 rounded-md text-base font-semibold":
                  true,
                "bg-[#FFF1E3] border border-[#E3E3E3]": category.isSelected,
              })}
            >
              {category.label}
            </div>
          ))}
        </div>

        <div className="py-2 flex justify-center">
          <img src={pieChart} />
        </div>

        <div className="w-[70%] flex flex-wrap gap-4">
          {labels.map((label) => (
            <div className="flex space-x-2 items-center">
              <div
                style={{ background: label.background }}
                className={`w-[20px] h-[10px] rounded-full`}
              />
              <p className="text-base">{label.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ChartSummary;
