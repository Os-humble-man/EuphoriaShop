import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layouts/Header'
import AdsCards from '../components/AdsCards'
import NewArrival from '../components/NewArrival'
import Promotion from '../components/Promotion'
import Frame from '../components/Banner'
import Banner from '../components/Banner'
import MenCategories from '../components/MenCategories'
import BrandBanner from '../components/BrandBanner'
import Footer from '../layouts/Footer'
import Feedback from '../components/Feedback'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <AdsCards />
            <NewArrival />
            <Promotion />
            <Banner />
            <MenCategories />
            <BrandBanner />
            <Feedback />
            <Footer />
        </div>
    )
}
