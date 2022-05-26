import styled from "styled-components";

export const TextError = styled.div` 
    color: #ac2828;
    font-family: var(--font-1);
    
    display: flex;
    align-items: center;    
    display: ${props => props.isError ? 'none' : 'block'};
`;