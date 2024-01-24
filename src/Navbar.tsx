import { Icon } from "@shopify/polaris";
import {
  ChevronDownIcon,
  PersonIcon,
  SearchIcon,
  SettingsIcon,
} from "@shopify/polaris-icons";

const Navbar = () => {
  return (
    <nav className="px-16 z-10 bg-surfacePrimary text-base flex justify-between items-center py-4 border-b-2 border-b-iconSecondary sticky top-0">
      <ul className="flex space-x-8 font-semibold">
        <li>Home</li>
        <li>Orders</li>
        <li>Integrations</li>
        <li className="flex">
          Tracking Page
          <span className="w-6 h-6">
            <Icon source={ChevronDownIcon} />
          </span>
        </li>
        <li>Partner with us</li>
      </ul>
      <ul className="flex space-x-8 font-semibold">
        <li className="flex border-b-2 space-x-2 border-b-iconSecondary">
          <span className="w-6 h-6">
            <Icon source={SearchIcon} />
          </span>
          <p className="pr-12">Search</p>
        </li>
        <li className="flex space-x-2">
          <span className="w-6 h-6">
            <Icon source={PersonIcon} />
          </span>
          Account{" "}
        </li>
        <li className="flex space-x-2">
          <span className="w-6 h-6">
            <Icon source={SettingsIcon} />
          </span>
          Settings{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
