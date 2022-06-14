import styled from "styled-components";

export const TextError = styled.div` 
    color: #ac2828;
    font-family: var(--font-1);
    
    display: flex;
    align-items: center;    
    gap: 6px;
    display: ${props => props.isError && 'none'};
`;