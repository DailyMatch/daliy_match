import React from 'react'
import Navbar from '../Home/Navbar'

const Refund = () => {

    const tournaments = [
        { id: 1, name: 'Introduction', description: 'By using Dailymatch.in, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms, you should not use the website.' },
        { id: 2, name: 'Eligibility', description: 'To participate in any tournament, you must be 18 years or older, or have parental consent. Your Gaming ID has to be over 60 days old.' },
        { id: 3, name: 'Account Registration', description: 'Players must create an account by providing accurate and current information.Each user is responsible for maintaining the confidentiality of their account details and activities.' },
        { id: 4, name: 'Tournament Rules', description: 'Entry fees are required to participate in paid tournaments.Players must adhere to the rules specified for each tournament, including time, format, and gameplay restrictions.Any form of cheating, hacking, or exploitation will lead to disqualification and possible account suspension.' },
        { id: 5, name: 'Prize Distribution', description: 'Dailymatch.in reserves the right to delay or withhold payouts in case of suspicious activity or technical issues.The prize amount is set and communicated to participants before the tournament begins, but the prize is only awarded to the winners after the tournament has been played and the results are finalized.' },
        { id: 6, name: 'User Conduct', description: 'Users must not engage in any activity that interferes with or disrupts the website or the services provided.Abusive, harmful, or offensive behavior will not be tolerated and may result in immediate termination of access.' },
        { id: 7, name: 'Tournament Rules', description: 'Entry fees are required to participate in paid tournaments.Players must adhere to the rules specified for each tournament, including time, format, and gameplay restrictions.Any form of cheating, hacking, or exploitation will lead to disqualification and possible account suspension.' },
        { id: 8, name: 'Tournament Rules', description: 'Entry fees are required to participate in paid tournaments.Players must adhere to the rules specified for each tournament, including time, format, and gameplay restrictions.Any form of cheating, hacking, or exploitation will lead to disqualification and possible account suspension.' },
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
    </>
  )
}

export default Refund
