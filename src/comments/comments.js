import "./comments.css";
import React, { useState, useEffect } from "react";
import Form from "./form";
import UserComments from "./userComments";

const Comments = () => {
  const [comments, setComments] = useState([
    { id: "1", name: "Error Getting Comments", Comment: "Try Again Later" },
  ]);

  // fetch API

  const callBackendAPI = async () => {
    let response = await fetch("/get_commts");
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
    callBackendAPI();
  }, []);

  return (
    <div>
      <Form />
      <div>
        {comments.map((cmts) => (
          <UserComments comment={cmts} key={cmts.id} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
