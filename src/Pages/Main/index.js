import React from 'react'

import { Big } from './MainElements'
import Home from '../Home'
import LearnMore from '../LearnMore'
import ContactBar from '../../General/Components/ContactBar'

export default function Main() {
  return (

    <Big>
      <Home />
      <LearnMore />
      <ContactBar />
    </Big>
  )
}
