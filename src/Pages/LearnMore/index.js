import React from 'react'
import { Container, Title, ContactBar, LMContainer, LMMid, LMLogo, LMBG, LMDivide, LMLeft, LMRight, LMEach, Icon, Text } from './LearnMoreElements'

import LogoOnly from '../../General/Images/logoOnly.png'
import Responsive from '../../General/Images/LMIcons/responsive.png'
import Backend from '../../General/Images/LMIcons/backend.png'
import D_M from '../../General/Images/LMIcons/d_m.png'
import Webdes from '../../General/Images/LMIcons/webdes.png'
import Relations from '../../General/Images/LMIcons/relations.png'
import Conversation from '../../General/Images/LMIcons/conversation.png'

import './textstyles.css'

export default function LearnMore() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 720;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <Container>

            <Title>
                Development Options
            </Title>

            {width < breakpoint ?
                // mobile
                <LMContainer>
                    <LMBG
                        style={{ zIndex: '0' }}
                    >
                        <LMLeft />
                        <LMRight />
                        <LMLeft />
                        <LMRight />
                        <LMLeft />
                        <LMRight />
                    </LMBG>

                    <div
                        style={{ position: 'absolute', zIndex: '1', width: '100vw' }}>


                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                Stay involved in the design & development process
                            </Text>
                            <Icon src={Conversation} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Webdes}
                            />
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                Sleek frontend components designed for that modern touch
                                <br />
                                Powered by
                                <spam class="bold reactColour"> React</spam>
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                <span class="bold sColour">Fully responsive </span>
                                designs allowing compatibility for users on all devices
                            </Text>
                            <Icon src={Responsive} />
                        </LMEach>
                        <LMEach>
                            <Icon src={Backend} />
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                Backend options including Prospect Email Contact
                                & Authentication all setup in the cloud
                                <br />
                                Powered by
                                <span class="bold awsColour"> AWS</span>
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                Sit back whilst your deployment & maintenance is taken care of
                            </Text>
                            <Icon src={D_M} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Relations}
                                style={{ height: '70%' }}
                            />
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                We honour the relationships we build with our clients
                                <br />
                                <span class="bold warningColour">NO hidden fees</span>
                            </Text>
                        </LMEach>
                    </div>

                </LMContainer>
                :
                // desktop
                <LMContainer>
                    <LMMid>
                        <LMLogo src={LogoOnly} />
                    </LMMid>

                    <LMBG
                        style={{ zIndex: '0' }}
                    >
                        <LMDivide>
                            <LMLeft />
                            <LMLeft />
                            <LMLeft />
                        </LMDivide>
                        <LMDivide
                            style={{marginTop: '6vh'}}>
                            <LMRight />
                            <LMRight />
                            <LMRight />
                        </LMDivide>
                    </LMBG>

                    <LMDivide
                        style={{ zIndex: '1', marginLeft: '2vw', marginRight: '6vw' }}
                    >
                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                Stay involved in the design & development process
                            </Text>
                            <Icon src={Conversation} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Webdes}
                            />
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                Sleek frontend components designed for that modern touch
                                <br />
                                Powered by
                                <spam class="bold reactColour"> React</spam>
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                Sit back whilst your deployment & maintenance is taken care of
                            </Text>
                            <Icon src={D_M} />
                        </LMEach>
                    </LMDivide>
                    <LMDivide
                        style={{ zIndex: '1', marginTop: '6vh', marginLeft: '6vw', marginRight: '2vw' }}
                    >
                        <LMEach>
                            <Icon src={Responsive} />
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                <span class="bold sColour">Fully responsive </span>
                                designs allowing compatibility for users on all devices
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                Backend options including Prospect Email Contact
                                & Authentication all setup in the cloud
                                <br />
                                Powered by
                                <span class="bold awsColour"> AWS</span>
                            </Text>
                            <Icon src={Backend} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Relations}
                            />
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                We honour the relationships we build with our clients
                                <br />
                                <span class="bold warningColour">NO hidden fees</span>
                            </Text>
                        </LMEach>
                    </LMDivide>
                </LMContainer>
            }
        </Container>
    )
}
