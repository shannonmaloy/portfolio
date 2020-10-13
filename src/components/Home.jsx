
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
            <div className="flexslider js-fullheight">
                <ul className="slides">
                <li style={{backgroundImage: 'url(images/img_bg.png)'}}>
                    <div className="overlay" />
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner js-fullheight">
                            <div className="desc">
                          <h1>Welcome!</h1>
                          <h2>I'm Shannon Maloy - a successful Realtor with an education in Biological Engineering turned full-stack Software Engineer.  I am a problem solver by nature and thrive in the victory of achieving a goal.</h2>
                            <p><a href="https://drive.google.com/file/d/1AbhMf0UJdIazsBVXtH2k9BA9gZSr9d3I/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-learn">View Resume <em className="icon-download4" /></a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
                
                </ul>
            </div>
        </section>
      </div>
    )
  }
}