import axios from 'axios';

const url = // 'heroku link';
 'http://localhost:5000/testimonials';

export const fetchTestimonials = () => axios.get(url);
export const createTestimonials = (newTestimonial) => axios.post(url, newTestimonial);
