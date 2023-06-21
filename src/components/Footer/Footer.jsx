import React from 'react';
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill, RiYoutubeFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className='pt-10 pb-2 bg-black px-3'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='italic text-3xl text-white mb-2'>Never miss a thing</h2>
                    <div className='text-xl lg:text-xl'>
                        <input className='border-0 focus:outline-0 bg-white rounded-s-full py-3 px-6' type="text" placeholder='Email Address' />
                        <input className='py-3 bg-gray-400 text-white px-8 rounded-full mt-3 md:mt-0 -ml-16' type="submit" value="Subscribe" />
                    </div>
                    <h2 className='italic text-3xl text-white mt-3'>Be in touch</h2>
                    <div className='text-white text-2xl flex items-center gap-1'>
                        <RiFacebookBoxFill className='w-7 h-7' />
                        <RiWhatsappFill className='w-7 h-7' />
                        <RiLinkedinBoxFill className='w-7 h-7' />
                        <RiYoutubeFill className='w-7 h-7' />
                        <RiInstagramFill className='w-7 h-7' />
                    </div>
                </div>
                <div className='text-white'>
                    <h2 className='italic text-3xl mb-2'>Never miss a thing</h2>
                    <ul className='space-y-1'>
                        <li>Contact us</li>
                        <li>Feedback</li>
                        <li>FAQ</li>
                        <li>Terms and conditions</li>
                        <li>Privacy Policy</li>
                        <li>Data Deletion Protocol</li>
                    </ul>
                </div>
            </div>
            <div className='text-white text-sm font-light text-center mt-16'>
                <p>2019-2021, FliqaIndia Pvt Ltd.        -ALL RIGHT RESERVED</p>
                <p>POWERED BY FLIQAINDIA PVT. LTD.</p>
                <p>VERSION 5.1.5</p>
            </div>
        </footer >
    );
};

export default Footer;