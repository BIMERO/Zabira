import { paymentOptions } from "../../utils/dashboard";

const MakePayments = () => {
  return (
    <section className="p-6 bg-white rounded-2xl">
      <p className="flex items-center gap-1 text-lg font-semibold mb-6">
        <img src="/top.png" alt="top" width={20} height={20} /> Top traded
        assets this week
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {paymentOptions.map((option, index) => (
          <div
            key={index}
            className="bg-[#FCFCFC] border border-[#E1E1E2] rounded-xl p-4 flex flex-col items-center lg:items-start"
          >
            <img
              src={option.icon}
              alt="icon"
              width={36}
              height={36}
              className="mb-3"
            />
            <p className="font-semibold mb-2 text-[#1A1A1AB2] text-sm lg:text-[#1A1A1A] lg:text-base">
              {option.name}
            </p>
            <p className="font-medium text-sm text-[#1A1A1A5C] hidden lg:block">
              {option.desc}
            </p>
          </div>
        ))}

        <div className="bg-[#FCFCFC] border border-[#E1E1E2] rounded-xl p-4 flex flex-col items-center lg:hidden">
          <img
            src="/merchant.png"
            alt="icon"
            width={36}
            height={36}
            className="mb-3"
          />
          <p className="font-semibold mb-2 text-[#1A1A1AB2] text-sm lg:text-[#1A1A1A] lg:text-base">
            Merchant
          </p>
        </div>
        <div className="bg-[#FCFCFC] border border-[#E1E1E2] rounded-xl p-4 flex flex-col items-center lg:hidden">
          <img
            src="/more.png"
            alt="icon"
            width={36}
            height={36}
            className="mb-3"
          />
          <p className="font-semibold mb-2 text-[#1A1A1AB2] text-sm lg:text-[#1A1A1A] lg:text-base">
            More
          </p>
        </div>
      </div>
    </section>
  );
};

export default MakePayments;
