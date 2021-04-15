import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    

    color: white;
}

body {
    background-color:	#483D8B;
    display: flex;
    
    justify-content: center;
    align-items: center;

    margin: 150px auto;
}

`
