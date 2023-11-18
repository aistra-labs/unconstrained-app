import { useState } from "react";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { processResponse } from "../../utils";
import "./style.css";

function getAlert(isSuccess = true) {
    switch (isSuccess) {
        case true:
            return (
                <div style={{ position: "fixed", bottom: 0, left: 0, width: '100%', zIndex: 9999, borderRadius: 0 }}>
                    <Alert key={'success'} variant={'success'} dismissible>
                        Subscription successful
                    </Alert>
                </div>
            );
        default:
            return (
                <div style={{ position: "fixed", bottom: 0, left: 0, width: '100%', zIndex: 9999, borderRadius: 0 }}>
                    <Alert key={'danger'} variant={'danger'} dismissible style={{ marginBottom: 0 }}>
                        Failed to Subscribe
                    </Alert>
                </div>
            );
    }
}

const sendEmail = (token, dispatch, email, onSuccess, onError) => {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: { token }
    };

    fetch(`https://dev.api.unconstrained.work/newsLetter/subscriber?email=${email}`, requestOptions)
        .then(response => processResponse(response, dispatch))
        .then(result => {
            onSuccess(getAlert())
            console.log(result);
        })
        .catch(error => {
            onError(getAlert(false));
            console.log('error', error);
        });
}

const SubscribeComponent = ({ title = 'Sign up and receive the lastest news via email.' }) => {
    const userData = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const [email, updateEmail] = useState();
    const [alert, setAlert] = useState(null);
    const onError = comp => setAlert?.(comp);
    const onSuccess = comp => setAlert?.(comp);
    return (
        <>
            <div className="sub-links">
                <span>{title}</span>
                <InputGroup className="subscribe-style">
                    <Form.Control
                        placeholder="Email address"
                        aria-label="Email address"
                        aria-describedby="basic-addon2"
                        className="email-input"
                        onChange={e => updateEmail(e.target.value)}
                    />
                    <Button className="subscribe-bn" variant="btn-custom" onClick={() => sendEmail(userData?.token, dispatch, email, onSuccess, onError)}>
                        <InputGroup.Text className="subscribe-btn" id="basic-addon2">Subscribe</InputGroup.Text>
                    </Button>
                </InputGroup>
            </div>
            {alert}
        </>
    );
}

export default SubscribeComponent;
