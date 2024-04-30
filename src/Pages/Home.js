import Footer from "../components/Footer";

function Home() {
  return (
    <div className="HomeContent">
      <div className="Welcome">
        <h1>Welcome</h1>
        <p>
          welcome to rks calgary, we are a small business that specializes in
          telecommuncations consulting.
        </p>
      </div>
      <div className="intro"></div>
      <div className="services"></div>
      <Footer />
    </div>
  );
}

export default Home;
