import styled from 'styled-components';

export const Embla = styled.div`
//position: relative;
background-color: #f7f7f7;
padding: 20px;
max-width: 670px;
margin-left: auto;
margin-right: auto;

overflow: hidden;
`;

export const EmblaViewport = styled.div`
overflow: hidden;
width: 100%;
border: 5px solid #FF0000;
`;

export const EmblaContainer = styled.div`
display: flex;
//user-select: none;
//-webkit-touch-callout: none;
//-khtml-user-select: none;
//-webkit-tap-highlight-color: transparent;
margin-left: -10px;
`;

export const EmblaSlide = styled.div`
//position: relative;
min-width: 100%;
padding-left: 10px;
`;

export const EmblaSlideInner = styled.div`
//position: relative;
overflow: hidden;
height: 190px;
`;

export const EmblaSlideImage = styled.img`
//position: absolute;
//display: block;
// top: 50%;
// left: 50%;
// width: auto;
// min-height: 100%;
// min-width: 100%;
// max-width: none;
// transform: translate(-50%, -50%);
`;

export const EmblaDots = styled.div`
display: flex;
list-style: none;
justify-content: center;
padding-top: 10px;
`;