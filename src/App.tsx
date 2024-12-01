import Providers from "./providers";
import Layout from "./components/layout";
import Routers from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {

  return (
    <>
      <Providers>
        <Layout>
          <Header />
          <Routers />
          <Footer />
        </Layout>
      </Providers>
    </>
  )
}

export default App
