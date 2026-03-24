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
  };
  return <div></div>;
};

export default EditWorkerProfile;
