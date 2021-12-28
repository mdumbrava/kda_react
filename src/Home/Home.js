import "./Home.css";
import Ahri from "../images/icon_ahri.jpg";
import Akali from "../images/icon_akali.jpg";
import Evelynn from "../images/icon_evelyn.jpg";
import Kaisa from "../images/icon_kaisa.jpg";
import Seraphine from "../images/icon_s.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-links">
        <Link className="girls-links" to="/ahri">
          <div>
            Ahri <br /> <img src={Ahri} alt="Ahri" />{" "}
          </div>
        </Link>
        <Link className="girls-links" to="/akali">
          <div>
            Akali <br /> <img src={Akali} alt="Ahri" />{" "}
          </div>
        </Link>
        <Link className="girls-links" to="/evelynn">
          <div>
            Evelynn <br /> <img src={Evelynn} alt="Ahri" />{" "}
          </div>
        </Link>
        <Link className="girls-links" to="/kaisa">
          <div>
            Kaisa <br /> <img src={Kaisa} alt="Ahri" />{" "}
          </div>
        </Link>
        <Link className="girls-links" to="/seraphine">
          <div>
            Seraphine <br /> <img src={Seraphine} alt="Ahri" />{" "}
          </div>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div className="title">Who is KDA?</div>
      <div className="text">
        <p>
          K/DA is a virtual K-pop inspired girl group consisting of four themed
          versions of League of Legends characters: Ahri, Akali, Evelynn and
          Kai'Sa. American singers Madison Beer and Jaira Burns and (G)I-dle
          members Miyeon and Soyeon provide the voices of Evelynn, Kai'Sa, Ahri,
          and Akali respectively, though the characters have also been voiced by
          other artists. K/DA was developed by Riot Games, the company behind
          League of Legends, and unveiled at the 2018 League of Legends World
          Championship with an augmented reality live performance of their first
          song, "Pop/Stars". A music video of the song uploaded to YouTube
          subsequently went viral, surpassing 100 million views in one month,
          and reaching 400 million views, as well as topping Billboard's World
          Digital Song Sales chart. This would be followed up with the release
          of an EP in 2020, entitled "K/DA: ALL OUT" and featured 5 new songs,
          most notably the title track "More" as it received a music video which
          has 71 million views as of February 2021.
        </p>
      </div>
      <br />
      <br />
      <div className="video">
        <iframe
          className="video_settings"
          title="myFrame"
          src="https://www.youtube.com/embed/3VTkBuxU4yk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
