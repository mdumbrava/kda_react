import "./comments.css";
import React, { useState, useEffect } from "react";
import Form from "./form";
import UserComments from "./userComments";

const Comments = () => {
  const [comments, setComments] = useState("");
  const [comment, setComment] = useState(comments[0]);
  // fetch API

  const callBackendAPI = async () => {
    let response = await fetch("/api");
    let body = await response.json();
    const data = body.comments;

    console.log(data);
  };

  useEffect(() => {
    console.log("Before Fetch");
    callBackendAPI();
    console.log("After Fetch");
  }, []);

  // console.log(callBackendAPI());
  // callBackendAPI();

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
