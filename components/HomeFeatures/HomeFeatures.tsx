import './homeFeatures.css'

const HomeFeatures = () => {
    return(
        <section className='home-features-section'>
            <div className='home-features-heading-container'>
                <h2 className='home-features-heading'>Features</h2>
                <p className='home-features-subheading'>A look behind the curtain into the artistry, collaboration, and passion that shape our world.</p>
            </div>

            <div className='home-features-container'>
                <div className='home-features-main-media'></div>

                <div className='home-features-other-media-container'>
                    <div className='home-features-other-media'></div>
                    <div className='home-features-other-media'></div>
                </div>
            </div>
        </section>
    )
}

export default HomeFeatures