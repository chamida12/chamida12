import React from 'react'
import Cantik from '../Assets/Cantik.jpg'
import { QqOutlined } from '@ant-design/icons'

function MembuatTulisan() {
  return (
    <div>
      <h1> Syafak <QqOutlined /> Ike </h1>
      <img style={{width:"150px",height:"100px"}} src={Cantik}/>
    </div>
  )
}

export default MembuatTulisan
