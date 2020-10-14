import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Yard Sale!</a></h3>
											<span>
												<p>Stack: React, Ruby on Rails, PostgreSQL</p>
												<p>Full stack application that allows users to search for and post yard sales. Results are mapped via Google Maps API for visualization.  Built using React, Ruby on Rails, PSQL, and Google Maps API. User authentication is achieved via JWT token authenticaion.</p>
											</span>
											<p className="icon">
												<span><a href="https://github.com/shannonmaloy/yard-sales" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Github</a></span>
												<span><a href="https://yard-sales.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="devicon-heroku-plain-wordmark" /> Deployed App</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">US Covid-19 Tracker</a></h3>
											<span><p>Stack: React, Node.js/Express, PostgreSQL</p>
														<p>COVID tracker leverages React for the front end, Node.js/Express on the backend and PSQL for the database.
														The app also leverages react-chartjs-2 and chart.js for data visualization and moment for date manipulation.</p>
														<p>The data is provided by The COVID Tracking Project API.</p></span>
											<p className="icon">
												<span><a href="https://github.com/shannonmaloy/covidtracker" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Github</a></span>
												<span><a href="https://uscovidtracker.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="devicon-heroku-plain-wordmark" /> Deployed App</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Yahtzee</a></h3>
											<span><p>Stack: Javascript, HTML5, CSS3</p>
														<p>Browser based version of the classic game, Yahtzee, with up to 4 player capability. Built using Javascript, HTML and CSS.</p>
														</span>
											<p className="icon">
												<span><a href="https://github.com/shannonmaloy/YAHTZEE" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Github</a></span>
												<span><a href="https://shannonmaloy.github.io/YAHTZEE/" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Deployed App</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">What's For Dinner?</a></h3>
											<span><p>Stack: Node.js/Express, EJS, PostgreSQL</p>
													<p>This application was built using Node.js/Express.js utilizing the MVC build pattern, EJS for views, and PostGreSQL for data storage. External data is obtained via the Yelp Fusion API.</p>
											<p>Users have the option to log-in and create a user profile with user authentication via passport and bcrypt.js.</p>
											</span>
											<p className="icon">
												<span><a href="https://github.com/shannonmaloy/WhatsForDinner" target="_blank" rel="noopener noreferrer"><i className="icon-github" /> Github</a></span>
												<span><a href="https://what-is-for-dinner.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="devicon-heroku-plain-wordmark" /> Deployed App</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							
							
							
						</div>
						
					</div>
				</section>
      </div>
    )
  }
}
