"use client";

import { FormData } from "./types";

interface Step1Props {
  formData: FormData;
  updateForm: (
    field: keyof FormData,
    value: string
  ) => void;
}

export default function Step1({
  formData,
  updateForm,
}: Step1Props) {
  return (
    <div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-2">
        👤 Personal Information
      </h2>

      <p className="text-gray-400 mb-8">
        Please enter your basic details.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Student Name *"
          value={formData.studentName}
          onChange={(e) =>
            updateForm("studentName", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="tel"
          placeholder="Mobile Number *"
          value={formData.mobileNumber}
          onChange={(e) =>
            updateForm("mobileNumber", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={(e) =>
            updateForm("whatsappNumber", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            updateForm("email", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Parent / Guardian Name"
          value={formData.parentName}
          onChange={(e) =>
            updateForm("parentName", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

        <input
          type="tel"
          placeholder="Parent / Guardian Mobile"
          value={formData.parentMobile}
          onChange={(e) =>
            updateForm("parentMobile", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        />

      </div>

    </div>
  );
}