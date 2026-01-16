import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../../../components/ui/dialog";
import { IoClose } from "react-icons/io5";
import ChangePhoneNo from "./ChangePhoneNo";
import SuccessModal from "./SuccessModal";

const VerifyOtp = ({
  setOpen,
  onClose,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}) => {
  const OtpLength = 6;
  const [otp, setOtp] = useState<string[]>(Array(OtpLength).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const [openChange, setOpenChange] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OtpLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleOpenChange = () => {
    onClose();
    setOpenChange(true);
  };

  const handleVerify = () => {
    onClose();
    setOpenSuccess(true);
  };

  return (
    <>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-110 border-none"
      >
        <DialogClose>
          <span className="flex justify-end w-full">
            <IoClose className="bg-white rounded-full p-1" size={24} />
          </span>
        </DialogClose>

        <div className="w-full max-w-125 bg-white p-6 rounded-2xl flex flex-col gap-6">
          <DialogTitle className="text-2xl font-bold">
            Enter verification code
          </DialogTitle>
          <DialogDescription>
            Hello Boss, please enter the 6 digit code that was sent to{" "}
            <span className="text-[#0044EE]">08012345678</span>
          </DialogDescription>

          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Enter Code</span>
            <span className="text-xs bg-[#F4F4F5] p-1 rounded">Paste Code</span>
          </div>

          <div className="flex gap-3 md:gap-6 justify-between">
            {otp.map((value, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className=" size-10 md:size-12 text-center text-xl border border-[#D8D8D8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#0044EE]"
              />
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleOpenChange}
              className="flex items-center gap-2 justify-center border border-[#E1E1E2] bg-[#FCFCFC] rounded-md py-2 px-3 text-sm font-semibold"
            >
              <img src="/change.png" alt="change" />

              <span>Change Phone Number</span>
            </button>

            <p className="text-[#1A1A1AB2] text-sm font-medium">
              Resend Code in{" "}
              <span className="text-[#0044EE]">
                {Math.floor(secondsLeft / 60)}:
                {(secondsLeft % 60).toString().padStart(2, "0")}
              </span>
            </p>
          </div>

          <button
            onClick={handleVerify}
            className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] flex items-center justify-center gap-2 font-medium py-3 w-full rounded-md"
          >
            <img src="/shield.png" alt="shield" />
            <span>Verify</span>
          </button>
        </div>
      </DialogContent>

      <Dialog open={openChange} onOpenChange={setOpenChange}>
        <ChangePhoneNo
          onBack={() => setOpen(true)}
          onClose={() => setOpenChange(false)}
        />
      </Dialog>

      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <SuccessModal
          title={"Phone Number Added!"}
          description={"Your phone number has been added successfully."}
        />
      </Dialog>
    </>
  );
};

export default VerifyOtp;
