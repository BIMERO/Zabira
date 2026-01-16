import { FaArrowRightLong } from "react-icons/fa6";
import { bitcoins } from "../../utils/dashboard";

const DashboardContent = () => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-[linear-gradient(67.36deg,#3F9906_-90.03%,#C3BC02_-7.9%,#4B9C06_52.41%,#FFCC00_153.78%)] rounded-xl relative border-2 border-[#FFFFFF2E] flex-1">
          <div className="absolute top-0 bottom-0">
            <img
              src="/signupbg.png"
              alt="signupbg"
              className="w-full h-full object-fit-cover"
            />
          </div>
          <div className="flex items-start text-white p-4 z-10 relative gap-3">
            <img src="/coinsbig.png" alt="coins" className="w-25 md:w-43.75" />{" "}
            <p className="text-base font-bold md:text-2xl">
              SELL & GAIN up to ₦50 on <br /> every $ Crypto Trade
            </p>
          </div>
        </div>

        <div className="bg-[linear-gradient(92.56deg,#5B129F_11.27%,#9234EA_75.65%,#521D84_112.1%)] rounded-xl relative border-2 border-[#FFFFFF2E] flex-1 hidden xl:block">
          <div className="flex items-start justify-between text-white p-4 z-10 relative gap-3">
            <p className="text-2xl font-bold w-full max-w-75">
              Speed UP Your Crypto, Giftcard & Bill Payments
            </p>
            <img src="/rocket.png" alt="coins" width={34} className="" />{" "}
          </div>

          <div className="absolute top-0 bottom-0 right-0">
            <img
              src="/speedup.png"
              alt="speedup"
              className="w-full h-full object-fit-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-9 gap-2 bottom-9 mb-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`h-1 w-4 rounded-full ${
              index === 0 ? "bg-[#00DD77] lg:bg-[#A1A1AA]" : "bg-[#E1E1E2]"
            }`}
          />
        ))}
      </div>

      <div className="block md:hidden">
        <div className="flex items-center justify-between mb-5">
          <p className="flex items-center gap-1 font-bold">
            <img src="/top.png" alt="top" width={20} height={20} /> Top traded
            this week
          </p>

          <button className="flex items-center gap-2 rounded-4xl px-3 py-0.5 bg-[#1A1A1A] border border-[#FFFFFF1F] text-white text-sm">
            Trade Now <FaArrowRightLong color="white" />
          </button>
        </div>

        <div className="flex items-center gap-3 overflow-auto">
          {bitcoins.map((bitcoin, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#F4F4F5] p-4 rounded-xl w-full flex-1 min-w-34 max-w-34"
            >
              <img
                src={bitcoin.icon}
                alt="icon"
                width={36}
                height={36}
                className="mb-3"
              />
              <p className="text-sm font-semibold mb-2">{bitcoin.name}</p>
              <div className="flex items-center gap-1">
                <p className="text-xs text-[#1A1A1AB2] font-semibold">
                  {bitcoin.num}%
                </p>
                {bitcoin.trend === "up" ? (
                  <img src="/trend-up.png" alt="trend" width={16} height={16} />
                ) : (
                  <img src="/trend-up.png" alt="trend" width={16} height={16} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
