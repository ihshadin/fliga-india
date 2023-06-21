import React from 'react';
import discoverImg from '../../assets/discover-bg.png';

const DiscoverIdeas = () => {
    return (
        <section className='px-2 pt-20 pb-5 lg:px-10 bg-no-repeat bg-center bg-cover text-white' style={{ backgroundImage: `url(${discoverImg})` }}>
            <h3 className=' text-6xl !font-thin'>Discover</h3>
            <h2 className='font-bebas text-7xl leading-none'>Graphic Design Ideas</h2>
            <h2 className='font-bebas text-7xl leading-10'>and services</h2>
            <h4 className='font-thin text-4xl uppercase mt-8 mb-10'>From branding to marketing</h4>
            <div className='mx-auto text-xl lg:text-2xl'>
                <input className='border border-black rounded-s-full py-3 px-16' type="text" placeholder='what kind of design you are looking for?' />
                <input className='py-3 bg-black text-white border border-black px-24 rounded-full mt-3 md:mt-0 -ml-12' type="submit" value="Search" />
            </div>
        </section>
    );
};

export default DiscoverIdeas;