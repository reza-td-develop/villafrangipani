import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import CopyRight from '../../../components/copyright/CopyRight'
import SingleGalleries from '../../../components/galleries/SingleGalleries'

export default function Home() {
    return (
        <div>
            <Navbar />
            <SingleGalleries />
            <Footer />
            <CopyRight />
        </div>
    )
}
