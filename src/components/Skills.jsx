import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Current skills</h2>
            </div>
            </div>
            
            <div className="row row-pt-md">
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-javascript-plain"/>
                    
                </div>
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-html5-plain-wordmark"/>
                   
                </div> 
                
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-css3-plain-wordmark"/>
                    
                </div>         

                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-react-plain-wordmark"/>
                    
                </div>
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-nodejs-plain-wordmark"/>
                    
                </div>
                <div className="col-lg-1 text-center animate-box">
                   
                        <i className="devicon-express-original-wordmark"/>
                    
                </div>
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-ruby-plain-wordmark"/>
                    
                </div>
                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-rails-plain-wordmark"/>
                    
                        </div>
                        <div className="col-lg-1 text-center animate-box">
                    
                        <i className="devicon-postgresql-plain-wordmark"/>
                    
                </div>        

                <div className="col-lg-1 text-center animate-box">
                    
                        <i className="icon-github"/>
                    
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
