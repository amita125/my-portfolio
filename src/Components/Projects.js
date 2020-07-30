import React from 'react';
import Button from 'react-bootstrap/Button';
import "../Stylesheet/Projects.css";
function Projects() {
    return (
        <div id="gallery">
            <div className="projects">
                <div>
                    <div className="card"></div>
                    <div className="project-details">
                        <div className="project-name" > Trippy </div>
                        <span className="highlight" > React JS / Python </span>
                    </div>
                    <div className="button project-button" data-toggle="modal" data-target=".bd-example-modal-lg1"> View </div>
                    <div className="modal fade bd-example-modal-lg1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="project-img">
                                    <div id="carousel-project1" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner" data-target="#carousel-project1">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={require('../images/trippy/profile.PNG')} alt="First slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/trippy/gallery.PNG')} alt="Second slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/trippy/Global.PNG')} alt="Third slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/trippy/map.PNG')} alt="Third slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/trippy/settingForm.PNG')} alt="Third slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/trippy/register.PNG')} alt="Third slide" />
                                            </div>
                                        </div> {/* carousel-inner */}
                                        <a className="carousel-control-prev" href="#carousel-project1" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carousel-project1" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>

                                </div>
                                <div className="project-info">
                                    <div className="project-title">Trippy travel app  <Button variant="outline-success"  id="github-button" href="https://github.com/amita125/trippy-travel-app">Access on Github</Button></div>
                                    <hr />
                                    <div className="project-info">Trippy iss a project where a user can create an account and share their travel experience.user can uplod the travel pictures and view the global travel of the users.<br />
                                        <h3>Technologies used :</h3>
                                        <ul>
                                            <li>Bootstrap</li>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Python</li>
                                            <li>Sqlite3</li>
                                        </ul>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                   
                                    <Button data-dismiss="modal" id="close-button">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div>
                    <div className="card"></div>
                    <div className="project-details">
                        <div className="project-name" > Habit Tracker </div>
                        <span className="highlight" > React JS / Express </span>
                    </div>
                    <div className="button project-button" data-toggle="modal" data-target=".bd-example-modal-lg2"> View </div>
                    <div className="modal fade bd-example-modal-lg2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div id="carousel-project2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" data-target="#carousel-project2">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={require('../images/habit/dashboard.PNG')} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/habit/login.PNG')} alt="Second slide" />
                                            
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/habit/register.PNG')} alt="Third slide" />
                                        </div>
                                    </div> 
                                    <a className="carousel-control-prev" href="#carousel-project2" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-project2" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="project-info">
                                    <div className="project-title">Habit tracker app   <Button variant="outline-success" id="github-button" href="https://github.com/amita125/habit-app">Access on Github</Button></div>
                                    <hr />
                                    <div className="project-info">This project is designed in a way where user needs to log into the system to add/edit/delete habit.
                                   <h3>Technologies used :</h3> 
                                         <ul>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                            <li>Bootstrap</li>
                                            <li>Postgres</li>
                                         </ul>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                   
                                    <Button data-dismiss="modal" id="close-button">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div>
                    <div className="card"></div>
                    <div className="project-details">
                        <div className="project-name" > Quiz app </div>
                        <span className="highlight" > React JS / Express </span>
                    </div>
                    <div className="button project-button" data-toggle="modal" data-target=".bd-example-modal-lg3"> View </div>
                    <div className="modal fade bd-example-modal-lg3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div id="carousel-project3" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" data-target="#carousel-project3">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={require('../images/quiz/mainPG.PNG')} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/quiz/question.PNG')} alt="Second slide" />
                                           
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/quiz/over.PNG')} alt="Third slide" />
                                           
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-project3" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-project3" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="project-info">
                                    <div className="project-title">Quiz app  <Button variant="outline-success" id="github-button" href="https://github.com/amita125/react-quiz-app/tree/master/quiz-app">Access on Github</Button></div>
                                    <hr />
                                    <div className="project-info">This project is for the quiz lover who wants to test their knowledge on different topic based on the choosen difficult level. The game can be played with their friends.
                                    <h3>Technologies used :</h3>
                                         <ul>
                                            <li>React</li>
                                            <li>Node.js</li>
                                            <li>Express</li>
                                            <li>Bootstrap</li>
                                            <li>Api - question and answer</li>
                                         </ul>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                   
                                    <Button data-dismiss="modal" id="close-button">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
                <div>
                    <div className="card"></div>
                    <div className="project-details">
                        <div className="project-name" > CHIRP </div>
                        <span className="highlight" > Bootstrap / Express </span>
                    </div>
                    <div className="button project-button" data-toggle="modal" data-target=".bd-example-modal-lg4"> View </div>
                    <div className="modal fade bd-example-modal-lg4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="project-img">
                                    <div id="carousel-project4" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner" data-target="#carousel-project4">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={require('../images/blog/chirp.PNG')} alt="First slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/blog/comment.PNG')} alt="Second slide" />

                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../images/blog/gif.PNG')} alt="Third slide" />

                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carousel-project4" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carousel-project4" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <div className="project-title">CHIRP  <Button variant="outline-success" id="github-button" href="https://github.com/amita125/community-journaling-website">Access on Github</Button>  </div>
                                    <hr />
                                    <div className="project-info">
                                        Is a microblogging system created that lets users post messages (with a maximum of 256 characters), reactions and GIFS. A platform where interaction and engagement from other users exists through the COMMENT feature. All data inputs are stored locally via JSON database so users are able to review their "chirps".
                                       <h3>Technologies used :</h3> 
                                        <ul>
                                            <li>Bootstrap</li>
                                            <li>Jquery</li>
                                            <li> Popper Js</li>
                                            <li>FontAwesome</li>
                                            <li>Google Fonts</li>
                                            <li> Node</li>
                                            <li> Node Express</li>
                                            <li> UniqId</li>
                                            <li> Body-Parser</li>
                                            <li>Giphy API</li>
                                        </ul>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                    <Button data-dismiss="modal" id="close-button">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="projects">
                <div>
                    <div className="card"></div>
                    <div className="project-details">
                        <div className="project-name" > Weather App </div>
                        <span className="highlight" > React JS  </span>
                    </div>
                    <div className="button project-button" data-toggle="modal" data-target=".bd-example-modal-lg5"> View </div>
                    <div className="modal fade bd-example-modal-lg5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div id="carousel-project5" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" data-target="#carousel-project5">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={require('../images/mainpg.PNG')} alt="First slide" />
                                            <div className="carousel-caption d-none d-block">
                                                <h2>Home Page</h2>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/kathmandu.PNG')} alt="Second slide" />
                                            <div className="carousel-caption d-none d-block">
                                                <h1>Kathmandu city</h1>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={require('../images/weather-error.png')} alt="Third slide" />
                                            <div className="carousel-caption d-none d-block">
                                                <h3>Error City</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-project5" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-project5" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="project-info">
                                    <div className="project-title">Weather APP <Button variant="outline-success" id="github-button" href="https://github.com/amita125/weather-app-react">Access on Github</Button></div>
                                    <hr />
                                    <div className="project-info">
                                        Weather app which display the current weather with 5 day weather forcast of the chosen city based on the user. This project is build with the fetching the API request. Weather API for weather/forcast and Time API for the specific time of the country the user chose.<br /> <a href="https://amita125.github.io/weather-app-react/">Visit Site</a>
                                        <h3>  Technologies used : </h3>
                                        <ul>
                                            <li>Bootstrap</li>
                                            <li>Node</li>
                                            <li>React</li>
                                            <li>Weather API</li>
                                            <li>Time API</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    
                                    <Button data-dismiss="modal" id="close-button">Close</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects
