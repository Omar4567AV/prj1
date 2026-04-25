import React from 'react';

const SomethingElse: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="alert alert-info shadow-sm p-5" role="alert">
                <h2 className="alert-heading">🔮 Something Else</h2>
                <p className="fs-5">A miscellaneous section for everything else. Useful for FAQs, legal info, or experimental features.</p>
            </div>
        </div>
    );
};

export default SomethingElse;
