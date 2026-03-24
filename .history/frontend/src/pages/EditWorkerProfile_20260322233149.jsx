import React, { useState } from "react";
import api from "../api/axios";

const EditWorkerProfile = () => {
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [preview, setPreview] = useState("");

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
    const res = await fetch("/api/user/update", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          e.target.files[0];
          setProfilepic(file);

          //preview
          setPreview(URL.createObjectURL(file));
        }}
      ></input>
      <img src={preview || user.profilepic} alt="profile" width="100"></img>
    </div>
  );
};

export default EditWorkerProfile;
