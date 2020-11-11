import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="Home background"
            />

            <div className="home__row">
                <Product 
                    id="12312341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={16.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product 
                    id="12312342"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={364}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12312343"
                    title="Off Topic Adult Party Game - Fun Board and Card Game for Group Game Night"
                    price={29.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81HBOEzRlhL._AC_SL1500_.jpg"
                />
                <Product 
                    id="12312344"
                    title="Calvin Klein Women's Modern Cotton Bralette"
                    price={60}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81lwrWImf5L._AC_UY550_.jpg"
                />
                <Product 
                    id="12312345"
                    title="UGG Women's Classic Cardy"
                    price={149.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81rkGAQkl7L._AC_UY625_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12312346"
                    title="Presto 03430 Pizzazz Plus Rotating Oven"
                    price={54}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/719hxr%2BcjEL._AC_SX679_.jpg"
                />
            </div>
           
        </div>
    )
}

export default Home;
