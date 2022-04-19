import "../Photos.css";
import sera1 from "../images/sera1.jpg";
import sera2 from "../images/sera2.jpg";
import sera3 from "../images/sera3.jpg";
import sera4 from "../images/sera4.jpg";
import sera5 from "../images/sera5.jpg";
import sera6 from "../images/sera6.jpg";

const SeraphinePhotos = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <img className="galleryImg" src={sera1} alt="sera1" />
      <img className="galleryImg" src={sera2} alt="sera1" />
      <img className="galleryImg" src={sera3} alt="sera1" />
      <img className="galleryImg" src={sera4} alt="sera1" />
      <img className="galleryImg" src={sera5} alt="sera1" />
      <img className="galleryImg" src={sera6} alt="sera1" />
    </div>
  );
};

export default SeraphinePhotos;
