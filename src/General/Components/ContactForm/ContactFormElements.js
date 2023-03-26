import styled from 'styled-components';

export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8%;

    height: 16vh;
    margin-top: 16vh;

    justify-items: space-between;
    justify-content: space-between;
    align-items: space-between;
    align-content: space-between;

    border: 1px solid #FF0000;

    @media only screen and (min-width: 720px) {
        /*desktop*/
        height: 22vh;
        margin-top: 12vh;
    }
`;

export const ContactInput = styled.input`
`;

export const ContactSubmit = styled.button`
`;