import { useState } from "react";
import { getPasswordStrength, passwordRules } from "../../utils/passwordRules";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const strength = getPasswordStrength(password);

  const navigate = useNavigate();

  return (
    <section>
      <div className="flex flex-col gap-6 items-center justify-center py-12">
        <div className="w-full max-w-125 bg-white p-6 rounded-2xl flex flex-col gap-6">
          <h2 className="text-2xl font-bold">
            Create an account in 2 minutes!
          </h2>

          <div className="bg-[linear-gradient(67.36deg,#3F9906_-90.03%,#C3BC02_-7.9%,#4B9C06_52.41%,#FFCC00_153.78%)] rounded-xl relative border-2 border-[#FFFFFF2E]">
            <div className="absolute top-0 bottom-0">
              <img
                src="/signupbg.png"
                alt="signupbg"
                className="w-full h-full object-fit-cover"
              />
            </div>
            <div className="flex items-start text-white p-4 z-10 relative gap-3">
              <img src="/coins.png" alt="coins" width={70} />{" "}
              <p>
                SELL & GAIN up to ₦50 on every <br /> $ Crypto Trade
              </p>
            </div>
          </div>

          <form action="" className="flex flex-col gap-4">
            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Email
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/gmail.png" alt="gmail" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Password
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/gmail.png" alt="gmail" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="border-0 outline-0 w-full bg-transparent"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>
            </div>

            {password && (
              <div className="py-1 px-2 flex items-center gap-4">
                <p className="text-sm text-[#1A1A1AB2]">{strength.label}</p>
                <div className="flex gap-1 w-full">
                  {[1, 2, 3, 4].map((bar) => {
                    const active = bar <= strength.bars;

                    let bg = "bg-gray-300";
                    if (active && strength.color === "red") bg = "bg-red-500";
                    if (active && strength.color === "yellow")
                      bg = "bg-yellow-400";
                    if (active && strength.color === "green")
                      bg = "bg-green-500";

                    return (
                      <div
                        key={bar}
                        className={`h-1 flex-1 rounded-full transition-all ${bg}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {password && (
              <>
                <ul className="space-y-3 text-sm">
                  {passwordRules.map((rule, index) => {
                    const passed = rule.test(password);

                    return (
                      <li
                        key={index}
                        className={`flex items-center gap-2 ${
                          passed ? "text-[#819099]" : "text-[#E92F15]"
                        }`}
                      >
                        <span>
                          {passed ? (
                            <IoCheckmarkCircle color="#1DC660" size={16} />
                          ) : (
                            <MdCancel color="#E92F15" size={16} />
                          )}
                        </span>
                        {rule.label}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            <div className="border border-[#E1E1E2] rounded-lg p-4">
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-semibold"
              >
                Referral Code (Optional)
              </label>
              <div className="flex items-center gap-2 mt-3">
                <img src="/community.png" alt="gmail" />
                <input
                  type="text"
                  placeholder="Enter referral code"
                  className="border-0 outline-0 w-full"
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" />
              <label
                htmlFor=""
                className="text-[#1A1A1AB2] text-sm font-medium leading-3.5"
              >
                By clicking ‘Sign Up’, I agree to Zabira’s{" "}
                <span className="text-[#0044EE]">Terms of Service</span> and{" "}
                <span className="text-[#0044EE]">Privacy Policy</span>.
              </label>
            </div>
          </form>

          <button
            onClick={() => navigate("/otp")}
            disabled={!email || !password}
            className="disabled:bg-[#F4F4F5] bg-[#1A1A1A] text-white disabled:text-[#1A1A1A2E] font-medium py-3 w-full rounded-md"
          >
            Sign Up
          </button>

          <span className="text-[#1A1A1AB2] text-sm font-medium text-center">
            Or continue with
          </span>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 justify-center border border-[#E1E1E2] bg-[#FCFCFC] rounded-md py-3 flex-1 font-semibold">
              <img src="/google.png" alt="google" />
              <span className="hidden sm:block">Google</span>
            </button>
            <button className="flex items-center gap-2 justify-center border border-[#1A1A1A1F] bg-[#1A1A1A] text-white rounded-md py-3 flex-1 font-semibold">
              <img src="/apple.png" alt="google" />
              <span className="hidden sm:block">Apple</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm">
          Already have an account? <span className="text-[#0044EE]">Login</span>
        </p>
        <div className="flex items-center gap-2 bg-white p-1 rounded-md">
          <img src="/compliant.png" alt="compliant" />
          <span className="text-[#1A1A1AB2] text-sm font-medium">
            NDPR Compliant
          </span>
        </div>
      </div>
    </section>
  );
};

export default Signup;
