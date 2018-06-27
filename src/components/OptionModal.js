import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <div>
        <Modal
            className="modal"
            isOpen={!!props.selectedOption}
            contentLabel='Option Modal'
            onRequestClose={props.handleClearOption}
        >
            <h3 className="modal__title">Selected Menu</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearOption}>Close</button>
        </Modal>
    </div>
)

module.exports = {
    OptionModal
}