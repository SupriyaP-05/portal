import React from "react"
import ReactDOM, { createPortal } from 'react-dom';
const { useState, Fragment } = React
// const Outsider = () => ReactDOM.createPortal(<h1>Hello</h1>, document.body)


const Modal = ({ children, onClose, open }: any) =>
    open ?
        createPortal(
            <div className='modal'>
                <button onClick={onClose} className='modal__close'>&times;</button>
                {children}
            </div>,
            document.body)
        : null

const Modalmain = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <button onClick={() => {setOpen(!open); console.log(open, 'open')}}>Show Modal?</button>
            <Modal open={open} onClose={() => setOpen(false)}>
                Test Modal
            </Modal>
        </Fragment>
    )
}

export default Modalmain;