import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

body {
    color: #FFFFFF;

    height: 100vh;

        
    background: #870000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #190A05, #870000, #190A05);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #190A05, #870000, #190A05); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

} 


`