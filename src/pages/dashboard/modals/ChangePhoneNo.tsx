import { IoClose } from "react-icons/io5";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";

const ChangePhoneNo = ({
  onBack,
  onClose,
}: {
  onBack: () => void;
  onClose: () => void;
}) => {
  const handleBack = () => {
    onClose();
    onBack();
  };
  return (
    <DialogContent
      showCloseButton={false}
      className="w-full max-w-110 border-none"
    >
      <DialogClose>
        <span className="flex justify-end w-full">
          <IoClose className="bg-white rounded-full p-1" size={24} />
        </span>
      </DialogClose>

      <div className="bg-white rounded-3xl p-6">
        <div>
          <button
            onClick={handleBack}
            className="items-center gap-2 rounded-4xl px-4 py-2 bg-[#F4F4F5] border border-[#1A1A1A1F] text-sm flex"
          >
            <FaArrowLeftLong color="#1A1A1A" />
            Back
          </button>
        </div>
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold mb-2">
            Change phone number
          </DialogTitle>
          <DialogDescription className="text-[#1A1A1AB2] text-base font-normal">
            Please enter a phone number where you would like to receive the
            verification code
          </DialogDescription>
        </DialogHeader>

        <div>
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
            // onClick={() => setOpen(false)}
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

export default ChangePhoneNo;
