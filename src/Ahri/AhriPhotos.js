import "../Photos.css";
import Ahri1 from "../images/ahri1.jpg";
import Ahri2 from "../images/ahri2.jpg";
import Ahri3 from "../images/ahri3.jpg";
import Ahri4 from "../images/ahri4.jpg";
import Ahri5 from "../images/ahri5.jpg";
import Ahri6 from "../images/ahri6.jpg";

const AhriPhotos = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <img className="galleryImg" src={Ahri1} alt="Ahri1" />
      <img className="galleryImg" src={Ahri2} alt="Ahri1" />
      <img className="galleryImg" src={Ahri3} alt="Ahri1" />
      <img className="galleryImg" src={Ahri4} alt="Ahri1" />
      <img className="galleryImg" src={Ahri5} alt="Ahri1" />
      <img className="galleryImg" src={Ahri6} alt="Ahri1" />
    </div>
  );
};

export default AhriPhotos;
