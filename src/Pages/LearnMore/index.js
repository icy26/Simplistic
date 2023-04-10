import React from 'react'
import { Container, Title, LMContainer, LMMid, LMLogo, LMBG, LMDivide, LMLeft, LMRight, LMEach, Icon, Text } from './LearnMoreElements'

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
                                We work one-to-one with you, to design solutions 
                                <span class="bold reactColour"> tailored </span>
                                to your business & processes
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
                                Innovative designs driven by 
                                <br />
                                your brands aesthetics
                                <br />
                                <text
                                    style={{fontSize: '12px'}}
                                >
                                    Powered by
                                    <spam class="reactColour"> React</spam>
                                </text>
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
                                style={{textAlign: 'right'}}
                            >
                            Cloud based service options including
                            <br />
                            Email Contact & Authentication
                            <br />
                            <text 
                                style={{fontSize: '12px'}}
                            >
                                Powered by
                                <span class="awsColour"> AWS</span></text>
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text
                                style={{ textAlign: 'left' }}
                            >
                                We will take care of your deployment & maintenance ensuring your website is
                                <br />
                                <span class="bold sColour">live 24/7</span>
                            </Text>
                            <Icon src={D_M} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Relations}
                                style={{ height: '60%' }}
                            />
                            <Text
                                style={{ textAlign: 'right' }}
                            >
                                We are committed to delivering a
                                <span class="bold warningColour"> first class service </span>
                                & take pride in the relationships we build with our customers
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
                        style={{ zIndex: '1', marginLeft: '1vw', marginRight: '6vw' }}
                    >
                        <LMEach>
                            <Text>
                                We work one-to-one with you, to design solutions
                                <br />
                                <span class="bold sColour"> tailored </span>
                                to your business & processes
                            </Text>
                            <Icon src={Conversation} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Webdes}
                            />
                            <Text>
                                Innovative designs driven by your brands aesthetics
                                <br />
                                <text
                                    style={{fontSize: '12px'}}
                                >
                                    Powered by
                                    <spam class="reactColour"> React</spam>
                                </text>
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text>
                                We will take care of your deployment & maintenance
                                <br />
                                ensuring your website is
                                <span class="bold sColour"> live 24/7</span>
                            </Text>
                            <Icon src={D_M} />
                        </LMEach>
                    </LMDivide>
                    <LMDivide
                        style={{ zIndex: '1', marginTop: '6vh', marginLeft: '6vw', marginRight: '1vw' }}
                    >
                        <LMEach>
                            <Icon src={Responsive} />
                            <Text>
                                <span class="bold sColour">Fully responsive </span>
                                designs allowing compatibility for users on all devices
                            </Text>
                        </LMEach>
                        <LMEach>
                            <Text>
                                Cloud based service options including
                                <br />
                                Email Contact & Authentication
                                <br />
                                <text
                                    style={{fontSize: '12px'}}
                                >
                                    Powered by
                                    <span class="awsColour"> AWS</span>
                                </text>
                            </Text>
                            <Icon src={Backend} />
                        </LMEach>
                        <LMEach>
                            <Icon
                                src={Relations}
                                style={{height: '70%'}}
                            />
                            <Text
                            style={{paddingLeft: '1vw'}}>
                                We are committed to delivering a
                                <span class="bold sColour"> first class service </span>
                                and take pride in the relationships built with our customers
                            </Text>
                        </LMEach>
                    </LMDivide>
                </LMContainer>
            }
        </Container>
    )
}
