import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    position: relative;
    height: 83vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 85vh;
    }
`;

export const Title = styled.b`
    display: flex;
    justify-content: center;
    margin-top: 5vh;
`;

export const ContactBar = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;

    height: 12vh;

    border: 1px solid #800080;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 15vh;
    }
`;