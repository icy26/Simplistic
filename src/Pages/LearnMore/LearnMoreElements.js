import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    position: relative;
    height: 88vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        // Not sure if a height difference is needed
    }
`;

export const Title = styled.b`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
`;


export const Temp = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 5vh;
    width: 50vw;

    border: 2px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 8vh;
        width: 25vw;
    }
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