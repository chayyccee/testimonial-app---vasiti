import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (testimonials = [], action) => {

    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...testimonials, action.payload];
        default:
            return testimonials;
    }
}