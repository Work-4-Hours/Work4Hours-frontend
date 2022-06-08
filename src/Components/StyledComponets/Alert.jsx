import styled from "styled-components";

export const Alert = styled.div`

padding: 10px 20px;
background: #f4f8ff;
border-radius: 5px;
color: #507fd1;
font-family: var(--font-1);
font-size: 20px;

display: ${props => props.isAlert ? 'block' : 'none'};
animation: var(--animation-show-slow) 500ms;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 5;

    display: flex;
    flex-direction: column;
`;

