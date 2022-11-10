import React from 'react'
import './Modal.css'
import { ModalBackground, modalContainer, titleCloseBtn, BotaoCaiFora, Texto } from './styled'

function Modal({user, setShowModal}) {
  console.log(user)

  return (
      <ModalBackground>
        <modalContainer>
            <titleCloseBtn>
                <BotaoCaiFora
                 onClick={ ()=>setShowModal(false) }
                 >
                    Sair
                </BotaoCaiFora>
            </titleCloseBtn>
            <div>
              <div>
                <img src={user.picture.large} alt=""/>
              </div>
              <div>
                <Texto>
                  {user.name.first + ' ' + user.name.last}
                </Texto>
                <Texto>
                  {user.location.country}
                </Texto>
              </div>
            </div>
        </modalContainer>
      </ModalBackground>
  )
}

export default Modal