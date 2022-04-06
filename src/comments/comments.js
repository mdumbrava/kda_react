import "./comments.css";
import React, { useState } from "react";

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

  return <div className="comments">hi</div>;
};

export default Comments;
