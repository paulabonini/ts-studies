import styled from 'styled-components';

export const ProfileHeader = styled.header`
    display: flex;    
    flex-direction: column;
    justify-content: space around;
    align-items: center;


    width: 100%
    margin: 24px 0;

    padding: 24px;

    border-bottom: 1px solid gray;
`

export const ProfileImage = styled.img`
    border-radius: 50%;
    
    width: 15%;

    margin: 8px auto;
`

export const UserName = styled.h1`
   font-size: 24px;
`