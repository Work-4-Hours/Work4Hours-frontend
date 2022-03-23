import styled from "styled-components";

export const PopUp = styled.div`
    border-radius: var(--border-radius-2);
    box-shadow: 0 0 10px var(--gray-shadow-1);
    background: ${props => props.bg};
    overflow: hidden;
    ${props=>props.isOpen ? 'animation:animationOpacityActivate .2s forwards;':'animation:animationOpacityDeactivate .2s forwards;'}
    display: ${props => props.isOpen ? 'block' : 'none'};
    user-select: none;
   
`;