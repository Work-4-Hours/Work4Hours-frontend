import styled from "styled-components";

export const DefaultProfile = styled.div`
    background: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.small ? '40px' : '208px'};
    text-align: center;
`;

