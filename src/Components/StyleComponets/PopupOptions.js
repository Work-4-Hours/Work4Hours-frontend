import styled from "styled-components";

export const PopUpOptions = styled.div`
    border-radius: var(--border-radius-2);
    overflow: hidden;
    ${props=>props.isOpen ? 'visibility:visible; animation:animationPopupOptionsActivate .1s forwards;':'animation:animationPopupOptionsDeactivate .1s forwards;'}
    user-select: none;
    display:${props=>props.visibilidad};
`;

