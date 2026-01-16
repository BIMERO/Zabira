import { Link } from "react-router-dom";
import { sidebarLinks } from "../utils/sidebarlinks";

const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) => {
  return (
    <div
      className={`w-full hidden lg:block ${
        collapsed ? "max-w-20" : "max-w-[256px]"
      } fixed bg-white px-4 py-6 h-full overflow-hidden overflow-y-auto transition-all ease-in`}
    >
      <div>
        {collapsed ? (
          <img
            src="/Zabira Logo Icon.png"
            alt="logo"
            width={20}
            height={20}
            className="mb-9"
          />
        ) : (
          <img
            src="/logo_mobile.png"
            alt="logo"
            width={100}
            height={20}
            className="mb-9"
          />
        )}
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
                  }  ${collapsed && "hidden"}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <img
          src="/public/Banner.png"
          alt="download"
          width={224}
          height={160}
          className={collapsed ? "hidden" : "block"}
        />
        <div className={`p-6 mb-5 ${collapsed && "hidden"}`}>
          <p className="text-[#819099] text-sm font-semibold mb-3">
            Download the Zabira App
          </p>
          <img src="/download.png" alt="download" width={176} height={180} />
        </div>

        <div className={`px-6 pb-6 ${collapsed && "hidden"}`}>
          <p className="text-sm text-[#1A1A1AB2] font-semibold mb-2">
            Zabira Technologies
          </p>
          <p className="text-sm text-[#1A1A1A5C] font-normal">
            © 2027 All Rights Reserved
          </p>
        </div>
      </div>

      <div
        className="h-fit w-fit absolute top-0 -right-11.5"
        onClick={() => setCollapsed(!collapsed)}
      >
        <img
          src="/Expand.png"
          alt="button"
          width={42}
          height={42}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
