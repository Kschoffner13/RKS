import Footer from "../components/Footer";

function Home() {
  return (
    <div className="HomeContent">
      <div className="landing">
        <div className="L_content">
          <h1 className="RKS_home">RKS</h1>
          <h2>Consulting</h2>
          <p>
            Providing Quality Telecommunications and Software Consulting
            Services Since 2024
          </p>
        </div>
      </div>
      <div className="intro"></div>
      <div className="services"></div>
      <Footer />
    </div>
  );
}

export default Home;
