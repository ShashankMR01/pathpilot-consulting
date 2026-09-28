"use client";

import { useState } from "react";
import { FormData } from "./types";
import ProgressBar from "./ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import SuccessCard from "./SuccessCard";
console.log("ProgressBar import:", ProgressBar);

const initialFormData: FormData = {
  studentName: "",
  mobileNumber: "",
  whatsappNumber: "",
  email: "",

  parentName: "",
  parentMobile: "",

  currentQualification: "",
  passingYear: "",
  percentage: "",

  admissionType: "",
  preferredCourse: "",

  preferredCollege: "",

  preferredState: "",
  preferredCity: "",

  budgetRange: "",

  hostelRequired: "",
  managementQuota: "",

  consultationMode: "",

  additionalRequirements: "",
};

export default function AdmissionForm() {
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const updateForm = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxwQKCSQ_KOmaDfnRl04p9D8BumHM6VneZvzc2CxpKkEerxmo2H5qz3aUwvSeX23p6yeA/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      setSubmitted(true);

      setFormData(initialFormData);

    } catch (err) {
      alert("Submission Failed");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <SuccessCard
        onNewApplication={() => {
          setSubmitted(false);
          setStep(1);
        }}
      />
    );
  }

  return (
    <section className="py-20 px-6 bg-black">

      <div className="max-w-5xl mx-auto bg-slate-950 border border-yellow-500 rounded-3xl p-10 shadow-2xl">

        <ProgressBar
          step={step}
          totalSteps={4}
        />

        {step === 1 && (
  <Step1
    formData={formData}
    updateForm={updateForm}
  />
)}

{step === 2 && (
  <Step2
    formData={formData}
    updateForm={updateForm}
  />
)}

{step === 3 && (
  <Step3
    formData={formData}
    updateForm={updateForm}
  />
)}

{step === 4 && (
  <Step4
    formData={formData}
  />
)}
        <div className="flex justify-between mt-10">

          {step > 1 ? (
            <button
              onClick={previousStep}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-xl"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl"
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>
          )}

        </div>

      </div>

    </section>
  );
}