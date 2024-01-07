import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { setUserdata, setToken } from '../../redux/userSlice'
import SuccessModal from "./successPaymentModal";
import FailedModal from "./failedPaymentModal";

function useLogin() {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const isSuccess = searchParams.get("success");
    const isFailure = searchParams.get("cancel");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            setShowSuccess(true);
        }
        else if (isFailure) {
            setShowFailed(true);
        }
    }, [isSuccess, isFailure])

    useEffect(() => {
        const profileData = {
            name: searchParams.get("name"),
            email: searchParams.get("email"),
            image: searchParams.get("image"),
        }
        const token = searchParams.get("token");
        if (token) {
            dispatch(setUserdata(profileData));
            dispatch(setToken(token));
            setSearchParams('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function showPaymentStatusModal() {
        return (
            <>
                <SuccessModal show={showSuccess} handleClose={() => {
                    setShowSuccess(false);
                    searchParams.delete('success');
                    setSearchParams(searchParams);
                }} />
                <FailedModal show={showFailed} handleClose={() => {
                    setShowFailed(false);
                    searchParams.delete('cancel');
                    setSearchParams(searchParams);
                }} />
            </>
        )
    }

    return { token, showPaymentStatusModal };
}

export default useLogin;