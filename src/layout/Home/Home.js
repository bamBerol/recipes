import HomeButton from "../../component/HomeButton/HomeButton";
import style from "./Home.module.css";

const Home = () => {
  return (
    <section
      className={`${style.home} d-flex container-fluid flex-column flex-lg-row align-items-center justify-content-evenly`}>
      <HomeButton nameBtn="categories" />
      <HomeButton nameBtn="search" />
    </section>
  );
};
export default Home;
