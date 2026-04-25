import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded-3 border shadow-sm">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">🏠 Home Page</h1>
                    <p className="fs-4 mt-3">Welcome to the main hub of MyShop. Explore our top features and latest updates.</p>
                    <button className="btn btn-primary btn-lg mt-4" type="button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
