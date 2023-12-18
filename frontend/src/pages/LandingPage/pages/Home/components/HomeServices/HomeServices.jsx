import React from 'react'
import HomeServicesItem from './HomeServicesItem'
import img1 from './data-svgrepo-com.svg';
import img2 from './subscribe-svgrepo-com.svg';
import img3 from './user-settings.svg';
import img4 from './map-point.svg';
import img5 from './profile2-svgrepo-com.svg';

const HomeServices = () => {
    return (
        <div className="home-services page-container py-4">
            <div className="row justify-content-center" >
                <HomeServicesItem
                    style={{color:'blue'}}
                    image={img1}
                    title='Real-time Data'
                />
                <HomeServicesItem
                    image={img2}
                    title='Subscription Services'
                />
                <HomeServicesItem
                    image={img3}
                    title='User Settings'
                />
                <HomeServicesItem
                    image={img4}
                    title='Mapping Tools'
                />
                <HomeServicesItem
                    image={img5}
                    title='Profile Management'
                />
            </div>
        </div>
    )
}

export default HomeServices