import "./style.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

function LogoutModal({ show=false, handleClose }) {

    return show ? (
        <Modal
        show={show}
        onHide={handleClose}
        style={{maxWidth: '80vw'}}
        backdrop="static"
        keyboard={false}>
            <Modal.Dialog style={{margin:0}}>
                <Modal.Header closeButton>
                    <Modal.Title>Token Expired</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="logout-msg">
                        <p className="text">Token expired please login again.</p>
                        <FontAwesomeIcon icon={faClockRotateLeft} spin spinReverse style={{ color: "#eb0a0a", }} size="6x" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    ) : null;
}

export default LogoutModal;
