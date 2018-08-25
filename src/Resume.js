import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
  render() {
    return (
      <div className='resumePage'>
        <div className='krissyPicture'><img src='/img/krissyshot.png' alt='krissy' className='krissyPic'/></div>
        <div className='resume'>
          <button className='resumeBtn'><a href="/img/KrissyConantResume.pdf" download="KrissyConantResume.pdf">Download My Resume</a></button>
          <h3 className="resumeTitle">Want to contact me? Feel free to email me at <a href="mailto:hello@krissyconant.com">hello@krissyconant.com</a></h3>
        </div>
      </div>
    );
  }
}

export default Resume;