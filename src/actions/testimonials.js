import { FETCH_ALL, CREATE } from '../constants/actionTypes';
import * as api from '../components/api';

export const getTestimonials = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTestimonials();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message); 
    }
};

export const createTestimonial = (testimonial) => async (dispatch) => {
    try {
        const { data } = await api.createTestimonials(testimonial);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};