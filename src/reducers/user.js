export const SET_USER = 'SET_USER';
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const SET_USER_FAILED = 'SET_USER_FAILED';

export const initialState = {
    name: '',
    email: '',
    gender: '',
    fetching: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                fetching: true
            }
        case SET_USER_SUCCESS:
            return {
                ...state,
                ...payload.userData,
                fetching: initialState.fetching
            }
        case SET_USER_FAILED:
            return {
                ...state,
                fetching: true
            }

        default: return state;
    }
};