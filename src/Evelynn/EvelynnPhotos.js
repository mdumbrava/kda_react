import "../Photos.css";
import eve1 from "../images/eve1.jpg";
import eve2 from "../images/eve2.jpg";
import eve3 from "../images/eve3.jpg";
import eve4 from "../images/eve4.jpg";
import eve5 from "../images/eve5.jpg";
import eve6 from "../images/eve6.jpg";

const EvelynnPhotos = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <img className="galleryImg" src={eve1} alt="eve1" />
      <img className="galleryImg" src={eve2} alt="eve1" />
      <img className="galleryImg" src={eve3} alt="eve1" />
      <img className="galleryImg" src={eve4} alt="eve1" />
      <img className="galleryImg" src={eve5} alt="eve1" />
      <img className="galleryImg" src={eve6} alt="eve1" />
    </div>
  );
};

export default EvelynnPhotos;
