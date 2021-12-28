import "../Css/Girlspages.css";
import Kaisa_img from "../images/Kaisa.jpg";

const Kaisa = () => {
  return (
    <div>
      <div className="title">Welcome to Kai'sa's Page</div> <br />
      <div className="img_div">
        <img className="img_girls" src={Kaisa_img} alt="Kaisa" />
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is Kai'sa?</div>
      <div className="text">
        <p>
          A talent from abroad, Kai'Sa brings a unique style and sound to the
          industry. She learned to express herself through her craft, blossoming
          into one of the most talented dancers in the world—a perfect fit for
          the misfits of K/DA, where she takes their performances to the next
          level. <br />
          <br />
          After showcasing her flawless dance techniques world-wide, Kai'sa is
          ready to apply her legendary discipline and focus to all aspects of
          her life as a performing artist. She's still not sure who she'll be
          when she steps forward to shine as herself, but she's looking forward
          to the challenge of finding out.
        </p>
      </div>
      <br />
      <br />
      <div className="video">
        <iframe
          className="video_settings"
          title="myFrame"
          src="https://www.youtube.com/embed/E_PbH5y70Tc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Kaisa;
