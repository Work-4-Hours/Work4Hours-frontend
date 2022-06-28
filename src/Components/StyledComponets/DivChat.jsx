import styled from "styled-components";

export const DivChat = styled.div`
    border-radius: var(--border-radius-2);
    box-shadow: 0 0 10px var(--gray-shadow-1);
    background: #FFFF;
    overflow: hidden;
    transition: all .2s ease-in-out;
    animation: var(--animation-show-slow) 300ms;
    display: ${props => props.isActive ? 'block' : 'none'};
`;