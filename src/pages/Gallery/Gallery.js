import React from 'react';
import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';
import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='my-5'>
            <div className='container gallery-bg text-center py-5'>
                <div className="gallery-title">
                    <h2 className='mb-5'>This is Gallery</h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-12 col-md-6 mb-5">
                            <div className="gallery-item">
                                <img className='img-fluid' src={gallery1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12 col-md-6 mb-5">
                            <div className="gallery-item">
                                <img className='img-fluid' src={gallery2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12 col-md-6 mb-5">
                            <div className="gallery-item">
                                <img className='img-fluid' src={gallery3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 col-12 col-md-6 mb-5">
                            <div className="gallery-item">
                                <img className='img-fluid' src={gallery4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-12 col-md-6 mb-5">
                            <div className="gallery-item">
                                <img className='img-fluid' src={gallery5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;