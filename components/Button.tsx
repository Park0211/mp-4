import styled from "styled-components";
const Button = styled.button`
    font-size: 16px; 
    color: white; 
    background-color: #3498db; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: background-color 0.3s ease; 

    &:hover {
        background-color: #2980b9; 
    }

    &:disabled {
        background-color: #95a5a6; 
        cursor: not-allowed; 
    }

    &:focus {
        outline: none; 
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5); 
    }
`

export default Button;