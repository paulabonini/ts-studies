import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    font-size: 20px;
    
    margin-top: 10%;
`;

export const Input = styled.input `
    border-radius: 8px;
    border: none;

    margin-top: 8px;    
    padding: 8px 16px;


    font-size: 16px;

    background-color: #C79898;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-bottom: 24px;
`;

export const Button = styled.button`
    width: 30%;
    margin-top: 24px;

    border-radius: 8px;
    border: none;

    font-size: 20px;
    font-weight: bold;

    padding: 8px 16px;;

    background-color: red;

    cursor: pointer;

    &:hover {
       filter: brightness(0.7);
    }
`;