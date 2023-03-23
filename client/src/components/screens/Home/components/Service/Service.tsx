export const Service = () => {
  return (
    <div className="container">
      <div className="service-banner">
        <figure>
          <img
            src="./assets/images/service-banner.jpg"
            alt="HD 4k resolution! only $3.99"
          />
        </figure>
        <a
          href="./assets/images/service-banner.jpg"
          download
          className="service-btn"
        >
          <span>Download</span>
          {/* <ion-icon name="download-outline" /> */}
        </a>
      </div>
      <div className="service-content">
        <p className="service-subtitle">Our Services</p>
        <h2 className="h2 service-title">Download Your Shows Watch Offline.</h2>
        <p className="service-text">
          Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
          tempor.There are many variations of passages of lorem Ipsum available,
          but the majority have suffered alteration in some injected humour.
        </p>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">{/* <ion-icon name="tv" /> */}</div>
              <div className="card-content">
                <h3 className="h3 card-title">Enjoy on Your TV.</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                {/* <ion-icon name="videocam" /> */}
              </div>
              <div className="card-content">
                <h3 className="h3 card-title">Watch Everywhere.</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
