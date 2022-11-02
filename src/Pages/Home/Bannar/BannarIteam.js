import React from 'react';
import './BannarIteam.css'
const BannarIteam = ({ slide }) => {
    const { image, id, next, prev } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='curosel-img'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affortable <br />
                    Price For car <br />
                    Servecing
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-1/2 ">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4 ">
                <button className="btn btn-warning mr-2">Discover More</button>
                <button className="btn btn-outline btn-warning">Lattest Projects</button>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannarIteam;