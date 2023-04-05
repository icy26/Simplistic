import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 20vh;
    margin-top: 5vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 15vh;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35%;
    height: 100%;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-top: 2vh;
    margin-bottom: 2vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 0;
        margin-bottom: 0;
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
    font-size: 10px;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        font-size: 12px;
    }
`;

