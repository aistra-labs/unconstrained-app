import { setUserdata } from "./redux/userSlice";

export function logout(dispatch) {
    dispatch(setUserdata({}));
}

export function processResponse(resp, dispatch) {
    if (!resp?.status) throw new Error('Invalid response');
    else {
        if (resp.status === 400) throw new Error('Invalid input');
        switch (resp?.status) {
            case 401:
            case 403: logout(dispatch);
                throw new Error('Not Authorized');
            default:
                return resp.json()
        }
    }
}