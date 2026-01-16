import { useNavigate } from "react-router-dom";

const ChangeEmail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center justify-center py-12">
      <div className="w-full max-w-125 bg-white p-6 rounded-2xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Change email</h2>
        <p className="text-[#1A1A1AB2]">
          Enter the email address where you would like to receive the
          verification code
        </p>

        <div className="border border-[#E1E1E2] rounded-lg p-4">
          <label htmlFor="" className="text-[#1A1A1AB2] text-sm font-semibold">
            Email
          </label>
          <div className="flex items-center gap-2 mt-3">
            <img src="/gmail.png" alt="gmail" />
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="border-0 outline-0 w-full"
            />
          </div>
        </div>

        <button
          onClick={() => navigate("/otp")}
          className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] font-medium py-3 w-full rounded-md"
        >
          <span>Change Email</span>
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

export default ChangeEmail;
