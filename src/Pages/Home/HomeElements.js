import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`

    @media only screen and (min-width: 720px) {
        /*desktop*/
        padding-top: 10vh;
        height: 90vh;
    }
    
    // border: 1px solid white;
`;


export const Option = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4.5vh;
    width: 84vw;
    margin-left: 8vw;
    margin-right: 8vw; 
    // margin-top: 4vh;

    border: 2px solid #A09EA0;
    // border-radius: 6px;

    :hover {
        background: #3c3a3c;
    }

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 6vh;
        width: 40vw;
        margin-top: 3vh;
        margin-left: 30vw;
        margin-right: 30vw; 
    }
`;

export const BodyContainer = styled.div`
    display: flex;

    flex-direction: column;
    height: 64vh;

    // border: 1px solid red;
    border: 4px solid #A09EA0;
    // border-radius: 20px;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        height: 70vh;
        margin-top: 3vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }
`;

export const BodyWindow = styled.div`
    height: 100%;
    overflow: hidden;
    // border: 1px solid blue;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        width: 100%;
    } 
`;

export const TextWindow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    margin-left: 20%;
    margin-right: 20%;
`;

export const Text = styled.text`

    @media only screen and (min-width: 720px) {
        /*desktop*/
    }
`;

export const BGCont = styled.div`
    display: flex;
    justify-content: end;
`;

export const BG = styled.img`
    height: 88%;
    margin-right: -250px;
    margin-top: -120px;
    
    // border: 1px solid green;
`;

export const Pad = styled.div`
    position: absolute;
    width: 100%;
    height: 12vh;
    bottom: 0;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 10vh;
    }
`;