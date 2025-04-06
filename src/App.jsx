import Navbar from './components/Navbar.jsx'
import HeadText from './components/HeadText.jsx'
import EffectTrail from './components/EffectTrail.jsx'
import { useState } from "react"
import './index.css'

function App() {
  const [arrSkills, setArrSkills] = useState([false,false,false,true]);
  const [expSkill, setExpSkill] = useState(['Linux Operation','Shell Script','Redis','Elasticsearch']);

  function activeBtnExp(number) {

    if (number === 0) {
      document.getElementById('expTitle').innerText = 'Intern Programmer';
      document.getElementById('expDateTime').innerText = '12 August 2021 - 28 December 2025';
      setExpSkill(['Linux Operation','Shell Script','Redis','Elasticsearch']);
    } else if (number === 1) {
      document.getElementById('expTitle').innerText = 'Data Analyst';
      document.getElementById('expDateTime').innerText = '12 August 2021 - 28 December 2025';
      setExpSkill(['Linux Operation','Shell Script','Redis','Elasticsearch', 'Quasar Framework', 'Git & Github','React']);
    } else if (number === 2) {
      document.getElementById('expTitle').innerText = 'IT Auditor';
      document.getElementById('expDateTime').innerText = '12 August 2021 - 28 December 2025';
      setExpSkill(['Linux Operation','Shell Script','Redis','Elasticsearch','PHP OOP']);
    } else if (number === 3) {
      document.getElementById('expTitle').innerText = 'Full-Stack Developer';
      document.getElementById('expDateTime').innerText = '12 August 2021 - 28 December 2025';
      setExpSkill(['Linux Operation','Shell Script','Redis','Elasticsearch']);
    }
    const updatedArr = arrSkills.map((_, i) => i === number);
    setArrSkills(updatedArr);
  }

  return (
    <>
      <EffectTrail />
      <Navbar />
      <div className='mainContainer'>
        <HeadText />

        <div className='wrap-profile' id='halId'>
          <div className='card-profile'>
            <div className='card-photo'>
              <img src="./photo-aboutme.png" alt=""/>
            </div>
            <div className='card-text'>
              <span className='card-text-aboutme'>ABOUT ME</span>
              <span className='card-aboutme-desc'>I am a passionate developer with a strong interest in website and software development. I have experience in front-end development, working with various frameworks and tools such as Quasar, React, and Bootstrap. On the back-end side, I have experience in building RESTful APIs and integrating external APIs into applications.
              I have worked both independently and as part of a team, and I am familiar with collaboration tools such as Git, GitLab, and GitHub when working in team environments. I am always eager to learn new things and fully aware that I still have much to explore and improve to grow professionally in this field.</span>

              <div className='about-detail'>
                <div className='location-detail'>
                  <span className='desc-loc-icon'></span>
                  <span className='desc-loc'>East Ciputat <br/>South Tangerang<br/>Banten</span>
                </div>
                
                <div className='location-detail'>
                  <span className='desc-smk-icon'></span>
                  <span className='desc-smk'>Vocational School Nusantara 1<br /> Software Engineering<br /> 2018 - 2021</span>
                </div>
                <div className='location-detail'>
                <span className='desc-kuliah-icon'></span>
                  <span className='desc-kuliah'>S1 Pamulang University<br/> Electrical Engineering <br/> 2024 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='wrap-experience' id='halExp'>
          <span className='title-wrp-exp'>WORK EXPERIENCE</span>
          <div className='list-experience'>
            <div className='box-btn-experience'>
              <button className='btn-list-experience' onClick={() => activeBtnExp(0)} style={{background: arrSkills[0] && 'rgb(73, 97, 73)', color: arrSkills[0] && 'white'}}>
                Intern Programmer
              </button>
              <div className="segitiga-active" style={{visibility: !arrSkills[0] && 'hidden'}}></div>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience' onClick={() => activeBtnExp(1)} style={{background: arrSkills[1] && 'rgb(73, 97, 73)', color: arrSkills[1] && 'white'}}>
                Data Analyst
              </button>
              <div className="segitiga-active" style={{visibility: !arrSkills[1] && 'hidden'}}></div>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience' onClick={() => activeBtnExp(2)} style={{background: arrSkills[2] && 'rgb(73, 97, 73)', color: arrSkills[2] && 'white'}}>
                IT Auditor
              </button>
              <div className="segitiga-active" style={{visibility: !arrSkills[2] && 'hidden'}}></div>
            </div>
            <div className='box-btn-experience'>
              <button className='btn-list-experience'  onClick={() => activeBtnExp(3)} style={{background: arrSkills[3] && 'rgb(73, 97, 73)', color: arrSkills[3] && 'white'}}>
                Full-Stack Developer
              </button>
              <div className="segitiga-active" style={{visibility: !arrSkills[3] && 'hidden'}}></div>
            </div>
          </div>
          <div id='customFadeBox' className='detail-experience'>
              <span className='exp-title' id='expTitle'>Intern Programmer</span>
              <span className='exp-datetime' id='expDateTime'>12 August 2021 - 16 May 2021</span>
              <p className='exp-description' id='expDesc'>I began my career at PT Wahana Prestasi Logistik as an intern before eventually becoming a contract employee. During my internship, I learned to work with the Linux operating system (Ubuntu), which was pre-configured on the office machines. I also studied how to create shell scripts to read log files from Nginx and push the extracted data into a Redis database. Once the data was stored in Redis, I developed an additional shell script to retrieve the data and transfer it into MySQL. Finally, the data stored in MySQL was processed and indexed into Elasticsearch using Logstash. </p>
              <div className='exp-skills'>
                {expSkill.map((val, index) => {
                  return (
                    <span key={index}>{val}</span>
                  )
                })}
              </div>
          </div>
        </div>

        <div className='wrap-project' id='halProject'>
          <span className='title-prj'>PROJECT</span>
          <div className='project-project'>
            <span className='project-title'>1. SAHABAT WAHANA</span>
            <div className='div-prj-image'>
              <img className='project-img' src="./project-example.png" alt="" />
            </div>
            <span className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid ea fugiat dolore facere dolor alias soluta quod labore laborum, corporis eos et explicabo eum error. Iusto consequuntur officiis iure mollitia, quam, unde quisquam eum fugiat ullam maxime amet expedita aliquam pariatur exercitationem at voluptatum recusandae hic obcaecati voluptates tenetur, quos enim nam. Eius quibusdam tempore quos tempora rem veritatis magni odit eaque, cumque deleniti, assumenda voluptatibus molestiae, provident non nulla ipsam! Rem magnam ipsa perspiciatis exercitationem cum ex dolorum sequi sit similique? Atque ipsa adipisci minima repellat velit, mollitia cum! Hic ad similique ipsa, quasi dolor distinctio earum illo?</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
