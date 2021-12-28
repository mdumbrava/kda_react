import "../Css/Girlspages.css";
import Seraphine_img from "../images/Seraphine.jpg";

const Seraphine = () => {
  return (
    <div>
      <div className="title">Welcome to Seraphine's Page</div> <br />
      <div className="img_div">
        <img className="img_girls" src={Seraphine_img} alt="Seraphine" />
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is Seraphine?</div>
      <div className="text">
        <p>
          With a stunning voice and a sunny disposition, Seraphine has big
          dreams about her music and what she can offer the world. She knows
          that someday, if she just keeps trying, she'll make her beloved cat
          Bao proud. <br />
          <br />
          ASeraphine's life is changing faster than she ever expected, and she's
          trying to hold on to her unique voice, keep up with Kai'Sa's
          intimidatingly sharp choreography, and still somehow manage to get
          enough sleep.
          <br /><br />
          After her whirlwind rise to stardom, Seraphine is on top of the world,
          and the charts, with her feature on K/DA's new EP. Her music and her
          message are resonating with her fans, and she's excited to show them
          what's to come on her journey of self-discovery through music.
        </p>
      </div>
      <br />
      <br />
      <div className="video">
        <iframe
          className="video_settings"
          title="myFrame"
          src="https://www.youtube.com/embed/wkFGt-66oeY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Seraphine;
