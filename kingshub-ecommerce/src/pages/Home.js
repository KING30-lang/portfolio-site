import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to KingsHub E-commerce</h1>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;