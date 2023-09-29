import React from 'react';
import './SingleGalleries.scss';
import img from '../../assets/img/home/villa_frangipani_canggu_private_pool.jpg';

export default function SingleGalleries() {
    return (
        <div className='w-100'>
            <img className='w-100' src={img} />
            <div className='bg-light-blue position-absolute gallery-text-container p-5 fw-bold text-white h4 w-50'>Villa Frangipani Canggu, Bali</div>
        </div>
    )
}
