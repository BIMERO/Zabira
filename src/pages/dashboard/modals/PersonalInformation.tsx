import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { BsFillCheckCircleFill } from "react-icons/bs";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

const PersonalInformation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSave = () => {
    setOpen(false);
    setOpenSuccess(true);
  };

  return (
    <>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-110 border-none bg-none h-full max-h-[90%] overflow-auto"
      >
        <DialogClose>
          <span className="flex justify-end w-full">
            <IoClose className="bg-white rounded-full p-1" size={24} />
          </span>
        </DialogClose>

        <div className="bg-white rounded-3xl p-6 h-fit">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold">
              Add personal information
            </DialogTitle>
            <DialogDescription className="text-[#819099] text-base font-normal">
              Add your personal information to begin transacting.
            </DialogDescription>
          </DialogHeader>

          <form className="flex flex-col gap-4">
            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Username
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/user.png" alt="gmail" />
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <BsFillCheckCircleFill color="#C7CDD1" />
              <p className="text-xs text-[#1A1A1A5C]">
                Username must contain letter and number
              </p>
            </div>

            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Firstname
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/user.png" alt="gmail" />
                <input
                  type="text"
                  placeholder="Enter firstname"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Lastname
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/user.png" alt="gmail" />
                <input
                  type="text"
                  placeholder="Enter lastname"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Date of Birth (Optional)
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/calendar.png" alt="gmail" />
                <input
                  type="text"
                  placeholder="Choose date of birth"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] flex items-center justify-center gap-2 font-medium py-3 w-full rounded-md"
            >
              <img src="/shield.png" alt="shield" />
              <span>Save</span>
            </button>
          </form>
        </div>
      </DialogContent>

      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <SuccessModal
          title={"Personal Information Added!"}
          description={"Your personal information has been added successfully."}
        />
      </Dialog>
    </>
  );
};

export default PersonalInformation;
