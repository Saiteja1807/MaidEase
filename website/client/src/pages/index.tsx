import Footer from "./Footer";
import Header from "./Header";
import HomePageImageSlider from "./homePageImageSlider";
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
