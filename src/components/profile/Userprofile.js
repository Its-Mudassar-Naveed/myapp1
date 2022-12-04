import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/Data";
import { ProfileData } from "../../Data/Profile";

const Userprofile = () => {
  const { userId } = useParams();
  const [profileInfo, setprofileInfo] = useState("");
  useEffect(() => {
    setprofileInfo(ProfileData.find((user) => user.userId === userId));
  }, [userId]);
  console.log(profileInfo);
  return (
    <>
      <div>{profileInfo.Username}</div>
    </>
  );
};

export default Userprofile;
