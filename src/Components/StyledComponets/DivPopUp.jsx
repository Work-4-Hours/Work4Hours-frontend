import styled from "styled-components";

export const DivPopUp = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background:  var(--color-gradient-2);
    display: ${props => props.isOpen ? 'block' : 'none'};
    z-index: 2;
    animation: var(--animation-show-slow) 200ms;
/* 
    display: flex;
    justify-content: center;
    align-items: center;  */
`;

