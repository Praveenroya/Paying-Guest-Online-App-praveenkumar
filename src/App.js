import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './components/bookingForm';
import ReviewForm from './components/reviewForm';
import './style.css';
const App = () => {
    const [pgId] = useState('123'); // Replace with actual PG ID

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/book-pg" element={<BookingForm />} />
                    <Route path="/leave-review" element={<ReviewForm pgId={pgId} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
