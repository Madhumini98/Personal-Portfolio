import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import local images for Certificates
import certificate15 from "../assets/images/certificates/15-slt.jpg";
import certificate16 from "../assets/images/certificates/16-istqb.jpg";
import certificate17 from "../assets/images/certificates/17-SoftwareTestingQA.jpg";
import certificate27 from "../assets/images/certificates/27-Jira.jpg";
import certificate18 from "../assets/images/certificates/18-ManualTesting.jpg";
import certificate19 from "../assets/images/certificates/19-Succeeding.jpg";
import certificate20 from "../assets/images/certificates/20-TestTechniques.jpg";
import certificate21 from "../assets/images/certificates/21-SQL.jpg";
import certificate22 from "../assets/images/certificates/22-JMeter.jpg";
import certificate23 from "../assets/images/certificates/23-Agile.jpg";
import certificate24 from "../assets/images/certificates/24-PromptEngineering.jpg";
import certificate25 from "../assets/images/certificates/25-Fintech.jpg";
import certificate26 from "../assets/images/certificates/26-DigitalBanking.jpg";
import certificate1 from "../assets/images/certificates/1-microsoftazure.png";
import certificate2 from "../assets/images/certificates/2-skillup.png";
import certificate3 from "../assets/images/certificates/3-networks.png";
import certificate4 from "../assets/images/certificates/4-uompython.png";
import certificate5 from "../assets/images/certificates/5-devops.png";
import certificate6 from "../assets/images/certificates/6-ibmpython101.png";
import certificate7 from "../assets/images/certificates/7-cybersecurity.jpg";
import certificate8 from "../assets/images/certificates/8-uiuxdesign.jpg";
import certificate9 from "../assets/images/certificates/9-indiespire.png";
import certificate10 from "../assets/images/certificates/10-gapstar.png";
import certificate11 from "../assets/images/certificates/11-johnkeels.png";
import certificate12 from "../assets/images/certificates/12-digitalgarage.png";
import certificate13 from "../assets/images/certificates/13-cyberhat.png";
import certificate14 from "../assets/images/certificates/14-udemy.png";

// Import local images of Achievements
import achievement12 from "../assets/images/achievements/12-adscai.jpg";
import achievement1 from "../assets/images/achievements/1-codewithwie.png";
import achievement2 from "../assets/images/achievements/2-hackaholics.png";
import achievement3 from "../assets/images/achievements/3-madhack.png";
import achievement4 from "../assets/images/achievements/4-innova.jpg";
import achievement5 from "../assets/images/achievements/5-idealize.png";
import achievement6 from "../assets/images/achievements/6-ieeextreme.png";
import achievement7 from "../assets/images/achievements/7-cloudskillchallenge.jpg";
import achievement8 from "../assets/images/achievements/8-shecoderess.png";
import achievement9 from "../assets/images/achievements/9-cyberzee.png";
import achievement10 from "../assets/images/achievements/10-fossasia.png";
import achievement11 from "../assets/images/achievements/11-spacequiz.png";

//Import local images of Badges
import badge1 from "../assets/images/badges/azureai.png";
import badge2 from "../assets/images/badges/cloudcore.png";
import badge3 from "../assets/images/badges/cybersecurity.png";
import badge4 from "../assets/images/badges/appwrite.png";
import badge5 from "../assets/images/badges/networks.png";
import badge6 from "../assets/images/badges/datascience.png";
import badge7 from "../assets/images/badges/introdatascience.png";
import badge8 from "../assets/images/badges/hacktoberfest2021.png";
import badge9 from "../assets/images/badges/hacktoberfest22.png";
import badge10 from "../assets/images/badges/hacktoberfest2022.png";
import badge11 from "../assets/images/badges/mobydock.png";

const certificates = [
  {
    imageUrl: certificate15,
    title: "Certificate of Software Engineering Internship Excellence",
    organization: "Sri Lanka Telecom",
    date: "August 2024",
    link: "https://drive.google.com/file/d/1AHfUDKJmDB1f3bkszvBWVcBhKGxHjR36/view?usp=sharing",
  },
  {
    imageUrl: certificate1,
    title: "Azure AI Fundamentals",
    organization: "Microsoft",
    date: "April 2022",
    link: "https://drive.google.com/file/d/1vsq2bdN3uKWDDFYh7Q2NbL7kw39I781n/view",
  },
  {
    imageUrl: certificate16,
    title: "ISTQB 4.0+ Foundation Cert Prep",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/6c6ff951e3a153f02501e250916232ac840ddee803d432cecc076e455725f507?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate17,
    title: "Software Testing/QA",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/9c9cffce94f468ff89d17bc39b7be3afd60d1aaaac4552364dd4a0a58eb9bddd?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate27,
    title: "Learning Jira",
    organization: "PMI",
    date: "June 2025",
    link: "https://www.linkedin.com/learning/certificates/9c40e847bd1dc489dc4a14aa5546ec87ac929dd942a2c826e6f48cdb1d759024?trk=share_certificate",
  },
  {
    imageUrl: certificate18,
    title: "Understanding Manual Testing",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/8cc9e4772deb14f46e41e07259f92106cfc294f4e442880f53cfb25d1f951189?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate19,
    title: "Succeeding in Software Testing",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/09d41f8216a73c4720fbf27c722f85c64c1301a2835fe393409b7aaacf864b30?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate20,
    title: "Software Testing Foundations",
    organization: "CompTIA",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/ad83701f1cfc3357a5736a9ed3562f0ceb57b0e7e93c8d198436269462e4861e",
  },
  {
    imageUrl: certificate21,
    title: "SQL for Testers",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/dbe9f332ed9652214f89e732a699cbe65eef20caa44f15a83628bebb2dd0067f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate22,
    title: "JMeter: Performance and Load Testing",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/167f119f8779e634a804586d5f15d6ed1e7ddcfebd1e23fb4ecb329a885fb74c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate23,
    title: "Agile Testing",
    organization: "LinkedIn Learning",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/a3709c809cf70775b5f8761ecd8dfca598661d3678669a3a01addcf3c1989800?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },

  {
    imageUrl: certificate24,
    title: "Prompt Engineering",
    organization: "LinkedIn Learning",
    date: "June 2025",
    link: "https://www.linkedin.com/learning/certificates/666f8b63b22d84e8992d1feaee991020d9115549e0fd30a82ebfafc6bd55eae1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate25,
    title: "Introduction to Fintech",
    organization: "NASBA",
    date: "June 2025",
    link: "https://www.linkedin.com/learning/certificates/72da876b1b55ab5e190600971275576c163efa842e3f6f9098a205be78c9f7b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate26,
    title: "Digital Banking Fundamentals",
    organization: "LinkedIn Learning",
    date: "June 2025",
    link: "https://www.linkedin.com/learning/certificates/383ea9d384eb2f8ef4d445c2ffb9da069e9653aaca2d1f2a2538d77105c39993?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BWkuXMM6hSoK4O8LcWCU38g%3D%3D",
  },
  {
    imageUrl: certificate2,
    title: "Machine Learning Course",
    organization: "Simplilearn",
    date: "July 2022",
    link: "https://drive.google.com/file/d/1nLNwwqtt-aqLFgQuNX9MzPXv2SDyGd3d/view?pli=1",
  },
  {
    imageUrl: certificate3,
    title: "Introduction to Networks",
    organization: "Cisco",
    date: "May 2022",
    link: "https://drive.google.com/file/d/1g5V1lvW06WCfs0YLT_v2rO1z9ussoRpk/view?usp=drive_link",
  },
  {
    imageUrl: certificate4,
    title: "Python for Beginners",
    organization: "UOM",
    date: "May 2022",
    link: "https://drive.google.com/file/d/1BSkD4GUeyM8ooaJGpNnmTpGGr76-9xCm/view",
  },
  {
    imageUrl: certificate5,
    title: "DevOps using Azure DevOps",
    organization: "Udemy",
    date: "February 2021",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-e16f98bc-f970-4936-b64d-d478203a36f6.jpg",
  },
  {
    imageUrl: certificate6,
    title: "Python 101 for Data Science",
    organization: "IBM",
    date: "February 2021",
    link: "https://courses.cognitiveclass.ai/certificates/64a7d1c50b5a429b81b84cf9a6f115b1",
  },
  {
    imageUrl: certificate7,
    title: "Introduction to Cybersecurity",
    organization: "Cisco",
    date: "January 2021",
    link: "https://drive.google.com/file/d/1S8MEX5SO__9Uy4oaR-yIWcC5TJ2bgRcK/view?usp=drive_link",
  },
  {
    imageUrl: certificate8,
    title: "UI/UX for Beginners",
    organization: "Great Learning",
    date: "July 2023",
    link: "https://drive.google.com/file/d/13RTgFxtf6rB7XdIEL2kVMJ_WuUKFYKQG/view",
  },
  {
    imageUrl: certificate9,
    title: "INDIESPIRE’21 Workshop",
    organization: "IEEE UWA",
    date: "December 2021",
    link: "https://drive.google.com/file/d/18GTvfa9zesoOzNgc1NYSCqP_OdttiSJ8/view?usp=sharing",
  },
  {
    imageUrl: certificate10,
    title: "Qualifier1.0 Chapter 1",
    organization: "GAPSTARS",
    date: "November 2021",
    link: "https://drive.google.com/file/d/1yvEMOWrNDFNRcgmWiVYG5Hh_YutgIpNE/view?usp=drivesdk",
  },
  {
    imageUrl: certificate11,
    title: "Qualifier1.0 Chapter 2",
    organization: "JOHN KEELS",
    date: "November 2021",
    link: "https://drive.google.com/file/d/1yvEMOWrNDFNRcgmWiVYG5Hh_YutgIpNE/view?usp=drivesdk",
  },
  {
    imageUrl: certificate12,
    title: "Digital Marketing",
    organization: "Google Digital Garage",
    date: "September 2021",
    link: "https://drive.google.com/file/d/1-pRsT6yCvGIdJgJCkpSjA9EI2umoRGq3/view?usp=sharing",
  },
  {
    imageUrl: certificate13,
    title: "CYBERHUT 1.0",
    organization: "IEEE Computer Society of SLTC",
    date: "January 2021",
    link: "https://drive.google.com/file/d/138Xsa0QVbc6qhGlWRpFWKxh077crlGmI/view?usp=drivesdk",
  },
  {
    imageUrl: certificate14,
    title: "HTML, CSS, Bootstrap",
    organization: "Udemy",
    date: "January 2021",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-cc4666a2-9cf4-48c0-88e9-2b2b00c63fb4.jpg",
  },
];

const achievements = [
  {
    imageUrl: achievement12,
    title: "ADScAI Symposium",
    organization: "Research Publication",
    date: "April 2025",
    link: "https://drive.google.com/file/d/1faZ26kVlTqqwTnA2JEmAPgOmz0DSTwP1/view?usp=sharing",
  },
  {
    imageUrl: achievement1,
    title: "Code with WIE",
    organization: "2nd Runners up",
    date: "November 2021",
    link: "https://drive.google.com/file/d/1t14qllx5PcX3HuzUsrgTKizL-RQ9nwK_/view",
  },
  {
    imageUrl: achievement2,
    title: "Hackaholics V5.0",
    organization: "Top 10 Finalists",
    date: "February 2023",
    link: "https://drive.google.com/file/d/1TT3oXhqNUgC4H3IuFJDAKSHTIIQWpYAb/view",
  },
  {
    imageUrl: achievement3,
    title: "MadHack 2021",
    organization: "Top 10 Finalists",
    date: "August 2021",
    link: "https://drive.google.com/file/d/1yZ7LQtudKB7CJaaB4D2v2CFyh2hjWeZH/view",
  },
  {
    imageUrl: achievement4,
    title: "INNOVA 2023",
    organization: "Top 10 Finalists",
    date: "September 2023",
    link: "https://drive.google.com/file/d/1kjsAfBA0bkdUQKL3eJ-mFXJOI8iDKVIQ/view?usp=sharing",
  },
  {
    imageUrl: achievement5,
    title: "Idealize 2022",
    organization: "Semi Finalists",
    date: "December 2022",
    link: "https://drive.google.com/file/d/10pZD15hK1Uva6Y4CIlL7PR00IKn6ds7p/view?usp=sharing",
  },
  {
    imageUrl: achievement6,
    title: "IEEEXtreme 15.0",
    organization: "Participation",
    date: "October 2021",
    link: "https://drive.google.com/file/d/1yXLmpLOBtL0NDgcb97wf8qX3XBJ8JmQm/view?usp=drivesdk",
  },
  {
    imageUrl: achievement7,
    title: "Cloud Skill Challenge",
    organization: "Winner",
    date: "March 2021",
    link: "https://drive.google.com/file/d/1AxOSlGbg9LnLsRtGJMbGorKqEclk6o-D/view?usp=drive_link",
  },
  {
    imageUrl: achievement8,
    title: "SHECODERess V5.0",
    organization: "Participation",
    date: "September 2022",
    link: "https://drive.google.com/file/d/1IVWWYsJy1sG4_PwQ6qH4x__7BV0d5vVy/view?usp=sharing",
  },
  {
    imageUrl: achievement9,
    title: "CyberZee'22",
    organization: "Participation",
    date: "March 2022",
    link: "https://drive.google.com/file/d/1wgK_oyaMNhJl_Sq4aHNh-b1XH6aX4ywK/view?usp=sharing",
  },
  {
    imageUrl: achievement10,
    title: "FOSSASIA Cloud Skills Challenge ",
    organization: "Winner",
    date: "March 2022",
    link: "https://drive.google.com/file/d/1CwWp-mWobG8_eHDWglpdoO9DNosJE5pw/view?usp=drivesdk",
  },
  {
    imageUrl: achievement11,
    title: "Space Quiz Competition 2021",
    organization: "Participation",
    date: "January 2022",
    link: "https://drive.google.com/file/d/1ss9FWXyCC5wuX6ewdEWNFc3d-ly67vSU/view?usp=sharing",
  },
];

const badges = [
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  badge6,
  badge7,
  badge8,
  badge9,
  badge10,
  badge11,
];

const Winnings = () => {
  return (
    <section id="winnings" className="py-10 bg-gray-800 relative">
      <div className="text-center text-gray-100">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Winnings</span>
        </h3>

        <br />
        <p className="text-gray-400 mt-3 text-lg">
          These symbolize the milestones I've achieved through Hackathons and various competitions.
        </p>
        <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
          <div className="w-full">
            <div className="swiper-container">
              <Swiper
                slidesPerView={1.2} // Show one slide at a time
                spaceBetween={2}
                breakpoints={{
                  768: {
                    slidesPerView: 5,
                  },
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                {achievements.map((achievement, i) => (
                  <SwiperSlide key={i}>
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 group border-cyan-600 relative w-full bg-gray-900 p-5 rounded-xl flex flex-col items-center"
                      style={{
                        width: "16rem", // Set a fixed width
                        height: "18rem", // Set a fixed height
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${achievement.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%", // Make sure the image covers the whole container
                          height: "100%", // Make sure the image covers the whole container
                        }}
                        className="rounded"
                      ></div>
                      <h3 className="text-xl mt-3">{achievement.title}</h3>
                      <p className="text-gray-400 mt-0.05">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-450 mt-3">{achievement.date}</p>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <p className="text-gray-400 mt-3 text-lg">
          These badges represent my successful endeavors.
        </p>

        <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="mr-3 mb-3" // Add some margin to separate the badges
            >
              <img
                src={badge}
                alt={`Badge ${i + 1}`}
                className="w-20 h-20 rounded" // Adjust the width and height as needed
              />
            </div>
          ))}
        </div>

        <br/>
        <p className="text-gray-400 mt-3 text-lg">
          These certificates are a testament to my participation in a variety of courses and workshops.
        </p>
        <div className="flex items-center justify-center mt-12 gap-2 flex-wrap">
          <div className="w-full">
            <div className="swiper-container">
              <Swiper
                slidesPerView={1.2} // Show one slide at a time
                spaceBetween={2}
                breakpoints={{
                  768: {
                    slidesPerView: 5,
                  },
                }}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                {certificates.map((certificate, i) => (
                  <SwiperSlide key={i}>
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 group border-cyan-600 relative w-full bg-gray-900 p-5 rounded-xl flex flex-col items-center"
                      style={{
                        width: "16rem", // Set a fixed width
                        height: "18rem", // Set a fixed height
                      }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${certificate.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          width: "100%", // Make sure the image covers the whole container
                          height: "100%", // Make sure the image covers the whole container
                        }}
                        className="rounded"
                      ></div>
                      <h3 className="text-xl mt-3">{certificate.title}</h3>
                      <p className="text-gray-400 mt-0.05">
                        {certificate.organization}
                      </p>
                      <p className="text-gray-450 mt-3">{certificate.date}</p>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winnings;
