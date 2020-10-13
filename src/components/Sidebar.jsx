import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Shannon Maloy</a></h1>
              <h4>Software Developer</h4>
              <span className="email"><i className="icon-mail"></i> shannon.maloy@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="skills">Skills</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  
                  
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/shannon-maloy" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/shannonmaloy" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="/build/images/shannonmaloyresume.pdf" target="_blank"><i className="icon-download4" /></a></li>
              </ul>
            </nav>
            {/* <div className="colorlib-footer">
              <div>s</div>
              <div>s</div>
            </div> */}
          </aside>
        </div>
      </div>
    )
  }
}
