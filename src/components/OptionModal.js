import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel='Option Modal'
            onRequestClose={props.handleClearOption}
        >
            <h3>{props.selectedOption}</h3>
            <button onClick={props.handleClearOption}>Close</button>
        </Modal>
    </div>
)

module.exports = {
    OptionModal
}