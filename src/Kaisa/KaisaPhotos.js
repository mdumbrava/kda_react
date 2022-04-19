import "../Photos.css";
import kaisa1 from "../images/kaisa1.jpg";
import kaisa2 from "../images/kaisa2.jpg";
import kaisa3 from "../images/kaisa3.jpg";
import kaisa4 from "../images/kaisa4.jpg";
import kaisa5 from "../images/kaisa5.jpg";
import kaisa6 from "../images/kaisa6.jpg";

const KaisaPhotos = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <img className="galleryImg" src={kaisa1} alt="kaisa1" />
      <img className="galleryImg" src={kaisa2} alt="kaisa1" />
      <img className="galleryImg" src={kaisa3} alt="kaisa1" />
      <img className="galleryImg" src={kaisa4} alt="kaisa1" />
      <img className="galleryImg" src={kaisa5} alt="kaisa1" />
      <img className="galleryImg" src={kaisa6} alt="kaisa1" />
    </div>
  );
};

export default KaisaPhotos;
