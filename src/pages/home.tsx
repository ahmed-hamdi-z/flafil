
import PageContainer from "../components/containers/page-containers";
import HomeHero from "../components/home/hero";
import MealSection from "../components/home/meal-section";
import Offers from "../components/home/offers";

export default function Menu() {
  return (
    <PageContainer className="bg-[#1C4233]">
      <HomeHero />
      <Offers />
      <MealSection />
    </PageContainer>
  );
}
