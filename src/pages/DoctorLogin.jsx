import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="bg-[#faf8ff] text-[#191b23] min-h-screen flex items-center justify-center p-0 md:p-6 lg:p-12">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden md:rounded-xl md:shadow-xl min-h-[751px]">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-[#2563eb] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none bg-repeat"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE8dujj_d3m4T_aJzzh1w9pv74JmHcdmJ7_gFNrV9hvmfe3vU91GZ9FmXrgjjBwF1m2Dz2Pd4K9D_z1fdURNOdFPKj8zx93nKrjSbESfXa0lMO7WYUhCtt4NMfT8Nzi06pOx-A1zkWfEFiDRY6BcQVHc0MJMSX_wauYIjVV4Pj7JHX2fDm9t06iUyRNjMcOP-a8lxvgEN7U3BVMN5lMXbqjjhItE0CW8-xZC6RvUzrrbtNzkKuobkYnti61X1uYOLj11qvbqIL6uHW')",
            }}
          ></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <span className="material-symbols-outlined text-4xl text-white">
                medical_services
              </span>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                MedPanel
              </span>
            </div>

            <h1 className="font-manrope text-[36px] leading-[44px] tracking-[-0.02em] font-bold text-white mb-6 max-w-md">
              Empowering Healthcare Through Digital Precision.
            </h1>

            <p className="font-inter text-[18px] leading-[28px] text-[#b4c5ff] max-w-sm">
              Join a global network of specialized physicians providing
              world-class care via our secure telemedicine interface.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh29icuqGyOys9NdXiQ4br1174rbqD36PbGOoARB_vxfEr-fnTjg0BQj_8k-q6xBdvpNEpsfO-uHOpcywLw7aK7kOzr4JugWsbIRZ43w9uBMbbkTv2bSjMctwtts478X6HnlUA2sj1Coehavvn_HvPz63a9qBD-MpRtNTHBFVF-8uWMfJPEKarcFjLfucQGiWYdymY0xzas9NLwlR9FLYA659uRG2mz_IZjIvoARxfDnS4IubrZQp6YIbqGgsqptRy6IXQA2MAvWdU"
              alt="Professional Healthcare Digital Interface"
              className="rounded-xl shadow-2xl border border-white/10 w-full object-cover h-64"
            />

            <div className="mt-8 flex items-center gap-4 text-white/80">
              <div className="flex -space-x-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPZHMlqB_IoJnTBuSTjY8mn4BzcuTzB3MH-r8amKwSOYQW5FhGzFFVmLECbAw-xskbRRoCAsf8evV7BwXqpsStJzTy46Vuz4IVSM2ayhdXwilYzFkJQpyBFQr_LCYK86Fzx_Fl4jQ9uGbp8kpHklz3xphJ3tpurK7NVmbb11W-p5ktos6o5ImMOsP2aOrrkCnlHY8siFKqAQK9fCV4CpIBPCPS2Ex2SjzAQ30TgMSQXSeisLQS1OzNnZduSV6tD27uTjixYRJ-bN9c"
                  alt="Dr. Sarah"
                  className="w-8 h-8 rounded-full border-2 border-[#2563eb]"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAfIixZAWQchFET3fCdXxH2XtxZ3Nophe4kj3_9NsUXGTP5yOAa6g5Gg4ud7RmCOqQAFrYJyRHc3WaqzubqFk2X6QQcIWkPI8XDVY6M_ypDni8v8o90pwmkEeid9T7GoG5O0ZJ4s-nXL89qViFrTD-XDm1EC3eAUQ9CG_CAAorfnyX9X9-Kl3tGs2SuQe34i6qD8b9EoLm11PNxmyL_chiWK_xmBjL2c88aZhGF9Xe22X_R03ulsTeyTQQG4wB6xgWvaP-uXUCQBz_"
                  alt="Dr. James"
                  className="w-8 h-8 rounded-full border-2 border-[#2563eb]"
                />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANll30GyUHg8056qJX0PYFBIDXqYBrmIVu2skQi8OBKZJ5obLVAkyLymUOcUIjynaAIV79Qdl0wXdPfp1H0aZyIqi2_NQ3J2kwEJKp9LQi9-VSvM-s4TAj3rHqqnaMtcvu9tXcxnmiqEQ0-M5HxZhCq_BX1U29Upq6M2dUQ494qkqvZeGJGCMbJjNXpyXocGFUNBigJzBo5dZkmAcc3VMDCrBbstO7DT0F5HLqHif86BrwzDFCq3L2pOO4B-xhC4rRzu5oCdyBILLk"
                  alt="Dr. Elena"
                  className="w-8 h-8 rounded-full border-2 border-[#2563eb]"
                />
              </div>
              <p className="text-[14px] leading-[20px] italic">
                Trusted by 2,500+ Board Certified Doctors
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center bg-white overflow-y-auto no-scrollbar">
          <div className="md:hidden flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#004ac6]">
              medical_services
            </span>
            <span className="text-xl font-extrabold text-[#004ac6] tracking-tight">
              MedPanel
            </span>
          </div>

          {!showSignup ? (
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="font-manrope text-[24px] leading-[32px] font-semibold text-[#191b23]">
                  Welcome Back, Doctor
                </h2>
                <p className="font-inter text-[16px] leading-[24px] text-[#434655]">
                  Please enter your credentials to access your patient dashboard.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#737686] uppercase block">
                    Email Address
                  </label>
                  <div className="relative">
                    {/* <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] text-xl">
                      mail
                    </span> */}
                    <input
                      type="email"
                      placeholder="doctor@medpanel.com"
                      className="auth-input pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#737686] uppercase">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-[#004ac6] font-medium text-sm hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    {/* <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737686] text-xl">
                      lock
                    </span> */}
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="auth-input pl-10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004ac6] text-white text-[16px] leading-[20px] font-medium py-4 rounded-lg shadow-lg hover:bg-[#2563eb] transition-all active:scale-[0.98]"
                >
                  Login to Dashboard
                </button>
              </form>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#c3c6d7]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#737686]">
                    New to our platform?
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowSignup(true)}
                className="w-full py-3 rounded-lg border border-[#c3c6d7] text-[#191b23] font-medium hover:bg-[#f3f3fe] transition-all"
              >
                Make New Account
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <button
                  onClick={() => setShowSignup(false)}
                  className="flex items-center gap-1 text-[#004ac6] font-medium text-sm mb-4 hover:gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">
                    arrow_back
                  </span>
                  Back to Login
                </button>

                <h2 className="font-manrope text-[24px] leading-[32px] font-semibold text-[#191b23]">
                  Make Your Account
                </h2>
                <p className="font-inter text-[16px] leading-[24px] text-[#434655]">
                  Submit your credentials for verification. Our medical board
                  reviews all applications within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="auth-label">Full Name</label>
                    <input
                      type="text"
                      placeholder="Dr. Jane Doe"
                      className="auth-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="auth-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="auth-label">Professional Email</label>
                  <input
                    type="email"
                    placeholder="j.doe@clinic.com"
                    className="auth-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="auth-label">Specialization</label>
                    <select className="auth-input bg-white">
                      <option>General Practice</option>
                      <option>Cardiology</option>
                      <option>Pediatrics</option>
                      <option>Neurology</option>
                      <option>Psychiatry</option>
                      <option>Dermatology</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="auth-label">Experience (Years)</label>
                    <input type="number" placeholder="5" className="auth-input" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="auth-label">Create Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="auth-input"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="auth-label">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="auth-label">
                    Credentials Upload (PDF/JPG)
                  </label>
                  <div className="border-2 border-dashed border-[#c3c6d7] rounded-xl p-6 text-center hover:bg-[#f3f3fe] transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      multiple
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <span className="material-symbols-outlined text-[#737686] text-3xl mb-2">
                      cloud_upload
                    </span>
                    <p className="text-sm text-[#191b23] font-medium">
                      Click to upload Your Photo
                    </p>
                    <p className="text-[10px] text-[#737686] uppercase mt-1">
                      Maximum 10MB per file
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-[#c3c6d7] text-[#004ac6] focus:ring-[#004ac6]"
                  />
                  <p className="text-sm text-[#434655]">
                    I agree to the{" "}
                    <a href="#" className="text-[#004ac6] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and confirm that all medical credentials provided are valid
                    and active.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004ac6] text-white text-[16px] leading-[20px] font-medium py-4 rounded-lg shadow-lg hover:bg-[#2563eb] transition-all active:scale-[0.98]"
                >
                  Submit Professional Application
                </button>
              </form>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-[#c3c6d7] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#737686] text-sm">
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#004ac6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#004ac6] transition-colors">
                HIPAA Compliance
              </a>
            </div>
            <p>© 2024 MedPanel Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;