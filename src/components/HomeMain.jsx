import RenderCards from "./Gallery";
import Banner from "./Banner";
import img from "../assets/banner_img.png";

function HomeMain() {
  return (
    <main className="home_container">
      <Banner img={img} title={"Chez vous, partout et ailleurs"} />
      <section className="gallery_wrapper">
        <RenderCards />
      </section>
    </main>
  );
}

export default HomeMain;
