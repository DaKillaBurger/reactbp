import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

function Other() {

  const {nicknameObj: [nickname, setNickname]}=useOutletContext()
  
  function handleChangeNickname(event) {
    setNickname(event.target.value)
  }

  console.log("other/nickname:", nickname )

  return (
    <div>
      <p>{nickname}</p>
      <form>
        <label>change nickname</label>
        <input placeholder={nickname} onChange={handleChangeNickname} />
      </form>
    </div>
  )
}

export default Other