import styled from 'styled-components';


export const ContactLabel = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;
    right: -2px;

    top: 76vh;
    height: 40px;
    width: 160px;

    background: #1f1e1f;
    border: 2px solid #A09EA0;
    border-radius: 40px 0px 0px 40px;
    font-weight: 550;

    :hover {
        background: #3c3a3c;
    }

    @media only screen and (min-width: 720px) {
        /*desktop*/
        top: 80vh;
        width: 180px;

        border-radius: 25px 0px 0px 25px;
    }
`;

export const Blur = styled.div`
    position: fixed;
    z-index: 2;
    top: 12vh;
    height: 88vh;
    width: 100vw;
    
    background-color: rgba(100, 100, 100, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    @media only screen and (min-width: 720px) {
        /*desktop*/
        top: 10vh;
        height: 90vh;
    }
`;

export const Inner = styled.div`
    position: fixed;
    z-index: 3;
    display: flex;
    flex-direction: column;

    top: 28vh;
    left: 50%;
    width: 84vw;
    margin-left: -42vw;

    background: #1f1e1f;
    border: 2px solid #A09EA0;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        width: 60vw;
        margin-left: -30vw;
    }

`;

export const ContactInput = styled.input`
    height: 8vh;
    margin-top: 2vh;
    margin-left: 3vw;
    margin-right: 3vw;

    background: #1f1e1f;
    color: #ebe6f0;
    font-size: 16px;

    border: none;
    border-bottom: 1.5px solid #a09ea0;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #a09ea0;
        opacity: 1; /* Firefox */
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #a09ea0;
    }

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 2vh;
        margin-left: 2vw;
        margin-right: 2vw;
      }
`;

export const ContactSubmit = styled.button`
    height: 8vh;
    margin-top: 2vh;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 2vh;

    background: #1f1e1f;
    background: transparent;
    color: #ebe6f0;

    font-size: 16px;
    font-family: Verdana, sans-serif;

    border: 1.5px solid #a09ea0;

    :hover {
        background: #3c3a3c;
    }

    @media only screen and (min-width: 720px) {
        /*desktop*/
        margin-top: 2vh;
        margin-left: 2vw;
        margin-right: 2vw;
        margin-bottom: 2vh;
    }
`;