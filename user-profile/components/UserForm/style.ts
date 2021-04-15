import styled from 'styled-components';

export const Form = styled.form `   
    display: grid;
    margin-top: 24px;
`;

export const Wreapper = styled.div`
    margin: 0 auto;
`;

export const Input = styled.input`
    border: none;
    padding: 4px 8px;
    margin: 24px 12px;

    border: 0;
`;

export const Label = styled.label`
    padding: 8px;
    margin-left: 6px;

    position: absolute;
    top: -8px;
`;

export const Name = styled.div `
    position: relative;
`;

export const CompletedName = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Birth = styled.div`
    position: relative;
`;

export const Id = styled.div`
    position: relative;
`;

export const Job = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

`;

export const JobLabel = styled.label`
    padding: 8px;
    margin-left: 6px;

    position: absolute;
    top: 60px;
`;
