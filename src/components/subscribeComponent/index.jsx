import { InputGroup } from "react-bootstrap";
import "./style.css";

const SubscribeComponent = ({ title = 'Sign up and receive the lastest news via email.' }) => {

    return (
        <>
            <div className="sub-links">
                <span>{title}</span>
                <InputGroup className="subscribe-style">
                        <a href="http://eepurl.com/iAgD2w" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                        <InputGroup.Text className="subscribe-btn" id="basic-addon2">Stay Connected</InputGroup.Text>
                        </a>
                </InputGroup>
            </div>
        </>
    );
}

export default SubscribeComponent;
