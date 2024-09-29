import PropTypes from "prop-types";
import SettingsIcon from "@mui/icons-material/Settings";
import frame1 from "../Assets/frame-4@2x.png";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';

const Sidebar = ({ className = "" }) => {
  return (
    <div
      className={`fixed h-full top-0 left-0 w-60 box-border flex flex-col items-start justify-start py-[100px] px-0 gap-[16px] text-left text-sm text-white font-body border-r-[1px] border-solid border-gray-800 bg-dark-blue ${className}`}
    >
      <div className="absolute top-[40px] left-[60px]">
        <img src={frame1} className="h-10 w-300" alt="Logo" />
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <HomeOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Home</div>
        </Link>
      </div>
      <div className="mt-[20px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <div className="tracking-[0.3px] font-medium">PAYMENTS</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-[#49C8B7] rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <PaymentOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Transactions</div>
        </Link>
      </div>

      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <PeopleAltOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Customer</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <ReplayIcon />
          <div className="tracking-[0.3px] font-medium">Refunds</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <ArrowCircleDownIcon />
          <div className="tracking-[0.3px] font-medium">Payouts</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <OutlinedFlagOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Disputes</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <CallSplitOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Transaction Splits</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <SwitchAccountOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Subaccounts</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <CardTravelOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Terminals</div>
        </Link>
      </div>
      <div className="mt-[20px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <div className="tracking-[0.3px] font-medium">RECURRING</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <ReplayIcon />
          <div className="tracking-[0.3px] font-medium">Subscribers</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <SubscriptionsOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Plans</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <CreditCardOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Subscriptions</div>
        </Link>
      </div>
      <div className="mt-[20px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <div className="tracking-[0.3px] font-medium">COMMERCE</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <CreditCardOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Payment pages</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <LocalMallOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Products</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <StorefrontOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">StoreFronts</div>
        </Link>
      </div>
      <div className="mt-[10px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <ShoppingCartOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Orders</div>
        </Link>
      </div>
      <div className="mt-[24px] w-full relative h-[50px]">
        <Link
          to="/dashboard"
          className="absolute h-full w-full  top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary text-white rounded-lg  "
          style={{ textDecoration: "none" }}
        >
          <RemoveRedEyeOutlinedIcon />
          <div className="tracking-[0.3px] font-medium">Audit Logs</div>
        </Link>
      </div>

      <div className="w-full mt-[10px] relative h-[50px]">
        <Link
          to="/settings"
          className="absolute h-full w-full top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-start pl-[50px] gap-[12px] transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:text-secondary  text-white rounded-lg"
          style={{ textDecoration: "none" }}
        >
          <SettingsIcon />
          <div className="tracking-[0.3px] font-medium">Settings</div>
        </Link>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
