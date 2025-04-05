import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
  margin-top: 20px;
`;

const FooterLink = styled(Link)`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2025 Chanho Park. All rights reserved.</p>
      <FooterLink href="/about">About Us</FooterLink>
    </FooterContainer>
  );
}