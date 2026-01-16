import { FaArrowRightLong } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

const DashboardFooter = () => {
  return (
    <section className="p-6 bg-white rounded-2xl">
      <p className="flex items-center gap-1 text-lg font-semibold mb-6">
        <img src="/top.png" alt="top" width={20} height={20} /> Do more on
        Zabira!
      </p>

      <div className="flex flex-col-reverse xl:flex-row gap-6">
        <div className="flex items-center gap-6 px-6 pt-6 bg-[linear-gradient(255.44deg,#00E8D1_-25.51%,#502DFF_108.99%)] rounded-[18px] overflow-hidden flex-1">
          <img
            src="/merchantIcon.png"
            alt="icon"
            width={123}
            height={229}
            className="align-self-end h-full"
          />
          <div className="flex flex-col gap-3">
            <p className="text-base md:text-xl font-bold text-white">
              Become a Merchant
            </p>
            <p className="text-sm md:text-lg font-medium text-[#FFFFFFB2]">
              Get access to APIs and assets for your merchant profile
            </p>
            <button className="flex items-center gap-2 rounded-md px-3 py-2 font-semibold text-sm md:text-base w-fit bg-[#FCFCFC] border border-[#E1E1E2]">
              Apply Now <FaArrowRightLong color="#1A1A1A" />
            </button>
          </div>
        </div>

        <div className="rounded-[18px] overflow-hidden flex-1">
          <div className="bg-[#7099FF] flex flex-wrap gap-2 items-center justify-between p-4">
            <p className="flex items-center gap-1 text-base md:text-lg font-bold text-white">
              <img src="/flat.png" alt="top" width={20} height={20} /> Refer and
              Earn
            </p>
            <p className="flex items-center gap-1 text-sm font-semibold py-1 px-2 rounded-2xl bg-[#1A1A1A42] border border-[#1A1A1A1F]">
              Referral Code <IoCopyOutline />
            </p>
          </div>

          <div className="p-4 bg-[#EBF0FF] border border-[#D6E2FF] h-full">
            <p className="text-[#1A1A1AB2] text-lg font-medium mb-6">
              Invite 10 people and get 100 points to use in amazing rewards! T&C
              Apply.
            </p>

            <button className="flex items-center justify-center gap-2 rounded-md py-3 bg-[#1A1A1A] font-semibold w-full border border-[#FFFFFF1F] text-white">
              Invite your friends <FaArrowRightLong color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFooter;
