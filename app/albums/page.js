import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import albums from "@/data/albums"; // import JSON
import FunFactCounter from "@/components/FunFactCounter";
import BNICTA from "@/components/BNIcta";

const Page = () => {
  return (
    <NextLayout header={1}>
      <Breadcrumb pageName="Popular Albums" pageTitle="Albums" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">Albums</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore BNI Kanya Meeting Gallery
            </h2>
          </div>

          {/* GRID - 3 per row */}
          <div className="row">
            {albums.map((album, index) => (
              <div
                key={album.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-4 wow fadeInUp"
                data-wow-delay={`${0.2 * (index % 3)}s`} // stagger animation
              >
                <div className="project-card-items">
                  <div className="project-image">
                    <img src={album.img} alt={`Album ${album.id}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Funfact Section Start */}
      </section>
      <section className="funfact-section section-padding pt-0 ">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="assets/img/bale.png" alt="img" /> */}
              BNI Kanya Achievements
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Chapter's Impressive Statistics
            </h2>
            <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
              Join the most successful business networking chapter in Nagercoil
            </p>
          </div>
          <FunFactCounter />
        </div>
      </section>

      {/* Team Section Start */}
      <BNICTA />
    </NextLayout>
  );
};

export default Page;
