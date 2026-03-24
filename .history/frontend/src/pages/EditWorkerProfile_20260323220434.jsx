import React, { useState, useEffect } from "react";

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
      const res = await fetch("http://localhost:5000/api/user/me", {
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-white-400 flex justify-center ">
      {/* MAIN CARD */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* 🔥 HEADER (LinkedIn style) */}
        <div className="flex items-center gap-6">
          <img
            src={user.profilepic}
            className="w-28 h-28 rounded-full border-4 border-cyan-400 object-cover"
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
          /* 🔥 EDIT FORM */
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <textarea
              className="input"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <input
              className="input"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <input
              className="input"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setProfilepic(file);
                setPreview(URL.createObjectURL(file));
              }}
            />

            <img
              src={preview || user.profilepic}
              className="w-20 h-20 rounded-full"
            />

            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
