import React from 'react';
import './AppPromotion.scss';
import apple from '../../assets/images/appstore.jpg';
import google from '../../assets/images/googleplay.jpg';
const AppPromotion = () => {
    return (
        <section className="app-promotion">
            <div className="app-promotion__content">
                <h1 className="app-promotion__title">Transforma tu vida con TrainFit</h1>
                <p className="app-promotion__subtitle">
                    Descubre tu potencial con nuestra aplicación.
                </p>


                <h3 href="#download" className="">¡Descarga Ahora!</h3>

            </div>
            <div className="app-promotion__image d-flex justify-content-center align-items-center gap-2">
                <img src={apple} onClick={() => window.open('https://apps.apple.com/es/app/trainfit/id6471257280')} alt="App Store" className="app-promotion__store-logo" />
                <img src={google} onClick={() => window.open('https://play.google.com/store/apps/details?id=com.trainfit.trainfit')} alt="Google Play Store" className="app-promotion__store-logo" />
            </div>
        </section>
    );
};

export default AppPromotion;
