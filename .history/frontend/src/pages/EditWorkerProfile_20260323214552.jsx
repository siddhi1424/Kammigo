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
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  // 🔥 GET PROFILE (IMPORTANT)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
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

        // 🔥 auto-fill form
        setName(fullUser.name || "");
        setLocation(fullUser.location || "");
        setAbout(fullUser.workerProfile?.about || "");
        setExperience(fullUser.workerProfile?.experience || "");
        setSkills(fullUser.workerProfile?.skills?.join(",") || "");
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  // 🔥 UPDATE PROFILE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("experience", experience);
    formData.append("skills", skills);

    if (profilepic) {
      formData.append("profilepic", profilepic); // 🔥 small p
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      const updatedUser = {
        ...data.user,
        workerProfile: data.workerProfile,
      };

      setUser(updatedUser);
      setPreview("");
      setEditMode(false);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {/*  VIEW MODE */}
      {!editMode && (
        <div style={{ textAlign: "center" }}>
          <img
            src={user.profilepic}
            alt="profile"
            width="120"
            style={{ borderRadius: "50%" }}
          />

          <h2>{user.name}</h2>
          <p>{user.location}</p>

          <p>
            <b>About:</b> {user.about}
          </p>
          <p>
            <b>Experience:</b> {user.workerProfile?.experience}
          </p>

          <div>
            {user.workerProfile?.skills?.map((s, i) => (
              <span key={i} style={{ marginRight: "10px" }}>
                #{s}
              </span>
            ))}
          </div>

          <br />

          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}

      {/*  EDIT MODE */}
      {editMode && (
        <form onSubmit={handleSubmit}>
          <h3>Edit Profile</h3>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <br />

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />

          <br />

          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About"
          />

          <br />

          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience"
          />

          <br />

          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills (comma separated)"
          />

          <br />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setProfilepic(file);
              setPreview(URL.createObjectURL(file));
            }}
          />

          <br />

          <img src={preview || user.profilepic} width="100" alt="preview" />

          <br />

          <button type="submit">{loading ? "Updating..." : "Save"}</button>

          <button type="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfilePage;
