import React from 'react'
import { Container, Left, Right, Each, Icon, Text, Middle } from './ContactBarElements'

import Instagram from '../../Images/instagram.png'
import At from '../../Images/at.png'

export default function ContactBar() {

    return (
        <Container>
            <Left>
                <text>
                    Simplistic
                </text>
            </Left>
            <Middle>
                <Each>
                    <Icon src={Instagram}/>
                    <Text>Simplistic</Text>
                </Each>
                <Each>
                    <Icon src={At}/>
                    <Text>
                        contact@simplistic.com
                    </Text>
                </Each>
            </Middle>
            <Right>
                <Text>Terms & Conditions</Text>
                <Text>Privacy Notice</Text>
            </Right>
        </Container>
    )
}