import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { sidebarLinks } from "../utils/sidebarlinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section className="relative">
      <nav className="px-5 lg:px-10 xl:px-12 py-5 bg-white shadow-[0px_8px_8px_rgba(176, 176, 176, 0.09)] gap-4 flex items-center justify-between">
        <div className="hidden lg:block">
          <p className="font-bold">Hi Jacob 👋🏽</p>
          <p className="text-[#1A1A1A5C] font-medium text-sm">
            Buy/Sell BTC, ETH. Start trading now on Zabira
          </p>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <IoMenu
            color="#323232"
            size={24}
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <img src="/logo_mobile.png" alt="logo" width={100} height={20} />
        </div>

        <div className="flex items-center gap-10">
          <div className="items-center justify-end border-2 border-[#E1E1E2] text-xs lg:text-sm font-semibold w-fit rounded-[20px] hidden lg:flex">
            <span className="flex items-center gap-1 py-2 px-3 border-r-2 border-[#E1E1E2]">
              <img src="/rates.png" alt="rates" />
              Check Rates
            </span>
            <span className="flex items-center gap-1 py-2 px-3">
              <img src="/help.png" alt="help" />
              Get Help
            </span>
          </div>

          <div className="relative hidden lg:block">
            <span className="bg-[#0044EE] text-white rounded-full px-1 text-[10px] absolute size-4 -top-1 -right-1 flex items-center justify-center">
              8
            </span>
            <img
              src="/bell.png"
              alt="bell"
              width={20}
              height={20}
              className="bg-[#FCFCFC] shadow-sm rounded-full p-3 size-9"
            />
          </div>

          <div className="relative block lg:hidden">
            <span className="bg-[#00DD77] text-white rounded-full px-1 text-[10px] absolute size-4 -top-1 -right-1 flex items-center justify-center">
              8
            </span>
            <img
              src="/bell.png"
              alt="bell"
              width={20}
              height={20}
              className=""
            />
          </div>

          <img
            src="/navbarlogo.png"
            alt="logo"
            width={40}
            height={40}
            className="size-8 lg:size-10"
          />
        </div>
      </nav>

      {showSidebar && (
        <div className="bg-white px-4 py-6 h-full overflow-auto transition-all ease-in absolute min-h-screen w-full max-w-[256px] z-30">
          <div className="flex flex-col gap-3 mb-5">
            {sidebarLinks.map((item, index) => {
              const active = window.location.pathname === item.path;
              return (
                <Link
                  to={item.path}
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-md text-sm ${
                    active ? "bg-[#EBF0FF]" : "bg-none"
                  }`}
                >
                  <img src={item.icon} width={16} height={16} />
                  <span
                    className={`font-medium capitalize ${
                      active ? "text-[#0044EE]" : "text-[#1A1A1A5C]"
                    } `}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
