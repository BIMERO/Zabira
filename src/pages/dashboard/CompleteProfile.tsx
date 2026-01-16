import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Dialog, DialogTrigger } from "../../components/ui/dialog";
import { useState } from "react";
import ProfileSteps from "./modals/ProfileSteps";

const CompleteProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-start md:items-center justify-between bg-[#D6ECFF] border-2 border-[#A3D4FF] rounded-xl p-4">
        <div className="flex items-center gap-6">
          <img
            src="/ProgressRadial.png"
            alt="progress_bar"
            width={56}
            height={56}
          />
          <div>
            <p className="text-[#00298F] text-base md:text-xl font-bold mb-1">
              You’re almost done!
            </p>
            <p className="text-[#1A1A1AB2] font-medium text-sm md:text-base">
              Finish setting up your account to enjoy benefits
            </p>
          </div>
        </div>

        <div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <button className="hidden items-center gap-2 rounded-md px-3 py-2 bg-[#1A1A1A] border border-[#FFFFFF1F] text-white text-sm md:flex">
                Complete Profile Setup
                <FaArrowRightLong color="white" />
              </button>
            </DialogTrigger>

            <ProfileSteps onClose={() => setOpen(false)} />
          </Dialog>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <IoIosArrowForward
                color="#1A1A1A5C"
                size={24}
                className="block md:hidden"
              />
            </DialogTrigger>
            <ProfileSteps onClose={() => setOpen(false)} />
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
