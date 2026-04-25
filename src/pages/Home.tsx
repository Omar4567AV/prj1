import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container mt-4 mt-lg-5">
            <div className="p-4 p-lg-5 mb-4 bg-light rounded-3 border shadow-sm">
                <div className="container-fluid py-3 py-lg-5 text-center">
                    <h1 className="display-4 display-lg-5 fw-bold">🏠 Home Page</h1>
                    <p className="fs-5 fs-lg-4 mt-3">Welcome to the main hub of MyShop. Explore our top features and latest updates.</p>
                    <button className="btn btn-primary btn-lg mt-3 mt-lg-4" type="button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
