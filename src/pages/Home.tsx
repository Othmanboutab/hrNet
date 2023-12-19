import "../styles/pages/home.scss";
import home_banner from "../assets/home_banner.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="description-container">
        <h1>
          Bienvenue chez <span className="name">RHnet</span>
        </h1>
        <p>
          Découvrez l'excellence du recrutement avec{" "}
          <span className="name">RHnet</span>, votre partenaire de confiance
          pour trouver les meilleurs talents. Notre engagement envers
          l'innovation, la précision et la satisfaction client redéfinit les
          normes des cabinets de recrutement. Bienvenue dans l'avenir du
          recrutement d'élite.
        </p>
      </div>
      <div className="img-container">
        <img src={home_banner} />
      </div>
    </div>
  );
};

export default Home;
