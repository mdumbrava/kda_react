import "../Css/Girlspages.css";
import Evelynn_img from "../images/Evelynn.jpg";

const Evelynn = () => {
  return (
    <div>
      <div className="title">Welcome to Evelynn's Page</div> <br />
      <div className="img_div">
        <img className="img_girls" src={Evelynn_img} alt="Evelynn" />
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is Evelynn?</div>
      <div className="text">
        <p>
          No one is as deliciously volatile as Evelynn. She's a diva who drives
          divisiveness in the media—they love her one day and hate her the next,
          her name a permanent fixture of tabloid headlines. She is a born
          superstar, and the foundation of K/DA's sound. <br />
          <br />
          With a single devastating glance, Evelynn can ensure that all eyes are
          on her—when she wants them to be. K/DA's success has ensured that this
          provocative diva's name will be on everyone's lips, but Evelynn is
          intent that her killer fashion sense will keep it there.
        </p>
      </div>
      <br />
      <br />
      <div className="video">
        <br />
        <br />
      </div>
    </div>
  );
};

export default Evelynn;
