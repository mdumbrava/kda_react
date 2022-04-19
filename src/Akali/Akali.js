import "../Css/Girlspages.css";
import Akali_img from "../images/Akali.jpg";
import AkaliPhotos from "./AkaliPhotos";

const Akali = () => {
  return (
    <div>
      <div className="title">Welcome to Akali's Page</div> <br />
      <div className="img_div">
        <img className="img_girls" src={Akali_img} alt="Akali" />
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is Akali?</div>
      <div className="text">
        <p>
          Akali's street aesthetic and hard-hitting lyrics inspired a dedicated
          fandom. She wields a microphone or kama as a hip-hop ninja,
          revolutionizing the stale scene with her raw talents. <br />
          <br />
          Fresh off her success with True Damage, Akali hits the stage
          full-throttle with her bold edge and fresh new direction. She spits
          fire with a mic in hand and pushes the band to the bleeding edge,
          because that's what the baddest do.
        </p>
      </div>
      <br />
      <AkaliPhotos />
    </div>
  );
};

export default Akali;
