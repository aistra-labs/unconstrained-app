import { setUserdata, setToken, showLogoutMessage } from "./redux/userSlice";

export function logout(dispatch) {
    dispatch(setUserdata({}));
    dispatch(setToken(null));
    dispatch(showLogoutMessage(true));
}

function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

export function processResponse(resp, dispatch, requestObj, retry = 3) {
    if (!resp?.status) throw new Error('Invalid response');
    if (retry <= 0) {
        logout(dispatch);
        throw new Error('Not Authorized');
    }
    else {
        if (resp.status === 400) throw new Error('Invalid input');
        switch (resp?.status) {
            case 401:
            case 403:
                return wait(3000).then(()=>processResponse(resp, dispatch, requestObj, retry - 1))
            default:
                return resp.json()
        }
    }
}