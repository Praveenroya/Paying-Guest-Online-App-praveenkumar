import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Booking API
export const createBooking = async (bookingData) => {
    return await axios.post(`${API_URL}/booking`, bookingData);
};

export const getBookings = async () => {
    return await axios.get(`${API_URL}/booking`);
};

// Review API
export const createReview = async (reviewData) => {
    return await axios.post(`${API_URL}/review`, reviewData);
};

export const getReviews = async (pgId) => {
    return await axios.get(`${API_URL}/review/${pgId}`);
};
