import "./comments.css";
import React, { useState } from "react";

const Comments = () => {
  const [title, setTitle] = useState(null);
  // fetch API
  const callBackendAPI = async () => {
    // const response = await fetch("http://localhost:9000/api");
    let response = await fetch("/api");
    let body = await response.text();
    // console.log("Showing API:");
    setTitle(body);
    console.log(body);
  };

  // console.log(callBackendAPI());
  callBackendAPI();

  return <div className="comments">{title}</div>;
};

export default Comments;
