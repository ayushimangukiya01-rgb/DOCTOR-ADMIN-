import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DoctorSignup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100 px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-[1.1fr,1.4fr]">
        
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-sky-600 to-cyan-500 text-white p-12">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold opacity-90">
            Join as Doctor
          </p>
          <h1 className="text-5xl font-bold leading-tight mt-4">
            Create your <br /> doctor account
          </h1>
          <p className="mt-6 text-lg text-sky-100 leading-8 max-w-md">
            Register your profile, upload your details, and get ready to manage
            appointments and patient consultations.
          </p>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">
              Doctor Sign Up
            </h2>
            <p className="text-gray-500 mt-2 text-center lg:text-left">
              Fill the details below to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />
            <input
              type="text"
              placeholder="Mobile number"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />
            <input
              type="text"
              placeholder="Specialization"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />
            <input
              type="text"
              placeholder="Degree"
              className="border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none focus:bg-white focus:border-sky-500 transition"
            />

            {/* <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload document
              </label>
              <input
                type="file"
                className="w-full border border-gray-200 bg-gray-50 rounded-2xl px-5 py-4 outline-none"
              />
            </div> */}

            <div className="md:col-span-2 mt-2">
              <button className="w-full bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.01] transition">
                Register
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-sky-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;