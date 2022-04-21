import "./form.css";

const Form = () => {
  return (
    <div>
      <div className="title">Comments</div> <br />
      <br />
      <div className="form">
        <form action="/apikda/save_commts" method="POST">
          <label>First Name:</label> <br />
          <input className="nameInput" placeholder="Your name.." required name="name"/>
          <br />
          <label>Comment:</label> <br />
          <textarea
            rows="6" 
            cols="123" 
            className="commentInput" 
            placeholder="Your comment.." 
            required  name="comment"/>
          <br />
          <input type="submit" className="submitComment" value="Submit" />
          <br />
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Form;
