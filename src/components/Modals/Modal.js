import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import './Modal.css';

const Modal = (props) => {

    const { title, tag } = props;

    const { state, toggleModal } = useContext(ModalContext);

    const display = state[tag] ? 'block' : 'none';

    const handleClose = (origin, e) => {
        if(origin === 'close'){
            toggleModal(tag);
        }else if(origin === 'container' && e.target.className === 'modal'){
            toggleModal(tag);
        }
    }

    return (
        <div style={{display}} className="modal" onClick={(e) => handleClose('container', e)}>
            <div className="modal__content">
                <div className="modal__header">
                    <span className="modal__header-title">{title}</span>
                    <span className="close" onClick={(e) => handleClose('close', e)}>&times;</span>
                </div>
                { props.children }
            </div>
        </div>
    );
}

export default Modal;
