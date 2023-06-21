import React from 'react';
import blogImg1 from '../../assets/blog-1.png';
import blogImg2 from '../../assets/blog-2.png';
import tending1 from '../../assets/blog-tending-1.png'
import tending2 from '../../assets/blog-tending-2.png'
import tending3 from '../../assets/blog-tending-3.png'

const Blogs = () => {
    return (
        <section className='px-2 lg:px-10 py-10 bg-[#DDF8F3]'>
            <div className='mb-12'>
                <h2 className='text-4xl font-bold text-[#4C696D]'>Our Blogs</h2>
                <p className='text-xl'>Check out our Latest Blog</p>
            </div>
            <div className='flex gap-7'>
                <div className='basis-[35%] relative shadow-lg shadow-slate-500 rounded-xl h-80 bg-cover bg-center' style={{ backgroundImage: `url(${blogImg1})` }}>
                    <div className='bg-black text-white p-9 bg-opacity-70 absolute top-0 bottom-0 left-0 right-28 rounded-lg'>
                        <h3 className='font-semibold text-2xl'>Featured on: Sep 15, 2021</h3>
                        <h2 className='font-light text-5xl font-jura'>Wedding Photography at Goa</h2>
                    </div>
                </div>
                <div className='basis-[35%] relative shadow-lg shadow-slate-500 rounded-xl h-80 bg-cover bg-center' style={{ backgroundImage: `url(${blogImg2})` }}>
                    <div className='bg-black text-white p-9 bg-opacity-70 absolute top-0 bottom-0 left-0 right-28 rounded-lg'>
                        <h3 className='font-semibold text-2xl'>Featured on: Sep 15, 2021</h3>
                        <h2 className='font-light text-5xl font-jura'>Photography: Expectations vs. Reality</h2>
                    </div>
                </div>
                <div className='basis-[30%]'>
                    <div className='flex justify-between'>
                        <h4 className='font-jura text-xl font-bold'>Trending Now</h4>
                        <button className='text-sm'>View All</button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <img className='w-24 h-20 object-cover rounded-md shadow-md shadow-slate-600' src={tending1} alt="" />
                        <div>
                            <h4 className='text-sm font-bold'>Creative Industries are on the verge of depletion due to COVID-19</h4>
                            <p className='text-xs mt-1'>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                    <div className='divider my-1'></div>
                    <div className='flex gap-4 items-center'>
                        <img className='w-24 h-20 object-cover rounded-md shadow-md shadow-slate-600' src={tending2} alt="" />
                        <div>
                            <h4 className='text-sm font-bold'>Photography: Expectations vs. Reality</h4>
                            <p className='text-xs mt-1'>Most of the time without any hands-on experience in photography, professional and advanced photography actually</p>
                        </div>
                    </div>
                    <div className='divider my-1'></div>
                    <div className='flex gap-4 items-center'>
                        <img className='w-24 h-20 object-cover rounded-md shadow-md shadow-slate-600' src={tending3} alt="" />
                        <div>
                            <h4 className='text-sm font-bold'>Wedding Photography at Goa</h4>
                            <p className='text-xs mt-1'>Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;