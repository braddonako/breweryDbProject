import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = () => {
    return (
        <footer className='bck_b_dark'>
            <div className='container'>
                <div className='logo'>
                    BreweryDB Project
                </div>
                <div className='wrapper'>
                    <div className='left'>
                        <h2>Contact Information</h2>
                        <div className='business_nfo'>
                            <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faCompass}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Address</div>
                                    <div>2172 S Trenton Way</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faPhone}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Phone</div>
                                    <div>720-937-4947</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faClock}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Working Hours</div>
                                    <div>24/7</div>
                                </div>
                            </div>
                        <div className='tag'>
                                <FontAwesomeIcon 
                                icon={faEnvelope}
                                className='icon'
                                />
                                <div className='nfo'>
                                    <div>Email</div>
                                    <div>braddonakowski@yahoo.com</div>
                                </div>
                        </div>
                        </div>                      
                    </div>
                    <div className='left'>
                        <h2>Give us feedback</h2>
                        <div>
                            <div>If you have any suggestions for the site. This page is early in development, but we love feedback.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;