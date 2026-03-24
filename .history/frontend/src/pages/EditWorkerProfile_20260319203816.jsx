import React from "react";
import { useState } from "react";

const EditWorkerProfile = () => {
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [workImages, setWorkImages] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    try{
        await api.put("/worker-profile/update",{
            experience,
            skills:skills.split(","),
            about,
            profileImage,
            workerImages:workImages.split(",")
        });

        toast.success("Profile updated  🚀")
    }
  };
  return <div></div>;
};

export default EditWorkerProfile;
