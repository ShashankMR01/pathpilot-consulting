"use client";

import { FormData } from "./types";

interface Step4Props {
  formData: FormData;
}

export default function Step4({
  formData,
}: Step4Props) {

  return (
    <div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-2">
        ✅ Review & Submit
      </h2>

      <p className="text-gray-400 mb-8">
        Please review your information before submitting.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <ReviewCard
          title="Student Name"
          value={formData.studentName}
        />

        <ReviewCard
          title="Mobile Number"
          value={formData.mobileNumber}
        />

        <ReviewCard
          title="WhatsApp"
          value={formData.whatsappNumber}
        />

        <ReviewCard
          title="Email"
          value={formData.email}
        />

        <ReviewCard
          title="Parent Name"
          value={formData.parentName}
        />

        <ReviewCard
          title="Parent Mobile"
          value={formData.parentMobile}
        />

        <ReviewCard
          title="Qualification"
          value={formData.currentQualification}
        />

        <ReviewCard
          title="Passing Year"
          value={formData.passingYear}
        />

        <ReviewCard
          title="Percentage / CGPA"
          value={formData.percentage}
        />

        <ReviewCard
          title="Admission Type"
          value={formData.admissionType}
        />

        <ReviewCard
          title="Preferred Course"
          value={formData.preferredCourse}
        />

        <ReviewCard
          title="Preferred College"
          value={formData.preferredCollege}
        />

        <ReviewCard
          title="Preferred State"
          value={formData.preferredState}
        />

        <ReviewCard
          title="Preferred City"
          value={formData.preferredCity}
        />

        <ReviewCard
          title="Budget"
          value={formData.budgetRange}
        />

        <ReviewCard
          title="Hostel Required"
          value={formData.hostelRequired}
        />

        <ReviewCard
          title="Management Quota"
          value={formData.managementQuota}
        />

        <ReviewCard
          title="Consultation Mode"
          value={formData.consultationMode}
        />

      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold text-yellow-400 mb-3">
          Additional Requirements
        </h3>

        <div className="bg-slate-900 border border-gray-700 rounded-xl p-5 text-gray-300">

          {formData.additionalRequirements || "None"}

        </div>

      </div>

    </div>
  );
}

function ReviewCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (
    <div className="bg-slate-900 border border-gray-700 rounded-xl p-5">

      <p className="text-yellow-400 font-semibold mb-2">
        {title}
      </p>

      <p className="text-white">
        {value || "-"}
      </p>

    </div>
  );
}