import "./failedPaymentModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function FailedModal({ show=false, handleClose }) {

    return show ? (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
            <Modal.Dialog style={{margin:0}}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Failed</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="failed-msg">
                        <p className="text">You can check the order in a while.</p>
                        <FontAwesomeIcon icon={faCircleXmark} beat style={{ color: "#eb0a0a", }} size="6x" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    ) : null;
}

export default FailedModal;
