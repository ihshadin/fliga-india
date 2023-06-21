import React from 'react';
import offer1 from '../../assets/offer-1.png';
import discount from '../../assets/discount.png';

const BestOffers = () => {
    return (
        <section className='px-2 lg:px-10 py-10'>
            <div className='mb-12'>
                <h2 className='text-4xl text-center font-bold text-[#4C696D]'>Best Offers</h2>
                <p className='text-xl text-center'>Discover the best offers on our services</p>
            </div>
            <div className='flex justify-between items-center bg-gradient-to-t from-white via-[#BADCDC] to-white'>
                <div className='shadow-xl bg-white rounded-xl w-[240px]'>
                    <div className='h-[300px] shadow-lg shadow-gray-400 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${offer1})` }}>
                        <div className='h-full rounded-xl flex  flex-col justify-between text-white bg-black bg-opacity-30'>
                            <h2 className='text-2xl text-center font-josefin border-b-2 mx-3 mt-10'>
                                Wedding <br /> Package
                            </h2>
                            <div className='mb-4'>
                                <h4 className='ml-4 text-xl'>Discount</h4>
                                <img src={discount} alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className='font-josefin font-semibold my-4 text-center'>BOOK NOW</h3>
                </div>
                <div className='divider divider-horizontal mx-0 w-auto'></div>
                <div className='shadow-xl bg-white rounded-xl w-[240px]'>
                    <div className='h-[300px] shadow-lg shadow-gray-400 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${offer1})` }}>
                        <div className='h-full rounded-xl flex  flex-col justify-between text-white bg-black bg-opacity-30'>
                            <h2 className='text-2xl text-center font-josefin border-b-2 mx-3 mt-10'>
                                Wedding <br /> Package
                            </h2>
                            <div className='mb-4'>
                                <h4 className='ml-4 text-xl'>Discount</h4>
                                <img src={discount} alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className='font-josefin font-semibold my-4 text-center'>BOOK NOW</h3>
                </div>
                <div className='divider divider-horizontal mx-0 w-auto'></div>
                <div className='shadow-xl bg-white rounded-xl w-[240px]'>
                    <div className='h-[300px] shadow-lg shadow-gray-400 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${offer1})` }}>
                        <div className='h-full rounded-xl flex  flex-col justify-between text-white bg-black bg-opacity-30'>
                            <h2 className='text-2xl text-center font-josefin border-b-2 mx-3 mt-10'>
                                Wedding <br /> Package
                            </h2>
                            <div className='mb-4'>
                                <h4 className='ml-4 text-xl'>Discount</h4>
                                <img src={discount} alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className='font-josefin font-semibold my-4 text-center'>BOOK NOW</h3>
                </div>
                <div className='divider divider-horizontal mx-0 w-auto'></div>
                <div className='shadow-xl bg-white rounded-xl w-[240px]'>
                    <div className='h-[300px] shadow-lg shadow-gray-400 rounded-xl bg-cover bg-center' style={{ backgroundImage: `url(${offer1})` }}>
                        <div className='h-full rounded-xl flex  flex-col justify-between text-white bg-black bg-opacity-30'>
                            <h2 className='text-2xl text-center font-josefin border-b-2 mx-3 mt-10'>
                                Wedding <br /> Package
                            </h2>
                            <div className='mb-4'>
                                <h4 className='ml-4 text-xl'>Discount</h4>
                                <img src={discount} alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className='font-josefin font-semibold my-4 text-center'>BOOK NOW</h3>
                </div>
                <div className='divider divider-horizontal mx-0 w-auto'></div>
            </div>
        </section>
    );
};

export default BestOffers;