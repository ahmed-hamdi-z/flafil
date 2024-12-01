
import PageContainer from "../components/containers/page-containers";
import CardGrid from "../components/menu/card-grid";
import DropDown from "../components/menu/dropdown-btn";
import { Tabs } from "../components/menu/nav-buttons";

export default function Home() {
  return (
    <PageContainer className="bg-[#1C4233]">
        <DropDown />
        <Tabs />
        <CardGrid />
    </PageContainer>
  );
}
