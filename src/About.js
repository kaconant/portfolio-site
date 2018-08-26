import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='aboutKrissy'>
          <div className='profile'>
            <p className='profileTitle'>PAST</p>
            <p className='profileBio'> Over the last ten years, it's been a goal of mine to broaden my perspective by experiencing lifestyles outside of my comfort zone. I've traveled and lived in various cultures from around the world, learned invaluable skills from various career tracks, and have been fortunate to work with many diverse demographics. <br/> <br/>These experiences have humbled me and taught me that with time, patience, and hard work - anything is truly possible.   
            </p>
          </div>
          <div className='profile'>
            <p className='profileTitle'>PRESENT</p>
            <p className='profileBio'>By day: I'm a marketing specialist for a SaaS company where I wear many hats: content blogging, internal employee engagement and retention efforts, as well as building our company's industry connections via event and trade show planning and execution. <br/> <br/> By night: I've just completed a 26 week full stack web development course from DigitalCrafts where we've covered the 101 on how to be a developer in UI, resource, and devOps. 
            </p>
          </div>
          <div className='profile'>
            <p className='profileTitle'>FUTURE</p>
            <p className='profileBio'>Ah, the wild unknown! Since discovering my love of web development in 2017, I've been dreaming [literally] of ways to integrate technologies to provide great solutions! There's a reason that my favorite video games growing up was Tetris: I love solving riddles and thinking of work-flows in the midst of motion. <br/> <br/> This year, I hope to join a company that provides valuable mentorship to help me become an amazing full stack developer. 
            </p>
          </div>
        </div>
        <div className='resume'>
          <button className='resumeBtn'><a href="/img/KrissyConantResume.pdf" download="KrissyConantResume.pdf">Download My Resume ➜</a></button>
          <h3 className="resumeTitle">Let's connect at <a href="mailto:hello@krissyconant.com">hello@krissyconant.com</a></h3>
        </div>
      </React.Fragment>
    );
  }
}

export default About;