import React from 'react'
import './Modal.css'

function Modal({user, setShowModal}) {
  console.log(user)

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className="titleCloseBtn">
                <button 
                 onClick={ ()=>setShowModal(false) }
                 >
                    Sair
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal