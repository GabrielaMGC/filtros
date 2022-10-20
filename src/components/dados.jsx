import React from 'react'
import User from './user'
import { Galeria } from './styled'

function Dados({users}) {
  return (
    <>
    <Galeria>
      {users.map((user)=>
      <User
        user={user}
      />
      )}
    </Galeria>
    </>
  )
}

export default Dados