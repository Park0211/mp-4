import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.nav`
    background: #333;
    padding: 10px;
    text-align: center;
`;

const NavLink = styled(Link)`
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Nav(){
    return (
        <NavContainer>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Exhibition">Exhibition</NavLink>
        </NavContainer> 
    )
}