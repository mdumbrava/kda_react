import "../Photos.css";
import Akali1 from "../images/akali1.jpg";
import Akali2 from "../images/akali2.jpg";
import Akali3 from "../images/akali3.jpg";
import Akali4 from "../images/akali4.jpg";
import Akali5 from "../images/akali5.jpg";
import Akali6 from "../images/akali6.jpg";

const AkaliPhotos = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <img className="galleryImg" src={Akali1} alt="Akali1" />
      <img className="galleryImg" src={Akali2} alt="Akali1" />
      <img className="galleryImg" src={Akali3} alt="Akali1" />
      <img className="galleryImg" src={Akali4} alt="Akali1" />
      <img className="galleryImg" src={Akali5} alt="Akali1" />
      <img className="galleryImg" src={Akali6} alt="Akali1" />
    </div>
  );
};

export default AkaliPhotos;
