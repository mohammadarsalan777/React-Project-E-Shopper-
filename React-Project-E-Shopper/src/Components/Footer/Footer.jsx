import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest, FaAddressBook, FaWalking, FaCartArrowDown } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='text-center shadow bg-white rounded'>
            <div className='bg-dark text-light text-center mt-4 shadow  mb-4 bg-dark rounded  '>
                <h1 className='mt-5'>E-Shopper</h1>
                {/* <h1>Footer</h1> */}
                <img className='mb-3 ml-2' src={'/src/images/logo.png'} height={'150px'} alt="" style={{ cursor: 'pointer' }} />
                <div className='ml-5' style={{ cursor: 'pointer' }}>
                    <FaTwitter className='m-2' size={30} color="#1DA1F2" />
                    <FaFacebook className='m-2' size={30} color="#1877F2" />
                    <FaInstagram className='m-2' size={30} color="#C13584" />
                    {/* Add other social icons as needed */}
                    <FaPinterest className='m-2' size={30} color='red' />
                    <FaAddressBook className='m-2' size={30} color='green' />
                    <FaCartArrowDown className='m-2' size={30} color='#fff' />
                </div>

            </div>

            <p className='mt-3'><b>@Created By <span className='text-danger'>Arsalan-</span>2023</b></p>
        </footer>
    )
}

export default Footer
