import Counter from "./Counter";

const FunFactCounter = ({ style }) => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={53} />
            </span>
          </h2>
          <h6>Members</h6>
          <p>Join #Team BNI Kanya, changing Nagercoil's business landscape.</p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className={`funfact-box-items active`}>
          <h2>
            <span className="count">
              <Counter end={9452} />
            </span>
          </h2>
          <h6>Referrals</h6>
          <p>
            Generating massive business referrals for Nagercoil's top
            professionals.
          </p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={63} />
            </span>
            Crore+
          </h2>
          <h6>Business Generated</h6>
          <p>
            Premier business networking chapter delivering impressive results.
          </p>
        </div>
      </div>
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className={`funfact-box-items style-${style}`}>
          <h2>
            <span className="count">
              <Counter end={1374} />
            </span>
          </h2>
          <h6>Testimonials</h6>
          <p>Positive feedback from our growing community of professionals.</p>
        </div>
      </div>
    </div>
  );
};

export default FunFactCounter;
