import styled from 'styled-components'


export const UserContainer = styled.div `
    background: #190A05;

    box-shadow: 0 0 1em red;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 40%;
    height: 40%;

    padding: 2rem;

    text-align: center;
    line-height: 3rem;
`;

export const Header = styled.header `
    margin: 3rem;

    border-bottom: 2px solid gray;
`;

export const Data = styled.div `
    font-size: 20px;
`;