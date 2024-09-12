import React from "react";
import member1 from '../assets/team/01.jpg'
import member2 from '../assets/team/02.jpg'
import member3 from '../assets/team/03.jpg'
import member4 from '../assets/team/04.jpg'

const teamMembers = [
  {
    name: "Subhadeep Das",
    title: "Convenor",
    imgSrc: member1,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Gopi Mallick",
    title: "Convenor",
    imgSrc: member2,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Sourav Kumar Dey",
    title: "Convenor",
    imgSrc: member3,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Arindam Karmakar",
    title: "Cheif-coordinator",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Soumyadeep Naskar",
    title: "Cheif-coordinator",
    imgSrc: member1,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Afzal Hossain Mallick",
    title: "3rd year Coordinator",
    imgSrc: member2,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Surya Chatterjee",
    title: "SBCS Domain Lead",
    imgSrc: member3,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Udipta Maity",
    title: "Design and Simulation Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Koushik Karmakar",
    title: "Design and Simulation Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, ",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Iman Naskar",
    title: "Aviation Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Soumyadip De",
    title: "Aviation Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Debdulal Saha",
    title: "Associate Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
  {
    name: "Suvhankar Dhali",
    title: "Associate Domain Lead",
    imgSrc: member4,
    description: "Personalized trai access rcises, amin ders malesuada id dolor non, elemen tum auctor arcu.",
    social: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
      linkedin: "#",
    }
  },
];

const Team = () => {
  return (
    <section id="our-team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">Amazing Team</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="row text-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-3 col-sm-6 col-xs-12">
              <div
                className={`team-member wow fadeInUp`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="team-img">
                    <img className="img-responsive" src={member.imgSrc} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span>{member.title}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
                <ul className="social-icons">
                  <li>
                    <a href={member.social.facebook}><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href={member.social.twitter}><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href={member.social.googlePlus}><i className="fa fa-google-plus"></i></a>
                  </li>
                  <li>
                    <a href={member.social.linkedin}><i className="fa fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
