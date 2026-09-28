"use client";

import { FormData } from "./types";

interface Step2Props {
  formData: FormData;
  updateForm: (
    field: keyof FormData,
    value: string
  ) => void;
}

export default function Step2({
  formData,
  updateForm,
}: Step2Props) {

  const years = Array.from(
    { length: 18 },
    (_, i) => new Date().getFullYear() - i
  );

  return (
    <div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-2">
        🎓 Academic Information
      </h2>

      <p className="text-gray-400 mb-8">
        Tell us about your educational background.
      </p>

      <div className="grid md:grid-cols-2 gap-5">

        <select
          value={formData.currentQualification}
          onChange={(e) =>
            updateForm("currentQualification", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        >
          <option value="">
            Highest Qualification Completed *
          </option>

          <option>10th</option>
          <option>PUC / 12th</option>
          <option>Diploma</option>
          <option>BE</option>
          <option>BTech</option>
          <option>BCA</option>
          <option>BBA</option>
          <option>B.Com</option>
          <option>B.Sc</option>
          <option>BA</option>
          <option>MBA</option>
          <option>MCA</option>
          <option>MTech</option>
          <option>M.Com</option>
          <option>M.Sc</option>
          <option>Other</option>

        </select>

        <select
          value={formData.passingYear}
          onChange={(e) =>
            updateForm("passingYear", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
        >

          <option value="">Passing Year *</option>

          {years.map((year) => (
            <option
              key={year}
              value={year}
            >
              {year}
            </option>
          ))}

        </select>

        <input
          type="text"
          placeholder="Percentage / CGPA (Optional)"
          value={formData.percentage}
          onChange={(e) =>
            updateForm("percentage", e.target.value)
          }
          className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
        />

      </div>

    </div>
  );
}