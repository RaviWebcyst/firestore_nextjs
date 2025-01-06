import { deleteCookie } from "cookies-next";
import { deAuthenticate, authenticate, restoreAuthState } from "./auth-slice";

export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch(authenticate(user));
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

export const logoutUser = () => async (dispatch) => {    
    try {
        deleteCookie('token');
        dispatch(deAuthenticate());
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

export const checkLogin = () => async (dispatch) => {    
    try {
        const user = getCookie('token');
        dispatch(restoreAuthState(user));
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

