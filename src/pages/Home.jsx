import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
          <div className="hero-content">
              <p>Empowering Your Educational Journey</p>
              <h1>Welcome to Sarthii</h1>
              <p>
              At Sarthii, we understand the challenges students face in securing admission to the right college after exam results. Making the right choice, considering factors like scores, location, and financial aspects, is crucial for a promising future. To simplify this process, we have developed a cutting-edge system that assists students in making informed decisions about their college choices.
              </p>
              <div className="btn btn-group">
                <a href="/service">
                  <button className="btn">Get Started</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
              <div className="container grid grid-two-cols">
                {/* hero images  */}
                <div className="hero-image">
                  <img
                    src="/images/ai.png"
                    alt="coding together"
                    width="400"
                    height="500"
                  />
                </div>

                <div className="hero-content">

                  <h1>Our Mission</h1>
                  <p>
                  Our mission is to empower students with the tools and information they need to make well-informed decisions about their college admissions. We believe that every student deserves the opportunity to pursue education in an environment that aligns with their goals and aspirations.
                  </p>
                </div>
              </div>
            </section>

      {/* 4th section  */}
      <section className="section-hero">
              <div className="container grid grid-two-cols">

                <div className="hero-content">
                
                  <h1>How it Works</h1>
                  <p>Smart Analysis for Informed Choices</p>
                  <p>
                  Our system meticulously analyzes students' performances, taking into account not only their scores but also the cutoff histories of colleges from previous years. By incorporating filters for location, fee structures, and other relevant criteria, we create a personalized list of recommended colleges for each student. This smart list serves as a guide for filling out option forms, ensuring a smooth and strategic approach to the college admission process.
                  </p>

                </div>
              {/* hero images  */}
                <div className="hero-image">
                  <img
                    src="/images/design.png"
                    alt="coding together"
                    width="400"
                    height="500"
                  />
                </div>
                <div className="btn btn-group">
                <a href="/service">
                  <button className="btn">Get Started</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
              </div>

            </section>
          </>
  );
};
