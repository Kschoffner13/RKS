import Footer from "../components/Footer";

function Home() {
  return (
    <div className="HomeContent">
      <div className="Welcome">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar nunc sit amet tortor aliquam, ac ullamcorper neque
          ullamcorper. Proin nec turpis sit amet nisl tincidunt tincidunt. Donec
          nec ultricies sapien. Nulla facilisi. Sed ut odio et nisi fermentum
          aliquam. Nam nec turpis nec nunc ultricies congue. Aliquam erat
          volutpat. In hac habitasse platea dictumst. Sed ultricies, mi et
          vestibulum tincidunt, nunc lectus ultricies libero, nec fermentum
          purus nisl nec nunc. Nulla facilisi. Sed ultricies, mi et vestibulum
          tincidunt, nunc lectus ultricies libero, nec fermentum purus nisl nec
          nunc.
        </p>
      </div>
      <div className="intro"></div>
      <div className="services"></div>
      <Footer />
    </div>
  );
}

export default Home;
