import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const [profilepic, setProfilepic] = useState(null);
  const [preview, setPreview] = useState("");

  const [editMode, setEditMode] = useState(false);

  const token = localStorage.getItem("token");

  // 🔥 Fetch profile
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

  // 🔥 Update profile
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
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-white flex justify-center items-start py-10 ">
      {!editMode ? (
        <div className="bg-white mt-20 shadow-xl rounded-2xl p-6 w-[350px] text-center">
          {/* Profile Image */}
          <img
            src={user.profilepic}
            alt="profile"
            className="w-28 h-28 rounded-full mx-auto border-4 border-cyan-400 object-cover"
          />

          {/* Name */}
          <h2 className="text-xl font-bold mt-3">{user.name}</h2>
          <p className="text-gray-500">{user.location}</p>

          {/* About */}
          <div className="mt-4 text-left">
            <h4 className="text-cyan-600 font-semibold">About</h4>
            <p className="text-gray-700 text-sm">{user.workerProfile?.about}</p>
          </div>

          {/* Experience */}
          <div className="mt-3 text-left">
            <h4 className="text-cyan-600 font-semibold">Experience</h4>
            <p className="text-gray-700 text-sm">
              {user.workerProfile?.experience}
            </p>
          </div>

          {/* Skills */}
          <div className="mt-3 text-left">
            <h4 className="text-cyan-600 font-semibold">Skills</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {user.workerProfile?.skills?.map((s, i) => (
                <span
                  key={i}
                  className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setEditMode(true)}
            className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg font-semibold"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-6 w-[350px]"
        >
          <h3 className="text-lg font-bold mb-3 text-center">Edit Profile</h3>

          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <input
            className="input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          <textarea
            className="input"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About"
          />

          <input
            className="input"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience"
          />

          <input
            className="input"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills (comma separated)"
          />

          <input
            type="file"
            accept="image/*"
            className="mt-3"
            onChange={(e) => {
              const file = e.target.files[0];
              setProfilepic(file);
              setPreview(URL.createObjectURL(file));
            }}
          />

          <img
            src={preview || user.profilepic}
            className="w-20 h-20 rounded-full mt-3 mx-auto object-cover"
          />

          <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-lg">
            Save
          </button>

          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="mt-2 w-full bg-gray-400 text-white py-2 rounded-lg"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
