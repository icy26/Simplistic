import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 15vh;
    margin-top: 5vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 15vh;
    }
`;

export const Left = styled.div`
    display: none;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        display: flex;
        align-items: center;
        justify-content: center;

        width: 35%;
        height: 100%;
    }
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 60%;
    margin-left: 6vw;
    margin-top: 2vh;
    margin-bottom: 2vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        width: 35%;
        margin-top: 0;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 40%;
    margin-top: 2vh;
    margin-bottom: 2vh;

    padding-left: 2vw;
    border-left: 2px solid #a09ea0; 

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 0;
        width: 30%;
    }
`;

export const Each = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.img`
    height: 3.5vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 4vh;
    }
`;

export const Text = styled.text`
    margin-left: 2vw;
    font-size: 12px;
`;

