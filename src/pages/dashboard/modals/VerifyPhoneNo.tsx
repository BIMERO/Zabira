import { BsFillPhoneFill } from "react-icons/bs";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { IoClose, IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const VerifyPhoneNo = ({
  setOpen,
  openOtp,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openOtp: () => void;
}) => {
  const handleVerify = () => {
    setOpen(false);
    openOtp();
  };
  return (
    <DialogContent
      showCloseButton={false}
      className="w-full max-w-110 border-none bg-none"
    >
      <DialogClose>
        <span className="flex justify-end w-full">
          <IoClose className="bg-white rounded-full p-1" size={24} />
        </span>
      </DialogClose>

      <div className="bg-white rounded-3xl p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold mb-2">
            Verify phone number
          </DialogTitle>
          <DialogDescription className="text-[#1A1A1AB2] text-base font-normal">
            Please enter a phone number where you would like to receive the
            verification code
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="flex items-center gap-2 text-sm py-2 px-3 rounded-4xl bg-[#0044EE] text-white border border-[#FFFFFF1F]">
              <IoLogoWhatsapp color="white" />
              WhatsApp
            </span>

            <span className="flex items-center gap-2 text-sm py-2 px-3 rounded-4xl bg-[#FCFCFC] border border-[#E1E1E2]">
              <BsFillPhoneFill color="#52525B" />
              Text Message
            </span>
          </div>

          <div className="border border-[#E1E1E2] rounded-lg p-4 mb-6">
            <label htmlFor="" className=" text-sm font-semibold">
              Phone Number
            </label>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1 w-full max-w-fit">
                <img src="/ngn.png" alt="currency" width={20} />
                <span>+234</span>
                <IoIosArrowDown color="#1A1A1AB2" />
              </div>
              <input
                type="phone"
                name="phone"
                className="border-0 outline-0 w-full"
              />
            </div>
          </div>

          <button
            onClick={handleVerify}
            className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] flex items-center justify-center gap-2 font-medium py-3 w-full rounded-md"
          >
            <img src="/shield.png" alt="shield" />
            <span>Verify</span>
          </button>
        </div>
      </div>
    </DialogContent>
  );
};

export default VerifyPhoneNo;
