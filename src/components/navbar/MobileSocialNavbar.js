import React from 'react'

export default function MobileSocialNavbar() {
    return (
        <div className='bottom-navbar'>
            <div className='py-5 mt-4 ms-2'>
                <i className="bi bi-facebook text-light h3"></i>
                <i className="bi bi-instagram text-light h3 ps-4"></i>
            </div>
            <button type="button" className="btn bg-light-blue text-white px-5">Book Now</button>
        </div>
    )
}
