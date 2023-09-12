import React from 'react';
import './About.css'
import workProgress from '../../images/work-process-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import ceo from '../../images/team/team-3.jpg'
import pm from '../../images/team/team-2.jpg'
import cto from '../../images/team/team-1.jpg'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header/>
            {/* Our Working Process  */}
            <div>
                <h1 className='text-4xl font-bold text-center my-4'>Our <span className='text-color'>Work Progress</span></h1>
                <p className='text-lg text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. <br /> Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className='md:flex my-5 container'>
                    <div className='md:mt-5 md:pt-28 md:pl-12 md:w-1/2'>
                        <h3 className='text-2xl font-bold mb-3 '> Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </div>
                    <div className='flex  justify-center my-4'>
                        <img className=' md:w-full md:pl-28 w-2/3' src={workProgress} alt="" />
                    </div>
                </div>
            </div>

            {/* Our Team  */}

            <div>
                <h1 className='text-4xl font-bold text-center my-5'>Check Our <span className='text-color'>Team</span></h1>
                <div className='sm:grid my-5 gap-5 grid-cols-3 sm:gap-1 justufy-center container'>
                    {/* ceo */}
                    <div className='team-member'>
                        <div>
                            <img src={ceo} alt="" />
                        </div>
                        <div className='member-details container p-6'>
                            <h4 className='font-bold mb-2'>Walter White</h4>
                            <hr className='' />
                            <div className=' md:flex '>
                                <p className='me-auto'>Chief Executive Officer</p>
                                <div className='text-2xl text-color'>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faFacebook} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faLinkedinIn} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faInstagram} />}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Manager  */}
                    <div className='team-member'>
                        <div>
                            <img src={pm} alt="" />
                        </div>
                        <div className='member-details container p-6'>
                            <h4 className='font-bold mb-2'>Sarah Jhonson</h4>
                            <hr />
                            <div className=' md:flex '>
                                <p className='me-auto'>Product Manager</p>
                                <div className='text-2xl text-color'>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faFacebook} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faLinkedinIn} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faInstagram} />}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CTO  */}
                    <div className='team-member'>
                        <div>
                            <img src={cto} alt="" />
                        </div>
                        <div className='member-details container p-6'>
                            <h4 className='font-bold mb-2'>Jackia Joshua</h4>
                            <hr />
                            <div className=' md:flex '>
                                <p className='me-auto'>CTO</p>
                                <div className='text-2xl text-color'>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faFacebook} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faLinkedinIn} />}</span>
                                    <span className='ml-2'>{<FontAwesomeIcon icon={faInstagram} />}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;