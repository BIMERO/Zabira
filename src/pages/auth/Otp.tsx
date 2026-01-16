import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpLength = 6;
const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(OtpLength).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [secondsLeft, setSecondsLeft] = useState(300);

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

  return (
    <div className="flex flex-col gap-6 items-center justify-center py-12">
      <div className="w-full max-w-125 bg-white p-6 rounded-2xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Check your email</h2>
        <p>
          Hello Boss, please enter the 6 digit code that was sent to{" "}
          <span className="text-[#0044EE]">jacob@jones.com</span>
        </p>

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
          <button className="flex items-center gap-2 justify-center border border-[#E1E1E2] bg-[#FCFCFC] rounded-md py-2 px-3 max-w-37.5 text-sm font-semibold">
            <img src="/change.png" alt="change" />
            <span onClick={() => navigate("/change-email")}>Change Email</span>
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
          onClick={() => navigate("/dashboard")}
          className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] flex items-center justify-center gap-2 font-medium py-3 w-full rounded-md"
        >
          <img src="/shield.png" alt="shield" />
          <span>Verify</span>
        </button>
      </div>

      <div className="flex items-center gap-2 bg-white p-1 rounded-md">
        <img src="/compliant.png" alt="compliant" />
        <span className="text-[#1A1A1AB2] text-sm font-medium">
          NDPR Compliant
        </span>
      </div>
    </div>
  );
};

export default Otp;
