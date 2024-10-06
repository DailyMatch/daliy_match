import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Home/Footer';

const Refund = () => {

    const tournaments = [
        { id: 1, name: 'Tournament Entry Fees', description: 'No refunds will be issued once a tournament has started unless it is canceled by Dailymatch.in. Users who withdraw before a tournament begins may request a refund within 24 hours.' },
        { id: 2, name: 'Tournament Cancellations', description: 'If canceled due to technical issues or low participation, entry fees will be refunded to the users wallet within 7 business days.' },
        { id: 3, name: 'Technical Failures', description: 'Refunds may be granted on a case-by-case basis for technical issues, with requests submitted within 48 hours.' },
        { id: 4, name: 'Disputes', description: 'All disputes must be submitted within 7 days of the tournaments end. Dailymatch.in’s decision will be final. Contact us at play@dailymatch.in for support' },
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
                  <h1>Refund Policy</h1>
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
  )
}

export default Refund
