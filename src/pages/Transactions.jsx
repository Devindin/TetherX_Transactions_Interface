import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../Assets/profile.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Switch from "@mui/material/Switch";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Transactions = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleChange = () => {
    setIsToggled(!isToggled);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full min-h-screen relative bg-[#090D1C] flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-60">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[#cecdcd] font-roboto text-xl">Transactions</div>
          <div className="flex items-center space-x-4">
            {/* Green switch and text display */}
            <div className="flex items-center space-x-2">
              <Switch
                checked={isToggled}
                onChange={handleToggleChange}
                className="text-white"
                color="success" // Green color when active
              />
              {isToggled && (
                <span className="text-green-400 font-semibold">Live</span> // Display "Live" when toggled on
              )}
            </div>

            {/* Notification Icon */}
            <div className="shadow-[0px_4px_31px_rgba(130,_155,_239,_0.48)] rounded-full bg-gradient-to-r from-[#49c8b7] to-[#446ae8] flex items-center justify-center py-1 px-2 opacity-80">
              <NotificationsNoneIcon className="text-white" />
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0"></div>
            </div>

            {/* Profile Image */}
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] bg-slate-400 rounded-full">
                <img
                  src={Profile}
                  alt="Profile_Image"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="ml-2 text-white">Devindi</p>
            </div>
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="flex justify-between items-center mt-10">
          {/* Left side: Dropdown and Search Input */}
          <div className="flex items-center space-x-4">
            {/* Dropdown for filter */}
            <select className="bg-transparent text-white py-2 px-4 rounded">
              <option value="all">All Accounts</option>
            </select>

            <h4 className="text-white">Filter</h4>
            <FilterAltOutlinedIcon className="text-white" fontSize="small"  />

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search reference..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-[#1a1d2e] text-white py-2 px-4 rounded border border-gray-600"
            />
          </div>

          {/* Right side: Button */}
          <div>
            <select className="bg-green-500 text-white py-2 px-4 rounded">
              <option value="all">Export CSV</option>
            </select>
          </div>
        </div>

        {/* Table section placed under the filters */}
        <div className="mt-10 w-full max-w-[1100px] rounded-lg bg-[#829BEF] bg-opacity-20 p-4 items-center justify-between ml-12">
          {/* Table */}
          <div className="mt-4">
            <table className="w-full text-[12px] rounded-[7px] items-center justify-between">
              <thead className="bg-gray-600">
                <tr className="text-[#47b5d1]">
                  <th className="px-4 py-1 text-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span> Amount</th>
                  <th className="px-4 py-1 text-center">Customer</th>
                  <th className="px-4 py-1 text-center">Reference</th>
                  <th className="px-4 py-1 text-center">Channel</th>
                  <th className="px-4 py-1 text-center">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                <tr>
                  <td className="px-4 py-2 text-center">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                    NGN 30,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T356789008765334</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 20,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T356789008765334</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Sunday , October 11 ,2024 06:40 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 5,000.00</td>
                  <td className="px-4 py-2 text-center">Presiou oeg</td>
                  <td className="px-4 py-2 text-center">T789611365666</td>
                  <td className="px-4 py-2 text-center">USDD</td>
                  <td className="px-4 py-2 text-center">Friday , October 8 ,2024 08:40 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 25,000.00</td>
                  <td className="px-4 py-2 text-center">Ko Ko</td>
                  <td className="px-4 py-2 text-center">T89620456987933</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 2 ,2024 09:30 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 1,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T356789008765334</td>
                  <td className="px-4 py-2 text-center">USDD</td>
                  <td className="px-4 py-2 text-center">Monday , september 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 9,000.00</td>
                  <td className="px-4 py-2 text-center">Ko Ko</td>
                  <td className="px-4 py-2 text-center">T784369956</td>
                  <td className="px-4 py-2 text-center">USDD</td>
                  <td className="px-4 py-2 text-center">Saturday , september 28 ,2024 10:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 80,000.00</td>
                  <td className="px-4 py-2 text-center">Presiou oeg</td>
                  <td className="px-4 py-2 text-center">T785236951478</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 74,000.00</td>
                  <td className="px-4 py-2 text-center">Ko Ko</td>
                  <td className="px-4 py-2 text-center">T879224698455</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 4,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T789654123302</td>
                  <td className="px-4 py-2 text-center">USDD</td>
                  <td className="px-4 py-2 text-center">Saturday , september 28 ,2024 10:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 36,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T356789008765334</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 23,000.00</td>
                  <td className="px-4 py-2 text-center">Presiou oeg</td>
                  <td className="px-4 py-2 text-center">T789456987563</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Saturday , september 28 ,2024 10:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 8,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T48569741236</td>
                  <td className="px-4 py-2 text-center">USDD</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                  NGN 9,000.00</td>
                  <td className="px-4 py-2 text-center">Kahlan Ammell</td>
                  <td className="px-4 py-2 text-center">T48663214789456</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Monday , October 12 ,2024 08:20 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  NGN 12,000.00</td>
                  <td className="px-4 py-2 text-center">Presiou oeg</td>
                  <td className="px-4 py-2 text-center">T45662236688895</td>
                  <td className="px-4 py-2 text-center">Card</td>
                  <td className="px-4 py-2 text-center">Saturday , september 28 ,2024 10:20 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
