import "../Css/Girlspages.css";
import Ahri_img from "../images/Ahri.jpg";

const Ahri = () => {
  return (
    <div>
      <div className="title">Welcome to Ahri's Page</div> <br />
      <div className="img_div">
        <img className="img_girls" src={Ahri_img} alt="Ahri" />
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is Ahri?</div>
      <div className="text">
        <p>
          Setting her old bubblegum pop persona aside, Ahri was determined to
          shake up her image and reinvent herself as an unstoppable force within
          the music industry. Five years later, she has returned with a sleek
          new look and a killer sound—and this time she's not alone for
          Popstars. <br />
          <br />
          When Ahri returns onto the stage to perform with K/DA their new song,
          she knows she's surrounded by the best of the best—different girls
          with different personalities, all at the top of their craft. As their
          leader and as their friend, Ahri is poised to guide these divas to
          even greater heights and leave their audiences breathless for more.
        </p>
      </div>
      <br />
      <br />
      <div className="video"></div>
    </div>
  );
};

export default Ahri;
