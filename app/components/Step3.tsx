"use client";

import { FormData } from "./types";
import { admissionCourses } from "./courseData";

interface Step3Props {
  formData: FormData;
  updateForm: (
    field: keyof FormData,
    value: string
  ) => void;
}

export default function Step3({
  formData,
  updateForm,
}: Step3Props) {

  const courses =
    admissionCourses[
      formData.admissionType as keyof typeof admissionCourses
    ] || [];

  return (
    <div>

      <h2 className="text-4xl font-bold text-yellow-400 mb-2">
        🎓 Admission Preferences
      </h2>
      <p className="text-red-500 text-lg">
  Selected: {formData.admissionType}
</p>

      <p className="text-gray-400 mb-8">
        Select your admission preferences.
      </p>

      <div className="grid md:grid-cols-2 gap-5"><select
  value={formData.admissionType}
  onChange={(e) => {
    updateForm("admissionType", e.target.value);
    updateForm("preferredCourse", "");
  }}
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
>
  <option value="">Select Admission Type *</option>

  <option>PU Admission</option>

  <option>Engineering Admission</option>

  <option>BBA Admission</option>

  <option>BCA Admission</option>

  <option>B.Com Admission</option>

  <option>B.Sc Admission</option>

  <option>BA Admission</option>

  <option>MBA Admission</option>

  <option>MCA Admission</option>

  <option>M.Tech Admission</option>

  <option>Medical Admission</option>

  <option>Law Admission</option>

  <option>Diploma Admission</option>

  <option>Study Abroad</option>

  <option>Career Counseling</option>

  <option>Other</option>

</select>
<select
  value={formData.preferredCourse}
  onChange={(e) =>
    updateForm("preferredCourse", e.target.value)
  }
  disabled={!formData.admissionType}
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
>
  <option value="">
  {formData.admissionType
    ? "Select Preferred Course *"
    : "Select Admission Type First"}
</option>
  {courses.map((course) => (
    <option
      key={course}
      value={course}
    >
      {course}
    </option>
  ))}

</select>
<input
  type="text"
  placeholder="Preferred College (Optional)"
  value={formData.preferredCollege}
  onChange={(e) =>
    updateForm("preferredCollege", e.target.value)
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
/>
<select
  value={formData.preferredState}
  onChange={(e) =>
    updateForm("preferredState", e.target.value)
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
>
  <option value="">Preferred State *</option>

  <option>Andhra Pradesh</option>
  <option>Arunachal Pradesh</option>
  <option>Assam</option>
  <option>Bihar</option>
  <option>Chhattisgarh</option>
  <option>Goa</option>
  <option>Gujarat</option>
  <option>Haryana</option>
  <option>Himachal Pradesh</option>
  <option>Jharkhand</option>
  <option>Karnataka</option>
  <option>Kerala</option>
  <option>Madhya Pradesh</option>
  <option>Maharashtra</option>
  <option>Manipur</option>
  <option>Meghalaya</option>
  <option>Mizoram</option>
  <option>Nagaland</option>
  <option>Odisha</option>
  <option>Punjab</option>
  <option>Rajasthan</option>
  <option>Sikkim</option>
  <option>Tamil Nadu</option>
  <option>Telangana</option>
  <option>Tripura</option>
  <option>Uttar Pradesh</option>
  <option>Uttarakhand</option>
  <option>West Bengal</option>

  <option>Delhi</option>
  <option>Jammu & Kashmir</option>
  <option>Ladakh</option>
  <option>Puducherry</option>
  <option>Chandigarh</option>
  <option>Andaman & Nicobar Islands</option>
  <option>Dadra & Nagar Haveli and Daman & Diu</option>
  <option>Lakshadweep</option>
</select>

<input
  type="text"
  placeholder="Preferred City"
  value={formData.preferredCity}
  onChange={(e) =>
    updateForm("preferredCity", e.target.value)
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none"
/>

<select
  value={formData.budgetRange}
  onChange={(e) =>
    updateForm("budgetRange", e.target.value)
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
>
  <option value="">Budget Range *</option>

  <option>Below ₹2 Lakhs</option>
  <option>₹2 – ₹5 Lakhs</option>
  <option>₹5 – ₹10 Lakhs</option>
  <option>₹10 – ₹15 Lakhs</option>
  <option>Above ₹15 Lakhs</option>
  <option>Need Guidance</option>
</select>
<div className="md:col-span-2">

  <label className="block text-yellow-400 font-semibold mb-3">
    Hostel Required?
  </label>

  <div className="flex gap-6">

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={formData.hostelRequired === "Yes"}
        onChange={() =>
          updateForm("hostelRequired", "Yes")
        }
      />
      Yes
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={formData.hostelRequired === "No"}
        onChange={() =>
          updateForm("hostelRequired", "No")
        }
      />
      No
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={formData.hostelRequired === "Not Sure"}
        onChange={() =>
          updateForm("hostelRequired", "Not Sure")
        }
      />
      Not Sure
    </label>

  </div>

</div>
<div className="md:col-span-2">

  <label className="block text-yellow-400 font-semibold mb-3">
    Management Quota Required?
  </label>

  <div className="flex gap-6">

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={formData.managementQuota === "Yes"}
        onChange={() =>
          updateForm("managementQuota", "Yes")
        }
      />
      Yes
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={formData.managementQuota === "No"}
        onChange={() =>
          updateForm("managementQuota", "No")
        }
      />
      No
    </label>

    <label className="flex items-center gap-2">
      <input
        type="radio"
        checked={
          formData.managementQuota ===
          "Need Guidance"
        }
        onChange={() =>
          updateForm(
            "managementQuota",
            "Need Guidance"
          )
        }
      />
      Need Guidance
    </label>

  </div>

</div>
<select
  value={formData.consultationMode}
  onChange={(e) =>
    updateForm("consultationMode", e.target.value)
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
>

  <option value="">
    Preferred Consultation Mode
  </option>

  <option>WhatsApp Call</option>

  <option>Phone Call</option>

  <option>Google Meet</option>

  <option>No Preference</option>

</select>
<textarea
  rows={5}
  placeholder="Additional Requirements (Optional)"
  value={formData.additionalRequirements}
  onChange={(e) =>
    updateForm(
      "additionalRequirements",
      e.target.value
    )
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
/><textarea
  rows={5}
  placeholder="Additional Requirements (Optional)"
  value={formData.additionalRequirements}
  onChange={(e) =>
    updateForm(
      "additionalRequirements",
      e.target.value
    )
  }
  className="bg-slate-900 border border-gray-700 rounded-xl p-4 text-white focus:border-yellow-500 focus:outline-none md:col-span-2"
/>
      </div>
</div>
  );
}
