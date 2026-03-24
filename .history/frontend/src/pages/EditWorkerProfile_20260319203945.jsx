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

    try {
      await api.put("/worker-profile/update", {
        experience,
        skills: skills.split(","),
        about,
        profileImage,
        workerImages: workImages.split(","),
      });

      toast.success("Profile updated  🚀");
    } catch (err) {
      toast.error("Update failed");
      console.log(err);
    }
  };
  return (
    <div>
      <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-10">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">
          Enhance Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Experience (e.g. 3 years in plumbing)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="About yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Profile Image URL"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Work Images URLs (comma separated)"
            value={workImages}
            onChange={(e) => setWorkImages(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-cyan-600 text-white py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditWorkerProfile;
