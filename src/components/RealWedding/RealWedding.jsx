import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg'
import wedding1 from '../../assets/wedding-1.png';
import wedding2 from '../../assets/wedding-2.png';
import wedding3 from '../../assets/wedding-3.png';

const RealWedding = () => {

    return (
        <>
            <section className='px-2 lg:px-10 py-10'>
                <div className='mb-12'>
                    <h2 className='text-4xl font-bold text-[#4C696D]'>Real Wedding</h2>
                    <p className='text-xl'>List your wedding and browse portfolio</p>
                </div>
                <div className='grid grid-cols-4 gap-12'>
                    <div className='p-3 rounded-lg bg-[#DDF8F3]'>
                        <img src={wedding1} alt="" />
                        <div className='grid grid-cols-3 items-center gap-1 mt-1'>
                            <img className='w-full' src={wedding2} alt="" />
                            <img className='w-full' src={wedding3} alt="" />
                            <img className='w-full' src={wedding2} alt="" />
                        </div>
                        <h4 className='text-xl font-bold mt-2'>Danielle & Ronnie</h4>
                        <p className='text-[#4C696D] mb-1'>38 photos, Kittery, Polland</p>
                    </div>
                    <div className='p-3 rounded-lg bg-[#DDF8F3]'>
                        <img src={wedding1} alt="" />
                        <div className='grid grid-cols-3 items-center gap-1 mt-1'>
                            <img className='w-full' src={wedding2} alt="" />
                            <img className='w-full' src={wedding3} alt="" />
                            <img className='w-full' src={wedding2} alt="" />
                        </div>
                        <h4 className='text-xl font-bold mt-2'>Danielle & Ronnie</h4>
                        <p className='text-[#4C696D] mb-1'>38 photos, Kittery, Polland</p>
                    </div>
                    <div className='p-3 rounded-lg bg-[#DDF8F3]'>
                        <img src={wedding1} alt="" />
                        <div className='grid grid-cols-3 items-center gap-1 mt-1'>
                            <img className='w-full' src={wedding2} alt="" />
                            <img className='w-full' src={wedding3} alt="" />
                            <img className='w-full' src={wedding2} alt="" />
                        </div>
                        <h4 className='text-xl font-bold mt-2'>Danielle & Ronnie</h4>
                        <p className='text-[#4C696D] mb-1'>38 photos, Kittery, Polland</p>
                    </div>
                    <div className='p-3 rounded-lg bg-[#DDF8F3]'>
                        <img src={wedding1} alt="" />
                        <div className='grid grid-cols-3 items-center gap-1 mt-1'>
                            <img className='w-full' src={wedding2} alt="" />
                            <img className='w-full' src={wedding3} alt="" />
                            <img className='w-full' src={wedding2} alt="" />
                        </div>
                        <h4 className='text-xl font-bold mt-2'>Danielle & Ronnie</h4>
                        <p className='text-[#4C696D] mb-1'>38 photos, Kittery, Polland</p>
                    </div>
                </div>
                <button className='text-2xl flex gap-3 py-4 px-6 bg-[#DDF9FF] mx-auto mt-10 rounded-lg shadow-lg'>View more weddings <CgArrowLongRight className='w-8 h-8' /> </button>
            </section>
        </>
    );
};

export default RealWedding;