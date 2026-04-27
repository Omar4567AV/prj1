import React from 'react';
import Button from '@mui/material/Button';

const SomethingElse: React.FC = () => {
    return (
        <div className="container mt-4 mt-lg-5">
            <div className="alert alert-info shadow-sm p-4 p-lg-5" role="alert">
                <h2 className="alert-heading fs-1">🔮 Something Else</h2>
                <p className="fs-5">A miscellaneous section for everything else. Useful for FAQs, legal info, or experimental features.</p>
            </div>
            <div>
                <Button variant="contained">KING</Button>
            </div>
        </div>
    );
};

export default SomethingElse;
