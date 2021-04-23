import styled from 'styled-components'


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    

    background: #870000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    height: 100%;
`;

export const LeftSide = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;

    img {
    max-height: 100vh;
}
    
`;


 export const RightSide = styled.section `
    background-color: #190A05;


    position: absolute;
    top: 15%;
    left: 60%;

    box-shadow: 0 0 1em red;

    width: 30%;
    height: 70%;

    padding: 24px;


    h1 {
    margin: 0 auto;
    margin-top: 10%;
    max-width: 70%;

    border-radius: 24px;

    background-color: rgba(255,255,255,0.5);

    text-align: center;
    font-size: 32px;
    font-weight: bolder;

    color: black;
}    
`;
    

