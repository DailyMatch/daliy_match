import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Spinner from "../atoms/Spinner";

const Terms = () => {
const tournaments = [
    { id: 1, name: 'Introduction', description: 'www.Dailymatch.in is operated by Daily Match. By using this website, you agree to be bound by the following terms and conditions. If you do not agree with any part of these terms, you should not use the website.' },
    { id: 2, name: 'Eligibility', description: 'To participate in any tournament, you must be 18 years or older, or have parental consent. Your Gaming ID has to be over 60 days old.' },
    { id: 3, name: 'Account Registration', description: 'Players must create an account by providing accurate and current information.Each user is responsible for maintaining the confidentiality of their account details and activities.' },
    { id: 4, name: 'Tournament Rules', description: 'Entry fees are required to participate in paid tournaments.Players must adhere to the rules specified for each tournament, including time, format, and gameplay restrictions.Any form of cheating, hacking, or exploitation will lead to disqualification and possible account suspension.' },
    { id: 5, name: 'Prize Distribution', description: 'Dailymatch.in reserves the right to delay or withhold payouts in case of suspicious activity or technical issues.The prize amount is set and communicated to participants before the tournament begins, but the prize is only awarded to the winners after the tournament has been played and the results are finalized.' },
    { id: 6, name: 'User Conduct', description: 'Users must not engage in any activity that interferes with or disrupts the website or the services provided.Abusive, harmful, or offensive behavior will not be tolerated and may result in immediate termination of access.' },
    { id: 7, name: 'Limitation of Liability', description: 'Dailymatch.in is not liable for any indirect, incidental, or consequential damages arising from the use of the site.We do not guarantee uninterrupted access to the website and are not responsible for any technical issues that may occur.' },
    { id: 8, name: 'Governing Law', description: 'These terms and conditions are governed by the laws of the jurisdiction in which the company operates.' },
];


const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  window.scrollTo(0, 0);
}, []);

if (loading) {
  return <Spinner/>;
}


return (
    <>
        <Navbar />
        <section id="banner-section" className="inner-banner">
            <div className="ani-img">
                <img className="img-1" src="images/banner-circle-1.png" alt="icon" />
                <img className="img-2" src="images/banner-circle-2.png" alt="icon" />
                <img className="img-3" src="images/banner-circle-2.png" alt="icon" />
            </div>

            <div className="banner-content d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="main-content">
                                <h1>Terms & Conditions</h1>
                                <div className="breadcrumb-area">
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
}

export default Terms
