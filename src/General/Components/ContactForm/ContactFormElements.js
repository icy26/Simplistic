import styled from 'styled-components';

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8%;
    margin-right: 8%;
    justify-content: space-between;

    height: 24vh;
    margin-top: 2vh;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 36vh;
        margin-top: 4vh;
    }
`;

export const ContactInput = styled.input`
    height: 18%;
    background: #1f1e1f;
    color: #c8c4c8;

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
      }
`;

export const ContactSubmit = styled.button`
    height: 20%;
    background: #1f1e1f;
    color: #e6e5e5;
    font-size:;

    border: 1.5px solid #a09ea0;

    :hover {
        background: #282628;
      }

    @media only screen and (min-width: 720px) {
        /*desktop*/
    }
`;