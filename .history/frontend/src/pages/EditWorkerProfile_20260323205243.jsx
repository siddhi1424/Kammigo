import React, { useState } from "react";
import api from "../api/axios";

const EditWorkerProfile = () => {
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [profilepic, setProfilepic] = useState(null);
  const [preview, setPreview] = useState("");
  const [user, setUser] = useState(null);
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");

  const token = localStorage.getItem("token");

  //json cannot accept file so we are using formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("location", location);

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
    console.log(data);

    setUser(data.user); // update UI
    setPreview("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfilepic(file);

            setPreview(URL.createObjectURL(file));
          }}
        />

        <img src={preview || user?.profilePic} alt="profile" width="100" />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditWorkerProfile;
