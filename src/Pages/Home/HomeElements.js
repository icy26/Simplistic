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

    margin-top: 4vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 6vh;
    }
`;

export const OptionContainer = styled.div`
    //height: 20vh;
    display: flex;
    justify-content: space-around;
    
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;

    border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        margin-left: 18vw;
        margin-right: 18vw;
    }
`;

export const LoggedInOptionContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 55vh;

    border: 1px solid #FF0000;

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

    border: 1px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 6vh;
        width: 25vw;
    }
`;

export const LoggedInOption = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4vh;
    width: 48vw;

    border: 1px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 4vh;
        width: 16vw;
    }
`;

export const BodyContainer = styled.div`
    display: flex;

    flex-direction: column;
    height: 62vh;

    border: 1px solid #FF0000;  

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 60vh;
        flex-direction: row;
    }
`;

export const BodyWindow = styled.div`
    height: 100%;

    border: 1px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        width: 100%;
    } 
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 8vh;
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