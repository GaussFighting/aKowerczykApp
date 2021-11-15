import React, {useEffect} from 'react';
import TopImage from './TopImage';
import MPContact from './MPContact';
import MPAbout from './MPAbout';
import MPOffers from './MPOffers';
import MPServices from './MPServices';
import MPUsefulLinks from './MPUsefulLinks';
import MPNews from './MPNews';
import MPCertificates from './MPCertificates';
import mainPageImage from '../styles/images//living-room.jpg';


function MainPage() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div>
            <TopImage image={mainPageImage} position={78} />
            <div className="py-5">
                <MPAbout />
                <MPServices />
                <MPOffers />
                <MPNews />
                <MPUsefulLinks />
                <MPCertificates />
                <MPContact />
            </div>
        </div>
    )
};

export default MainPage;
