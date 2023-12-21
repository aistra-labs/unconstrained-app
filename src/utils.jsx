import { setUserdata } from "./redux/userSlice";

export function logout(dispatch) {
    dispatch(setUserdata({}));
}

function wait(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

function fetchRetry(requestObj, dispatch, delay = 3000, tries = 3) {
    if (tries <= 0) {
        logout(dispatch);
        throw new Error('Not Authorized');
    }
    function onError(err) {
        const triesLeft = tries - 1;
        if (triesLeft < 0) {
            logout(dispatch);
            throw new Error('Not Authorized');
        }
        return wait(delay).then(() => fetchRetry(requestObj, delay, triesLeft));
    }
    return fetch(...requestObj).catch(onError);
}

export function processResponse(resp, dispatch, requestObj, retry = 3) {
    if (!resp?.status) throw new Error('Invalid response');
    else {
        if (resp.status === 400) throw new Error('Invalid input');
        switch (resp?.status) {
            case 401:
            case 403:
                return fetchRetry(requestObj, dispatch)
            default:
                return resp.json()
        }
    }
}