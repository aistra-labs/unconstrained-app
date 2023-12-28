import "./successPaymentModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function SuccessModal({ show=false, handleClose }) {

    return show ? (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
            <Modal.Dialog style={{margin:0}}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Successfull</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="success-msg">
                        <p className="text">You can check the order in a while.</p>
                        <FontAwesomeIcon icon={faCircleCheck} beat style={{ color: "#4ac47f", }} size="6x" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    ) : null;
}

export default SuccessModal;
