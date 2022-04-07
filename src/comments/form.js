import "./form.css";

const Form = () => {
  return (
    <div>
      <div className="title">Comments</div> <br />
      <br />
      <div className="form">
        <form action="">
          <label>First Name:</label> <br />
          <input className="nameInput" placeholder="Your name.." />
          <br />
          <label>Comment:</label> <br />
          <textarea
            rows="6"
            cols="123"
            className="commentInput"
            placeholder="Your comment.."
          />
          <br />
          <input type="button" className="submitComment" value="Submit" />
          <br />
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Form;
