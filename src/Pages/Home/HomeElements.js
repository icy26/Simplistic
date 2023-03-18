import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    position: relative;
    padding-top: 12vh;
    height: 88vh;

    // border: 1px solid #000000;
`;

export const Slogan = styled.b`
    display: flex;
    justify-content: center;
    margin-top: 10vh;
`;

export const OptionContainer = styled.div`
    height: 20vh;
    display: flex;
    justify-content: space-around;
    
    flex-direction: column;
    align-items: center;
    align-content: space-around;
    margin-top: 20vh;

    border: 2px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        margin-left: 18vw;
        margin-right: 18vw;
        margin-top: 40vh;
    }
    
`;

export const LoggedInOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 55vh;

    border: 2px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        justify-content: end;
        margin-right: 5vh;
    }
    
`;

export const Option = styled(LinkS)`
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

export const LoggedInOption = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4vh;
    width: 48vw;

    border: 2px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 4vh;
        width: 16vw;
    }
`;

export const LoginButton = styled.button`
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
    width: 100%;
    bottom: 0;

    height: 12vh;

    border: 1px solid #800080;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 10vh;
    }
`;