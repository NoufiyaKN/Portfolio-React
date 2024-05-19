import React, { useEffect, useRef } from 'react';
import Header from './Header';
import coding from '../assets/images/coding.gif';
import coding2 from '../assets/images/phpcoding.gif';
import { Card, Row } from 'react-bootstrap';
import '../Body.css';
import globe from '../assets/images/globe.gif'
import computer from '../assets/images/computer.gif'
import settings from '../assets/images/settings.gif'
import file from '../assets/images/file.gif'
import search from '../assets/images/search.gif'
import tool from '../assets/images/tools.gif'

function Body() {
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <>
      <div style={{ height: '100vh', backgroundImage: "url('https://img.freepik.com/free-vector/background-wave-particle-digital-gradient-colorful_483537-1576.jpg?size=626&ext=jpg&ga=GA1.1.608389005.1701082518&semt=ais_user')", backgroundSize: 'cover' }} className="container-fluid">
        <Header />
        <div className="row mt-5 ms-5">
          <div className="col-lg-6">
            <h1 style={{ background: 'linear-gradient(90deg, rgba(111,214,159,1) 12%, rgba(34,138,81,1) 36%, rgba(14,57,33,1) 69%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HI I'AM <br />NOUFIYA K N</h1>
            <div className='wrapper'>
              <div className='static-txt'>I'AM A:</div>
              <ul className='dynamic-txt'>
                <li className="typing-text" style={{ background: 'linear-gradient(90deg, rgba(111,214,159,1) 12%, rgba(34,138,81,1) 36%, rgba(14,57,33,1) 69%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}><span>MERN STACK DEVELOPER</span></li>
              </ul>
            </div>
            <h4 style={{ display: 'justify' }}>MERN Stack Developer with a focus on building scalable, efficient full-stack applications and intuitive user interfaces.</h4>
            <div className='row'>
              <div className="col-lg-4">
                <img style={{ height: '60px' }} src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
                <img style={{ height: '35px' }} src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-512.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '400px' }} src={coding} alt="" />
          </div>
        </div>
      </div>

      <Row style={{ border: "10px white", background: "grey", height: "50px", fontSize: '30px' }}>
        <marquee behavior="scroll" direction="left" style={{ whiteSpace: "nowrap", color: 'black', border: "10px white" }}>
          React, Material-UI, Bootstrap, GitHub, Angular, HTML, CSS, JavaScript, Redux
        </marquee>
      </Row>

      <div style={{ height: '110vh', backgroundImage: "url('https://img.freepik.com/premium-photo/abstract-107-background-wallpaper-gradient_792836-191039.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715731200&semt=ais_user')", backgroundSize: 'cover' }} className="container-fluid w-100">
        <div className='row ms-5'>
          <h1 className='gradient-text mt-5'>ABOUT ME</h1>
          <div className="col-lg-5">
            <img style={{ height: '450px' }} src={coding2} alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <h5>MY NAME IS NOUFIYA K N : <span className='gradient-text2'>I AM A MERN STACK DEVELOPER</span></h5>
            <p className='mt-5' style={{ textAlign: 'justify' }}> I possess advanced proficiency in each component of the MERN stack.I excel in full-stack development, seamlessly integrating front-end and back-end technologies to create cohesive and efficient applications. I leverage the MERN stack's flexibility to implement features such as user authentication, real-time updates, and data visualization.</p>
            <p>As a MERN stack developer, I bring a combination of technical expertise, problem-solving skills, and a passion for innovation to deliver high-quality web applications that meet the needs of clients and users alike.</p>
            <button className="btn btn-primary gradient-btn" style={{ background: "linear-gradient(90deg, rgba(43,33,117,1) 11%, rgba(34,138,81,1) 47%, rgba(4,15,9,1) 92%)" }}>Download CV</button>
          </div>
        </div>
        <Row className='marquee1'>
          <div className="marquee-container">
            <marquee className="marquee">
              <img style={{ height: '50px' }} src="https://clipground.com/images/html-logo-png-3.png" alt="" />
              <img style={{ height: '50px' }} src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
              <img style={{ height: '50px' }} className='me-4' src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="Image 5" />
              <img style={{ height: '50px' }} className='me-4' src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="" />
              <img style={{ height: '50px' }} className='me-4' src="https://i.pinimg.com/1200x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg" alt="" />
              <img style={{ height: '50px' }} className='me-4' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://archive.org/download/github.com-react-bootstrap-react-bootstrap_-_2019-10-02_21-36-38/cover.jpg" alt="" />
              <img style={{ height: '50px' }} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
              <img style={{ height: '50px' }} src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" alt="" />
              <img style={{ height: '50px' }} src="https://clipground.com/images/html-logo-png-3.png" alt="" />
              <img style={{ height: '50px' }} src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
              <img style={{ height: '50px' }} src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="Image 5" />
              <img style={{ height: '50px' }} className='me-4' src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="" />
              <img style={{ height: '50px' }} className='me-4' src="https://i.pinimg.com/1200x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg" alt="" />
              <img style={{ height: '50px' }} className='me-4' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
              <img style={{ height: '50px' }} className='me-2' src="https://archive.org/download/github.com-react-bootstrap-react-bootstrap_-_2019-10-02_21-36-38/cover.jpg" alt="" />
              <img style={{ height: '50px' }} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
              <img style={{ height: '50px' }} src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" alt="" />
            </marquee>
          </div>
        </Row>
      </div>

     <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/solid-navy-blue-concrete-textured-wall_53876-124584.jpg?size=626&ext=jpg&ga=GA1.1.608389005.1701082518&semt=ais_user')", backgroundSize: 'cover', height: '200vh'}}>
        <div className="container">
          <div className="row">
            <h1 className='gradient-text services mt-5' ref={servicesRef}>SERVICES</h1>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black'}}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={globe} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>WEBSITES</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                  I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black'}}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={computer} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>SINGLE PAGE APPLICATIONS</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    I Can Build Professional single Page Application Using Reactjs And Modern Library
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black' }}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={settings} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>WEB APPLICATIONS</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    I Can Build Applications For Different Purposes Using Technologies That Allow You More Security.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black'}}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={file} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>SINGLE PAGE APPLICATIONS</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    It Is A Long stablished Fact That A Reader Will Be Distracted By The Readable Content Of A Page when Looking At Its Layout
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black'}}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={search} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>Search Engines</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    I Can Utilize Online Platform like Google, Yahoo To Find Informations.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
           <div className='col-lg-4 mt-4'>
              <Card className='cardview' style={{ width: '18rem', height: '240px', background: 'none', border: '1px solid black'}}>
                <Card.Body>
                  <img style={{height: '75px',width: '75px',marginLeft: '90px'}} src={tool} alt="" />
                  <Card.Title style={{textAlign: 'center',fontSize: '18px',color: 'rgba(34,138,81,1)'}}>FIXED WEBSITES</Card.Title>
                  <Card.Text style={{textAlign: 'justify'}}>
                    I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
          </div>

          <div className="row mt-5">
            <h1 className='gradient-text services' ref={skillsRef}>MY SKILLS</h1>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://clipground.com/images/html-logo-png-3.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/02/reduxlogo.png?ssl=1" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%',alignItems: 'center'}} src="https://skillforge.com/wp-content/uploads/2020/10/javascript.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://i.pinimg.com/1200x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://archive.org/download/github.com-react-bootstrap-react-bootstrap_-_2019-10-02_21-36-38/cover.jpg" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 mt-5">
              <Card style={{ width: '100%', height: '120px', background: 'none', border: '1px solid black'}}>
                  <Card.Body>
                    <img style={{height: '90px',width: '100%'}} src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="" />
                  </Card.Body>
                </Card>
            </div>
          </div>
        </div>
     </div>

      <Row className='marquee1'>
        <div className="marquee-container">
          <marquee className="marquee">
            <span>Creating seamless web experiences with the power of the MERN stack.</span>
            <span style={{ marginLeft: '50px' }}>Turning complex problems into elegant solutions with MongoDB, Express, React, and Node.js.</span>
            <span style={{ marginLeft: '50px' }}>Building scalable and efficient web applications, one line of code at a time.</span>
            <span style={{ marginLeft: '50px' }}>Crafting dynamic user interfaces and robust backend systems with MERN.</span>
            <span style={{ marginLeft: '50px' }}>Your vision, my code – let's build something amazing together.</span>
            <span style={{ marginLeft: '50px' }}>Transforming ideas into interactive, responsive, and high-performing web applications.</span>
            <span style={{ marginLeft: '50px' }}>Turning web development challenges into opportunities for innovation and growth.</span>
          </marquee>
        </div>
      </Row>


     <div style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/021/548/492/small/minimal-abstract-dark-blue-gradient-banner-background-design-photo.jpg')", backgroundSize: 'cover', height: '100vh'}}>
       <div className="container-fluid">
        <div className="row">
        <h1 className='gradient-text services mt-5' ref={projectRef}>MY PROJECTS</h1>
          <div className="col-lg-4 mt-5">
            <Card style={{ width: '100%', height: '270px', background: 'none', border: '1px solid black'}}>
              <Card.Body>
                <img style={{height: '200px',width: '100%'}} src="https://google-login-seven.vercel.app/assets/login-CvkLmY6Q.jpg" alt="" />
              </Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                Login With Google Authentication
              </Card.Text>
            </Card>
          </div>
          <div className="col-lg-4 mt-5">
            <Card style={{ width: '100%', height: '270px', background: 'none', border: '1px solid black'}}>
              <Card.Body>
                <img style={{height: '200px',width: '100%'}} src="https://agewelleveryday.org/wp-content/uploads/tb684qn7xco-860x475.jpg" alt="" />
              </Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                Pottery Retailer Website
              </Card.Text>
            </Card>
          </div>
          <div className="col-lg-4 mt-5">
            <Card style={{ width: '100%', height: '270px', background: 'none', border: '1px solid black'}}>
              <Card.Body>
                <img style={{height: '200px',width: '100%'}} src="https://i.pinimg.com/236x/b7/95/ea/b795ea382c5588595e7ff1ea3af9220f.jpg" alt="" />
              </Card.Body>
              <Card.Text style={{textAlign: 'center'}}>
                Image Slider Webste
              </Card.Text>
            </Card>
          </div>
        </div>
       </div>
     </div>

    </>
  );
}

export default Body;

