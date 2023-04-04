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
        margin-top: 4vh;
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 8%;
    
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        margin: 0;
        margin-left: 25vw;
        margin-right: 25vw;
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

    height: 4.5vh;
    width: 100%;

    border: 1.5px solid #a09ea0;

    :hover {
        background: #3c3a3c;
    }

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 6vh;
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
    height: 64vh;

    // border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 60vh;
        flex-direction: row;
    }
`;

export const BodyWindow = styled.div`
    height: 100%;

    //border: 1px solid #0000FF;

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

export const Square = styled.div`
    position: absolute;

    top: 12vh;
    height: 25vh;
    width: 100vw;

    background: #484232;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        top: 10vh;
        height: 80vh;
        width: 36vw;
    }
`;

export const Triangle = styled.div`
    position: absolute;

    top: 37vh;
    width: 0; 
    height: 0; 
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-top: 10vh solid #484232;
    
    @media only screen and (min-width: 720px) {
        /*desktop*/
        left: 36vw;
        top: 10vh;
        width: 0;
        height: 0;
        border-top: 40vh solid transparent;
        border-bottom: 40vh solid transparent;
        border-left: 8vw solid #484232;
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