import "./comments.css";
import React, { useState, useEffect } from "react";
import Form from "./form";
import UserComments from "./userComments";
import "./form.css";

const Comments = () => {
  const [comments, setComments] = useState([
    { id: "1", name: "Loading...", Comment: "" },
  ]);

  // fetch API

  const callBackendAPI = async (param) => {
    // console.log(param);
    let response = await fetch("/get_commts/" + param);
    let body = await response.json();
    setComments(body);
    // console.log(body);
  };

  // function callBackendAPI() {
  //   fetch("/get_commts")
  //     .then((response) => response.json())
  //     .then((cmtsList) => {
  //       setComments(cmtsList);
  //       // console.log(cmtsList);
  //     });
  // }

  useEffect(() => {
    callBackendAPI(1);
    // setInterval(callBackendAPI, 60000);
  }, []);

  return (
    <div>
      <Form />
      <button
        className="submitComment"
        onClick={() => {
          callBackendAPI(1);
        }}
      >
        Page1
      </button>
      <button
        className="submitComment"
        onClick={() => {
          callBackendAPI(2);
        }}
      >
        Page2
      </button>
      <div>
        {comments.map((cmts) => (
          <UserComments comment={cmts} key={cmts.id} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
