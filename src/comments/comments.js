import "./comments.css";
import React, { useState } from "react";
import Form from "./form";
import UserComments from "./userComments";

const Comments = () => {
  const [title, setTitle] = useState(null);
  // fetch API
  const callBackendAPI = async () => {
    let response = await fetch("/api");
    let body = await response.json();
    setTitle(body);
    console.log(body.comments);
  };

  // console.log(callBackendAPI());
  callBackendAPI();

  return (
    <div>
      <Form />
      <UserComments />
      <UserComments />
      <UserComments />
    </div>
  );
};

export default Comments;
