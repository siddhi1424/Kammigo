import React, { useState, useEffect } from "react";
import api from "../api/axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const [profilepic, setProfilepic] = useState(null);
  const [preview, setPreview] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      const fullUser = {
        ...data.user,
        workerProfile: data.workerProfile,
      };

      setUser(fullUser);

      setName(fullUser.name || "");
      setLocation(fullUser.location || "");
      setAbout(fullUser.workerProfile?.about || "");
      setExperience(fullUser.workerProfile?.experience || "");
      setSkills(fullUser.workerProfile?.skills?.join(",") || "");
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("experience", experience);
    formData.append("skills", skills);

    if (profilepic) {
      formData.append("profilepic", profilepic);
    }

    const res = await fetch("http://localhost:5000/api/user/update", {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();

    setUser({
      ...data.user,
      workerProfile: data.workerProfile,
    });

    setEditMode(false);
    setPreview("");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-white-400 flex justify-center items-start py-20 ">
      {/* MAIN CARD */}
      <div className="w-full max-w-sm md:max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* 🔥 HEADER (LinkedIn style) */}
        <div className="flex items-center gap-6">
          <img
            src={user.profilepic}
            className="w-20 h-20 md:w-28 md:h-28 lg:max-w-5xl xl:max-w-7xl lg:w-32 lg:h-32 rounded-full border-4 border-cyan-400 object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.location}</p>

            <button
              onClick={() => setEditMode(true)}
              className="mt-2 px-4 py-1 bg-cyan-500 text-white rounded-lg"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        {!editMode ? (
          <div className="mt-6 space-y-6">
            {/* About */}
            <div>
              <h2 className="text-lg font-semibold text-cyan-600">About</h2>
              <p className="text-gray-700 mt-1">
                {user.workerProfile?.about || "No info"}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-lg font-semibold text-cyan-600">
                Experience
              </h2>
              <p className="text-gray-700 mt-1">
                {user.workerProfile?.experience || "No experience"}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-semibold text-cyan-600">Skills</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.workerProfile?.skills?.map((s, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /*  EDIT FORM */
          <form
            onSubmit={handleSubmit}
            className="mt-6 bg-white p-6 rounded-xl shadow-md space-y-5"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Edit Profile
            </h2>

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-sm text-gray-600">Location</label>
              <input
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your location"
              />
            </div>

            {/* About */}
            <div>
              <label className="text-sm text-gray-600">About</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Tell about yourself"
                rows="3"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="text-sm text-gray-600">Experience</label>
              <input
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="e.g. 2 years"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="text-sm text-gray-600">Skills</label>
              <input
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="comma separated (plumbing,electrician)"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="text-sm text-gray-600">Profile Photo</label>
              <input
                type="file"
                className="mt-2 w-full text-sm"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setProfilepic(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />
            </div>

            {/* Preview */}
            <div className="flex justify-center">
              <img
                src={preview || user.profilepic}
                className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold transition"
              >
                Save
              </button>

              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
