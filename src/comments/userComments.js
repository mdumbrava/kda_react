import "./userComments.css";

const UserComments = ({ comment, id }) => {
  return (
    <div>
      <div className="comments">
        <h3 key={id}>{comment.name}</h3>
        <p key={id}>{comment.Comment}</p>
      </div>
    </div>
  );
};
export default UserComments;
