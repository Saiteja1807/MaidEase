import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomePageImageSlider from "./HomePageImageSlider";
import HomePageContactUs from "./homePageContactUs";
import HomePageDescription from "./HomePageDescription";

export default function Home() {
  return (
    <>
      <Header/>
      <HomePageImageSlider/>
      <HomePageDescription/>
      <HomePageContactUs/>
      <Footer/>
    </>
  )
}
