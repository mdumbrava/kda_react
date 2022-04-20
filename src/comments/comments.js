import "./comments.css";
import React, { useState, useEffect } from "react";
import Form from "./form";
import UserComments from "./userComments";
import "./form.css";

const Comments = () => {
  const [comments, setComments] = useState([
    { id: "1", name: "Loading...", Comment: "" },
  ]);

  const [page, setPage] = useState(1);
  // fetch API

  const callBackendAPI = async (param) => {
    // console.log(param);
    let response = await fetch("/get_commts/" + param);
    let body = await response.json();
    setComments(body.comments);
    setPage(body.page);
    // console.log(body.page);
    // console.log(body.comments);
  };

  // function callBackendAPI(param) {
  //   fetch("/get_commts/" + param)
  //     .then((response) => response.json())
  //     .then((cmtsList) => {
  //       setComments(cmtsList.comments);
  //       setPage(cmtsList.page);
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

      <div>
        {comments.map((cmts) => (
          <UserComments comment={cmts} key={cmts.id} />
        ))}
      </div>
      <button
        className="submitComment"
        onClick={() => {
          callBackendAPI(parseInt(page) + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default Comments;
