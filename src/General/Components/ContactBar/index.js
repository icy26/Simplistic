import React from 'react'
import { Container, Left, Right, Each, Icon, Text } from './ContactBarElements'

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
            <Right
                style={{width: '35%'}}
            >
                <Each>
                    <Icon src={Instagram}/>
                    <Text>Simplistic</Text>
                </Each>
                <Each>
                    <Icon src={At}/>
                    <Text>contact
                        <br />
                        @simplistic.com</Text>
                </Each>
            </Right>
            <Right
                style={{width: '30%', borderLeft: '2px solid #a09ea0'}}
            >
                <Text>Terms & Conditions</Text>
                <Text>Privacy Notice</Text>
            </Right>
        </Container>
    )
}