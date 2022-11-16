import React from 'react'

import { Big, Each } from './MainElements'
import Navbar from '../../General/Components/Navbar'
import Home from '../Home'

export default function Main() {
  return (
    
    <Big>
        <Navbar />
        {/* <Each>
          <Home />
        </Each> */}
        
        <Home />
    </Big>
  )
}
