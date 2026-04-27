import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const DoctorRegister = () => {
    const navigate=useNavigate()

     const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verificationpending");
  };
  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#191b23]">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <nav className="flex items-center justify-between px-6 py-3 max-w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">
              medical_services
            </span>
            <span className="text-xl font-bold tracking-tight text-blue-600">
              MedPro Panel
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-blue-700 font-semibold transition-colors duration-200 active:scale-95"
            >
              Log In
            </Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Welcome Section */}
            <div className="lg:col-span-5 space-y-4 lg:pr-8">
              <div className="inline-flex items-center px-4 py-1 bg-[#dbe1ff] text-[#00174b] rounded-full mb-4">
                <span className="material-symbols-outlined text-sm mr-1">
                  verified
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Doctor Onboarding
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[36px] leading-tight font-bold text-[#191b23]">
                Join the next generation of healthcare delivery.
              </h1>

              <p className="text-base sm:text-lg leading-7 text-[#434655] max-w-md">
                MedPro Panel empowers clinicians with advanced diagnostic tools,
                seamless telemedicine integration, and an intuitive practice
                management suite.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6bff8f] flex items-center justify-center text-[#007432]">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-7 font-semibold text-[#191b23]">
                      Instant Credentialing
                    </h3>
                    <p className="text-sm leading-5 text-[#434655]">
                      Our automated system speeds up the verification process by
                      up to 60%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6bff8f] flex items-center justify-center text-[#007432]">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] leading-7 font-semibold text-[#191b23]">
                      Peer Collaboration
                    </h3>
                    <p className="text-sm leading-5 text-[#434655]">
                      Access a network of 5,000+ specialists for real-time
                      second opinions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(15,23,42,0.05)] h-64 lg:h-80">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8FLodUWclYRKytUIjjqX-pLqhTxLG144xq2K5-58cjiXv5WNK_BjPyCzSM2igQ3n6g_o0V-zfDgg5dUTPW0Vt7DFrK-4REU7sr9syHSoFpuKr6NlLcCXjvZw6U3_nhg5iiSGHHbj93DuvDSYuO8yfxwUF-ir6FCDAkOJYtCym2XYm0ySFvBTISta-6cJZAhyKA3pPD-fxVxgsBc7kIvGRinqvulFdNb2OPU4hk9h2LeFVjTsNCjtKzJbzPtEPQIQPwXQ7HlU9yrnl"
                  alt="Professional Doctor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-700/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">MedPro Elite Member</p>
                  <p className="text-xl font-semibold">Dr. Sarah Thompson, MD</p>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white shadow-[0px_4px_12px_rgba(15,23,42,0.05)] rounded-xl p-4 sm:p-6 border border-slate-100">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-[24px] leading-8 font-semibold text-[#191b23]">
                    Practitioner Registration
                  </h2>
                  <p className="text-sm text-[#434655] mt-1">
                    Please provide your professional credentials to begin your
                    application.
                  </p>
                </div>

                <form className="space-y-8">
                  {/* Personal & Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#004ac6] border-b border-slate-100 pb-2 mb-4">
                      Personal & Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Dr. John Doe"
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john.doe@medical.com"
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Languages Spoken
                        </label>
                        <input
                          type="text"
                          placeholder="English, Spanish, etc."
                          className="reg-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Credentials */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#004ac6] border-b border-slate-100 pb-2 mb-4">
                      Professional Credentials
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Specialization
                        </label>
                        <select className="reg-input bg-white">
                          <option value="">Select Specialty</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="general">General Medicine</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="neurology">Neurology</option>
                          <option value="dermatology">Dermatology</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Highest Degree
                        </label>
                        <input
                          type="text"
                          placeholder="MD, DO, PhD, etc."
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Experience (Years)
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 8"
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Consultation Fee ($)
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 150"
                          className="reg-input"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                        Bio / About
                      </label>
                      <textarea
                        placeholder="Brief professional biography and expertise description..."
                        className="reg-input min-h-[128px] resize-none p-4 h-32"
                      ></textarea>
                    </div>
                  </div>

                  {/* Practice Location */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#004ac6] border-b border-slate-100 pb-2 mb-4">
                      Practice Location
                    </h3>

                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Clinic / Hospital Name
                        </label>
                        <input
                          type="text"
                          placeholder="City Medical Center"
                          className="reg-input"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                          Practice Address
                        </label>
                        <input
                          type="text"
                          placeholder="123 Medical Way, Suite 400, City, State, ZIP"
                          className="reg-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="reg-input"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#434655] block">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="reg-input"
                      />
                    </div>
                  </div>

                  {/* Upload Sections */}
                  <div className="space-y-4 border-t border-slate-100 pt-6">
                    <h3 className="text-base font-semibold text-[#191b23]">
                      Credential Verification
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative border-2 border-dashed border-[#c3c6d7] rounded-xl p-6 flex flex-col items-center justify-center bg-[#f3f3fe] hover:border-[#004ac6] transition-colors cursor-pointer text-center min-h-[140px]">
                        <span className="material-symbols-outlined text-slate-400 mb-2">
                          badge
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#191b23]">
                          Medical License
                        </span>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                          PDF, JPG up to 10MB
                        </p>
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>

                      <div className="relative border-2 border-dashed border-[#c3c6d7] rounded-xl p-6 flex flex-col items-center justify-center bg-[#f3f3fe] hover:border-[#004ac6] transition-colors cursor-pointer text-center min-h-[140px]">
                        <span className="material-symbols-outlined text-slate-400 mb-2">
                          cloud_upload
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#191b23]">
                          Additional Documents
                        </span>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                          Certificates, Resume
                        </p>
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-4 pt-4">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 rounded border-[#c3c6d7] text-[#004ac6] focus:ring-[#004ac6]"
                    />
                    <p className="text-sm text-[#434655]">
                      I agree to the{" "}
                      <a href="#" className="text-[#004ac6] hover:underline">
                        Terms of Service
                      </a>{" "}
                      and confirm that all medical credentials provided are
                      authentic and currently valid.
                    </p>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <button onClick={handleSubmit}
                      
                      className="w-full bg-[#2563eb] text-white h-14 rounded-xl text-lg font-medium hover:brightness-110 active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined">send</span>
                      Submit Application
                    </button>

                    <p className="text-center mt-4 text-sm text-[#434655]">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-[#004ac6] font-semibold hover:underline"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-auto bg-slate-50 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">
              health_and_safety
            </span>
            <span className="font-bold text-slate-900">
              MedPro Telemedicine Systems
            </span>
          </div>

          <p className="text-slate-500">
            © 2024 MedPro Telemedicine Systems. All rights reserved.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-all"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 transition-all"
            >
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorRegister;