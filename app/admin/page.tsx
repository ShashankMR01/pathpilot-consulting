"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbypr9LnhoIJ7hm8kqaxJJeZ_aEX1rSIazB87kZ6xr_e4xg-9Msob1KSiOafb9CMm7p1hg/exec"
    )
      .then((res) => res.json())
      .then((data) => setLeads(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredLeads = leads.filter((lead) => {
  const studentName = String(lead.studentName ?? "").toLowerCase();
  const mobileNumber = String(lead.mobileNumber ?? "");
  const preferredCourse = String(lead.preferredCourse ?? "").toLowerCase();

  const searchText = search.toLowerCase();

  return (
    studentName.includes(searchText) ||
    mobileNumber.includes(searchText) ||
    preferredCourse.includes(searchText)
  );
});

  const deleteLead = (index: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    const updatedLeads = [...leads];

    updatedLeads.splice(index, 1);

    setLeads(updatedLeads);
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-yellow-400 mb-10">
        📊 PathPilot Admin Dashboard
      </h1>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-10">

        <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6">
          <p className="text-gray-400">Total Leads</p>

          <h2 className="text-4xl font-bold text-yellow-400">
            {leads.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-blue-500 rounded-xl p-6">
          <p className="text-gray-400">Today's Leads</p>

          <h2 className="text-4xl font-bold text-blue-400">
            {leads.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-green-500 rounded-xl p-6">
          <p className="text-gray-400">New Leads</p>

          <h2 className="text-4xl font-bold text-green-400">
            0
          </h2>
        </div>

        <div className="bg-slate-900 border border-orange-500 rounded-xl p-6">
          <p className="text-gray-400">Contacted</p>

          <h2 className="text-4xl font-bold text-orange-400">
            0
          </h2>
        </div>

        <div className="bg-slate-900 border border-purple-500 rounded-xl p-6">
          <p className="text-gray-400">Admitted</p>

          <h2 className="text-4xl font-bold text-purple-400">
            0
          </h2>
        </div>

      </div>

      {/* Search */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="🔍 Search Student, Mobile or Course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-yellow-500 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-400"
        />

      </div>

      {/* Leads Table */}

      <div className="bg-slate-900 border border-yellow-500 rounded-xl p-6 overflow-x-auto">

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Student Leads
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-gray-700">

              <th className="text-left p-4">
                Student
              </th>

              <th className="text-left p-4">
                Mobile
              </th>

              <th className="text-left p-4">
                Course
              </th>

              <th className="text-left p-4">
                Admission Type
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>           
             {filteredLeads.map((lead, index) => (
              <tr
                key={index}
                className="border-b border-gray-800 hover:bg-slate-800 transition"
              >
                <td className="p-4 font-semibold">
                  {lead.studentName}
                </td>

                <td className="p-4">
                  {lead.mobileNumber}
                </td>

                <td className="p-4">
                  {lead.preferredCourse}
                </td>

                <td className="p-4">
                  {lead.admissionType}
                </td>

                <td className="p-4">
                  <select
                    defaultValue="New"
                    className="bg-slate-800 border border-yellow-500 rounded-lg px-3 py-2 text-white"
                  >
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Admitted</option>
                    <option>Rejected</option>
                  </select>
                </td>

                <td className="p-4">

                  <button
                    onClick={() => deleteLead(index)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
                  >
                    🗑 Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

        {filteredLeads.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No leads found.
          </div>
        )}

      </div>

    </main>
  );
}