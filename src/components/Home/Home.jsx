import React from 'react';
import NavBar from '../NavBar/NavBar';
import bannerImg from '../../assets/banner-img.png';
import verifiedImg from '../../assets/verified.png';
import topArticle from '../../assets/top-article.png';
import writeShare from '../../assets/write-share.png';
import mouthShut from '../../assets/mouthshut.png';
import associate1 from '../../assets/associate-1.png';
import associate2 from '../../assets/associate-2.png';
import associate3 from '../../assets/associate-3.png';
import associate4 from '../../assets/associate-4.png';
import associate5 from '../../assets/associate-5.png';
import associateBottom from '../../assets/png-transparent-spain-sea-salt-20-minutos-brand-verified-stamp-angle-text-logo-removebg-preview 2.png';
import ServicesSlider from '../ServicesSlider/ServicesSlider';
import DiscoverIdeas from '../DiscoverIdeas/DiscoverIdeas';
import Blogs from '../Blogs/Blogs';
import RealWedding from '../RealWedding/RealWedding';
import BestOffers from '../BestOffers/BestOffers';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <>
            <NavBar />
            <section>
                <img className='h-80 lg:h-[540px] w-full object-cover' src={bannerImg} alt="" />
            </section>
            <section className='py-5'>
                <h2 className='font-jura text-4xl lg:text-6xl font-bold text-center'>India’s Leading Creative Platform</h2>
                <p className='text-2xl lg:text-3xl text-[#4C696D] text-center font-josefin mt-3 mb-5'>Experience hassle free bookings. Trusted by 2500+ Customers</p>
                <div className='w-full lg:w-[1000px] mx-auto text-xl lg:text-2xl relative'>
                    <input className='text-left lg:text-center border border-black rounded-full py-3 px-16 w-full md:w-10/12' type="text" placeholder='Search service, blog and many more…' />
                    <input className='py-3 bg-black text-white border border-black px-24 rounded-full mt-3 md:mt-0 md:absolute right-0' type="submit" value="Search" />
                </div>
            </section>
            <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 py-8'>
                <div className='flex items-center gap-4'>
                    <img src={verifiedImg} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>Verified Reviews</h3>
                        <p>For verified reviewers</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={topArticle} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>Top Articles</h3>
                        <p>Helps you decide</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={writeShare} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>Write Share Win Contest</h3>
                        <p>Earn cash for reviews</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={mouthShut} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>MouthShut for Brands</h3>
                        <p>Request a Demo</p>
                    </div>
                </div>
            </section>
            <div className='divider mx-auto w-11/12'></div>
            <section className='px-2 lg:px-10'>
                <div>
                    <div className='mb-12'>
                        <h2 className='text-4xl font-bold text-[#4C696D]'>Find Trusted Associate</h2>
                        <p className='text-xl'>Find the best Fliqa Associate for your special day.</p>
                    </div>
                    <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24'>
                        <div className='shadow-xl rounded-3xl shadow-black'>
                            <img className='w-full' src={associate1} alt="" />
                            <div className='bg-[#2C2C2C] rounded-b-3xl flex items-center justify-between'>
                                <div className='text-white p-3'>
                                    <h5 className='text-xl'>Name Title</h5>
                                    <p>location</p>
                                </div>
                                <img src={associateBottom} alt="" />
                            </div>
                        </div>
                        <div className='rounded-3xl shadow-xl shadow-black'>
                            <img className='w-full' src={associate2} alt="" />
                            <div className='bg-[#2C2C2C] rounded-b-3xl flex items-center justify-between'>
                                <div className='text-white p-3'>
                                    <h5 className='text-xl'>Name Title</h5>
                                    <p>location</p>
                                </div>
                                <img src={associateBottom} alt="" />
                            </div>
                        </div>
                        <div className='rounded-3xl shadow-xl shadow-black'>
                            <img className='w-full' src={associate3} alt="" />
                            <div className='bg-[#2C2C2C] rounded-b-3xl flex items-center justify-between'>
                                <div className='text-white p-3'>
                                    <h5 className='text-xl'>Name Title</h5>
                                    <p>location</p>
                                </div>
                                <img src={associateBottom} alt="" />
                            </div>
                        </div>
                        <div className='rounded-3xl shadow-xl bg-[#2C2C2C] shadow-black'>
                            <img className='w-full' src={associate4} alt="" />
                            <div className='bg-[#2C2C2C] rounded-b-3xl flex items-center justify-between'>
                                <div className='text-white p-3'>
                                    <h5 className='text-xl'>Name Title</h5>
                                    <p>location</p>
                                </div>
                                <img src={associateBottom} alt="" />
                            </div>
                        </div>
                        <div className='rounded-3xl shadow-xl shadow-black'>
                            <img className='w-full' src={associate5} alt="" />
                            <div className='bg-[#2C2C2C] rounded-b-3xl flex items-center justify-between'>
                                <div className='text-white p-3'>
                                    <h5 className='text-xl'>Name Title</h5>
                                    <p>location</p>
                                </div>
                                <img src={associateBottom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='px-2 lg:px-10'>
                <div>
                    <div className='mb-12'>
                        <h2 className='text-4xl font-bold text-[#4C696D]'>Our Featured Services</h2>
                        <p className='text-xl'>Discover the range of services provided by FliqaIndia</p>
                    </div>
                    <div className='mb-12'>
                        <ServicesSlider />
                    </div>
                </div>
            </section>
            <DiscoverIdeas />
            <section>
                <p className='text-center mt-10 font-homenaje text-4xl tracking-widest'>Popular: <span className='font-homenaje text-[#4C696D]'>Website  Design   Logo Design   Brochure   Label Design</span></p>
                <div className='divider'></div>
            </section>
            <Blogs />
            <RealWedding />
            <div className='divider mx-auto w-11/12'></div>
            <BestOffers />
            <div className='divider mx-auto w-11/12'></div>
            <Footer />
        </>
    );
};

export default Home;