import styled from 'styled-components';
//import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
    position: relative;
    height: 88vh;

    // border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 88vh;
    }
`;

export const Title = styled.b`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`;

export const ContactBar = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;

    height: 12vh;

    border: 1px solid #800080;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 12vh;
    }
`;

export const LMContainer = styled.div`
    display: flex;

    // border: 1px solid #fce303;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 68vh;
        margin-top: 3vh;
    }
`;

export const LMMid = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    // border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 72vh;
        width: 100%;
      }
`;

export const LMBG = styled.div`
    position: absolute;
    display: flex;
    // justify-content: center;
    // align-items: center;

    // border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 72vh;
        width: 100%;
      }
`;

export const LMLogo = styled.img`
    height: 25%;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 40%;
    }
`;

export const LMDivide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // border: 1px solid #0000FF;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 100%;
        width: 50%;
    }
`;

export const LMLeft = styled.div`
    display: flex;
    
    border-top: 16vh solid #484232;
    border-right: 3vw solid transparent;

    margin-right: 10%;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 25%;
    }
`;

export const LMRight = styled.div`
    display: flex;
    
    border-bottom: 16vh solid #484232;
    border-left: 3vw solid transparent;

    margin-left: 10%;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 25%;
    }
`;

export const LMEach = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 30%;
    }
`;

export const Icon = styled.img`
    height: 25%;
    
    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 100%;
    }
`;

export const Text = styled.div`
    //border: 1px solid #0000FF;
    
    @media only screen and (min-width: 720px) {
        /*desktop*/
        padding: 2%;
        font-size: 14px;
    }
`;