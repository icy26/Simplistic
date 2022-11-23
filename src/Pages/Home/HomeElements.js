import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    position: relative;
    padding-top: 12vh;
    height: 88vh;

    //border: 2px solid #FF0000;
`;

export const Slogan = styled.b`
    display: flex;
    justify-content: center;
`;

export const OptionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 8vh;
    margin-left: 18vw;
    margin-right: 18vw;

    border: 2px solid #FF0000;
`;

export const Option = styled(LinkS)`
    height: 8vh;
    width: 24vw;

    border: 2px solid #0000FF;
`;

export const Pad = styled.div`
    position: absolute;
    height: 12vh;
    width: 100%;
    bottom: 0;

    border: 1px solid #800080;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 10vh;
    }
`;