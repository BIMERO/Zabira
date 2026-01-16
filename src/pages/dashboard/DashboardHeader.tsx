import { FaRegEyeSlash } from "react-icons/fa";
import { bitcoins, currencies } from "../../utils/dashboard";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";

const DashboardHeader = () => {
  const actions = [
    {
      title: "Withdraw",
      icon: <GoArrowUpRight />,
    },
    {
      title: "Deposit",
      icon: <GoArrowDownLeft />,
    },
    {
      title: "Swap",
      icon: <LuArrowLeftRight />,
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl hidden lg:block">
        <div className="flex items-center w-full">
          <div className="bg-[#EBF0FF] py-4 px-6 rounded-xl border border-[#D6E2FF] m-6 w-full max-w-117! flex-1 h-full">
            <p className="flex items-center gap-1 text-[#1A1A1AB2] font-semibold mb-3">
              Total Balance <FaRegEyeSlash color="#A1A1AA" />
            </p>
            <div className="flex items-center gap-2 mb-6">
              <h1 className="text-3xl font-bold">10,254.02</h1>
              <span className="text-[#0044EE] font-semibold bg-[#D6E2FF] border border-[#ADC5FF] py-1 px-3 rounded-4xl ">
                USD
              </span>
            </div>

            <div className="flex items-center gap-1 bg-[#D6E2FF] p-1 rounded-md">
              {currencies.map((currency, index) => {
                const active = currency.key === "usd";
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 justify-center text-sm font-semibold py-1 px-5 ${
                      active
                        ? "bg-white rounded-md border border-[#FFFFFF7A]"
                        : "bg-none"
                    }`}
                  >
                    <span className="uppercase">{currency.name}</span>
                    <img
                      src={currency.icon}
                      alt="icon"
                      className="rounded-full size-5"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="my-6 w-full flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between mr-6">
              <p className="flex items-center gap-1">
                <img src="/top.png" alt="top" width={20} height={20} /> Top
                traded assets this week
              </p>

              <button className="flex items-center gap-2 rounded-4xl px-3 py-0.5 bg-[#1A1A1A] border border-[#FFFFFF1F] text-white">
                Trade Now <FaArrowRightLong color="white" />
              </button>
            </div>

            <div className="flex items-center gap-3 overflow-auto">
              {bitcoins.map((bitcoin, index) => (
                <div
                  key={index}
                  className="bg-[#F4F4F5] p-4 rounded-xl w-34 h-36.25 flex-1"
                >
                  <img
                    src={bitcoin.icon}
                    alt="icon"
                    width={36}
                    height={36}
                    className="mb-3 size-9"
                  />
                  <p className="text-sm font-semibold mb-2">{bitcoin.name}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-[#1A1A1AB2] font-semibold">
                      {bitcoin.num}%
                    </p>
                    {bitcoin.trend === "up" ? (
                      <img
                        src="/trend-up.png"
                        alt="trend"
                        width={16}
                        height={16}
                      />
                    ) : (
                      <img
                        src="/trend-up.png"
                        alt="trend"
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 w-full max-w-117 mx-6 mb-6">
            {actions.map((item, index) => (
              <div
                key={index}
                className="bg-[#FCFCFC] font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 border border-[#E1E1E2]"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mr-6">
            <img src="/coin.png" width={24} height={24} className="size-6" />
            <p className="font-semibold">Earn Rewards</p>
            <FaArrowRightLong />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="relative">
          <div
            style={{ backgroundImage: "url(/balance.png)" }}
            className="h-full w-full bg-cover bg-center absolute top-0 bg-no-repeat"
          ></div>

          <div className="py-4 px-5 rounded-xl bg-[#0044EE]">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1 text-[#FFFFFF] font-semibold mb-3">
                Total Balance <FaRegEyeSlash color="#FFFFFF" />
              </p>
              <span className="text-white font-semibold bg-[#FFFFFF2E] border border-[#FFFFFF42] py-1 px-3 rounded-[20px] flex items-center gap-2">
                USD <IoIosArrowDown />
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">10,254.02</h1>

            <div className="border-t border-[#FFFFFF42] pt-3 text-white text-sm flex items-center justify-center">
              <div className="flex items-center gap-2 justify-center px-12 border-r border-[#FFFFFF42]">
                <GoArrowUpRight />
                <span>Withdraw</span>
              </div>
              <div className="flex items-center gap-2 justify-center px-12">
                <GoArrowDownLeft />
                <span>Deposit</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#EBF0FF] py-2 px-3 rounded-xl border border-[#D6E2FF] -mt-5 pt-5">
          <div className="flex items-center gap-2">
            <img src="/book.png" alt="book" width={16} height={16} />
            <p className="text-[#1A1A1AB2] text-sm font-semibold">
              Transaction History
            </p>
          </div>
          <IoArrowForwardOutline color="#1A1A1A7A" size={16} />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
