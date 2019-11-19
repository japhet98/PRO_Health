import React, { Component } from 'react';

 export default function Carousel(){
    return(
        
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://picsum.photos/200/50" alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First Slide</h5>
                            <p>...</p>
                        </div>
    </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src="https://picsum.photos/200/50" alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second Slid</h5>
                            <p>...</p>
                        </div>
    </div>
                            <div className="carousel-item">
                        <img className="d-block w-100" src="https://picsum.photos/200/50" alt="Third slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third Slid</h5>
                            <p>...</p>
                        </div>
    </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
        </div>
    )
}