import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 125vh;

    border: 1px solid white;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 90vh;
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
    height: 12vh;
    bottom: 0;

    border: 1px solid #800080;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 12vh;
    }
`;

export const LMContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 120vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        height: 82vh;
        margin-top: 2vh;
    }
`;

export const LMMid = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    height: 82vh;
    width: 100%;
`;

export const LMBG = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 120vh;
    width: 100%;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        flex-direction: row;
        height: 82vh;
        width: 100%;
      }
`;

export const LMLogo = styled.img`
    height: 30%;
`;

export const LMDivide = styled.div`
    height: 100%;
    width: 50%;
`;

export const LMLeft = styled.div`
    border-top: 14vh solid #484232;
    border-right: 4vw solid transparent;
    margin-right: 17vw;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        border-top: 20vh solid #484232;
        border-right: 4vw solid transparent;
        margin-right: 10%;
        margin-bottom: 8vh;
    }
`;

export const LMRight = styled.div`
    border-bottom: 14vh solid #484232;
    border-left: 4vw solid transparent;
    margin-left: 17vw;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        border-bottom: 20vh solid #484232;
        border-left: 4vw solid transparent;
        margin-left: 10%;
        margin-bottom: 8vh;
    }
`;

export const LMEach = styled.div`
    display: flex;
    align-items: center;

    height: 14vh;
    margin-bottom: 7vh;

    margin-left: 2vw;
    margin-right: 2vw;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 20vh;
        margin-bottom: 8vh;

        margin-left: 0;
        margin-right: 0;
    }
`;

export const Icon = styled.img`
    height: 100%;
    
    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 100%;
    }
`;

export const Text = styled.div`
    font-size: 14px;
    
    @media only screen and (min-width: 720px) {
        /*desktop*/
        padding: 2%;
        font-size: 14px;
    }
`;