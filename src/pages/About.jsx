import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>
                Welcome,
                {user ? ` ${user.username} to our website` : ` to our website`}
              </p>
              <h1>Why Choose Us? </h1>
              <p>
              <b>Accurate Analysis:</b> Our system employs state-of-the-art algorithms that not only analyze your current performance but also predict potential college cutoffs accurately. This ensures you have realistic expectations and can make informed decisions.
              </p>

              <p>
              <b>Comprehensive Database:</b> We have an extensive and constantly updated database that includes detailed information about the cutoffs and admission trends of numerous colleges. This comprehensive approach allows for a thorough evaluation of your potential options.
              </p>

              <p>
                <b>Personalized Recommendations:</b> Unlike generic advice, our recommendations are highly personalized. We take into account your individual preferences, including location, fee structures, and other key factors, to tailor a list of colleges that align with your unique needs and aspirations.
              </p>

              <p>
               <b> Real-Time Updates:</b> We provide real-time updates on admission-related information, ensuring that you are always equipped with the latest details. This feature is especially beneficial during fast-paced admission seasons, allowing you to stay ahead of the curve.
              </p>

              <p>
              <b>Proven Track Record:</b> Sarthii has a proven track record of helping students secure admissions to their desired colleges. Many students have successfully used our platform to make informed choices and embark on their academic journeys.
              </p>

              <p>
              <b>Dedicated Support Team:</b> Our dedicated support team is here to assist you throughout your college selection process. If you encounter any issues, have questions, or need additional guidance, our experienced team is ready to provide timely and helpful assistance.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Get Started</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
