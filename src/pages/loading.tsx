import PageContainer from "../components/containers/page-containers";
import Loader from "../components/loader";

export default function Loading() {
  return (
    <PageContainer className="justify-center items-center">
      <Loader />
    </PageContainer>
  );
}
