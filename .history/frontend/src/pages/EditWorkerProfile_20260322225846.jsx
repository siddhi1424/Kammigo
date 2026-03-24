import React, { useState } from "react";

const EditWorkerProfile = () => {
  const [name, setName] = useState("");
  const [location, setlocation] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [preview, setPreview] = useState("");
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
