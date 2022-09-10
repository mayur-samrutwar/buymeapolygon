import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {

  const params = useParams();

  return params.creatorId;
}

export default ProfilePage;