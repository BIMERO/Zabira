import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { IoClose } from "react-icons/io5";
import { profileSteps } from "../../../utils/dashboard";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import VerifyPhoneNo from "./VerifyPhoneNo";
import VerifyOtp from "./VerifyOtp";
import PersonalInformation from "./PersonalInformation";

const ProfileSteps = ({ onClose }: { onClose: () => void }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openOtp, setOpenOtp] = useState(false);

  const handleOpen = (key: string) => {
    onClose();
    setActiveModal(key);
  };

  return (
    <>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-110 border-none bg-none"
      >
        <DialogClose>
          <span className="flex justify-end w-full">
            <IoClose className="bg-white rounded-full p-1" size={24} />
          </span>
        </DialogClose>

        <div className="bg-white rounded-3xl w-full p-6 flex flex-col items-center mb-9">
          <div className="flex items-start justify-between">
            <DialogHeader className="mb-4 text-center ">
              <DialogTitle className="text-xl font-bold">
                Welcome to Zabira 👋
              </DialogTitle>
              <DialogDescription className="text-[#1A1A1AB2] text-base font-normal">
                Complete your account setup in a few easy steps
              </DialogDescription>
            </DialogHeader>

            <img src="/Progress.png" width={64} height={64} />
          </div>

          <div className="flex flex-col gap-4 w-full">
            {profileSteps.map((item) => {
              const completed = item.key === "verify";
              return (
                <div
                  key={item.key}
                  onClick={() => handleOpen(item.key)}
                  className={`flex items-center justify-between p-3 rounded-2xl border ${
                    completed
                      ? "border-[#A3D4FF] bg-[#EBF5FF]"
                      : "border-[#E1E1E2] bg-[#FCFCFC]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.icon}
                      width={36}
                      height={36}
                      className="size-9"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-[#1A1A1AB2] text-sm">{item.desc}</p>
                    </div>
                  </div>

                  <span>
                    {completed ? (
                      <BsFillCheckCircleFill color="#299BFF" />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>

      <Dialog
        open={activeModal === "verify_phone"}
        onOpenChange={(v) => !v && setActiveModal(null)}
      >
        <VerifyPhoneNo
          setOpen={() => setActiveModal(null)}
          openOtp={() => setOpenOtp(true)}
        />
      </Dialog>

      <Dialog
        open={activeModal === "personalInformation"}
        onOpenChange={(v) => !v && setActiveModal(null)}
      >
        <PersonalInformation setOpen={() => setActiveModal(null)} />
      </Dialog>

      <Dialog open={openOtp} onOpenChange={setOpenOtp}>
        <VerifyOtp setOpen={setOpenOtp} onClose={() => setOpenOtp(false)} />
      </Dialog>
    </>
  );
};

export default ProfileSteps;
