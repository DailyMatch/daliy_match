import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Privacy = () => {

    const tournaments = [
        { id: 1, name: 'Information Collection', description: 'We collect personal information such as name, email, contact details, and payment information when users register or participate in tournaments.' },
        { id: 2, name: 'Use of Information', description: 'We use your data to facilitate tournament participation, payment processing, and communication about events.We may share personal information with third-party payment processors, but will never sell or rent your data.' },
        { id: 3, name: 'Data Protection', description: 'We employ standard security practices to safeguard your personal data.' },
        { id: 4, name: 'User Rights', description: 'You have the right to access, modify, or delete your personal information at any time by contacting our support team.' },
        { id: 5, name: 'Cookies', description: 'We use cookies to enhance your experience, for analytics, and to track tournament participation.' },
        { id: 6, name: 'Third-Party Links', description: 'Dailymatch.in may contain links to third-party websites. We are not responsible for the privacy practices of these sites.' },
        { id: 7, name: 'Changes to Policy', description: 'We may update this Privacy Policy periodically. Users will be notified of any major changes via email or through our website.' }
    ];


  return (
    <>
      <Navbar/>
      <section id="banner-section" class="inner-banner">
        <div class="ani-img">
          <img class="img-1" src="images/banner-circle-1.png" alt="icon" />
          <img class="img-2" src="images/banner-circle-2.png" alt="icon" />
          <img class="img-3" src="images/banner-circle-2.png" alt="icon" />
        </div>

        <div class="banner-content d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="main-content">
                  <h1>Privacy Policy</h1>
                  <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb"></nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
            <div className="container">
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {tournaments.map((tournament) => (
                        <li key={tournament.id} style={{ marginBottom: '20px' }}>
                            <h5>{tournament.id}.   {tournament.name}</h5>
                            <p  style={{ marginBottom: '15px', marginLeft:"28px" }}>{tournament.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        <Footer/>
    </>
  );
};

export default Privacy;
