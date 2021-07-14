import React from 'react'
import Hero from '../Components/Hero/Hero'
import SearchByLan from '../Components/SearchByLan/SearchByLan'
import Popular from '../Components/Popular/Popular'
import Footer from '../Components/Footer/Footer'
function Home() {
    return (
        <div>

            <Hero />
            <SearchByLan />
            <Popular />
            <Footer />
        </div>
    )
}

export default Home
