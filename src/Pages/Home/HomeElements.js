import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    height: 88vh;
    padding-top: 12vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 90vh;
        padding-top: 10vh;
    }
    
    // border: 1px solid white;
`;

export const BodyContainer = styled.div`
    display: flex;

    flex-direction: column;
    height: 70vh;
    margin-top: 3vh;
    margin-left: 5vw;
    margin-right: 5vw;

    border: 2px solid #A09EA0;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;

        border: 4px solid #A09EA0;   
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
    margin-left: 10%;
    margin-right: 10%;
    

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-left: 20%;
        margin-right: 20%;
    }

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
    margin-right: -240px;
    margin-top: -80px;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 88%;
        margin-right: -300px;
    }
`;

export const Option = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4.5vh;
    width: 84vw;
    margin-top: 2vh;
    margin-left: 8vw;
    margin-right: 8vw;

    border: 2px solid #A09EA0;

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