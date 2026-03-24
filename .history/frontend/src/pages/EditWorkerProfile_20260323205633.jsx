import React, { useState } from "react";

const EditWorkerProfile = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState("");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("name", name);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("experience", experience);
    formData.append("skills", skills);

    if (profilePic) {
      formData.append("profilePic", profilePic);
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

      //  combine user + workerProfile
      setUser({
        ...data.user,
        workerProfile: data.workerProfile,
      });

      setMessage("Profile updated successfully ✅");
      setPreview("");
    } catch (error) {
      console.log(error);
      setMessage("Update failed ❌");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Profile</h2>

      {/*  FORM */}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        {/* Location */}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <br />

        {/* About */}
        <textarea
          placeholder="About yourself"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <br />

        {/* Experience */}
        <input
          type="text"
          placeholder="Experience (e.g. 2 years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <br />

        {/* Skills */}
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <br />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfilePic(file);

            setPreview(URL.createObjectURL(file));
          }}
        />

        <br />

        {/* Image Preview */}
        <img
          src={preview || user?.profilePic}
          alt="profile"
          width="120"
          style={{ borderRadius: "50%", marginTop: "10px" }}
        />

        <br />

        {/* Submit */}
        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>

      {/* MESSAGE */}
      {message && <p>{message}</p>}

      {/* PROFILE DISPLAY */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>Profile Preview</h3>

          <img
            src={user.profilePic}
            alt="profile"
            width="120"
            style={{ borderRadius: "50%" }}
          />

          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Location:</b> {user.location}
          </p>

          <p>
            <b>About:</b> {user.workerProfile?.about}
          </p>
          <p>
            <b>Experience:</b> {user.workerProfile?.experience}
          </p>

          <p>
            <b>Skills:</b>
          </p>
          <ul>
            {user.workerProfile?.skills?.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditWorkerProfile;
