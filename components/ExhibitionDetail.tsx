import { Exhibition } from '@/types';
import Link from 'next/link';
import styled from 'styled-components';

const DetailContainer = styled.div`
    padding: 20px;
    margin: 0 auto; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    border-radius: 8px; 
    background-color: #fff; 
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem; 
    color: #333; 
`;

const Date = styled.p`
    text-align: center;
    font-size: 1.2rem; 
    color: #666; 
`;

const Description = styled.p`
    margin: 20px 0;
    font-size: 1rem; 
    line-height: 1.5; 
    color: #555; 
`;

const Image = styled.img`
    width: 100%;
    border-radius: 8px;
    margin: 20px 0; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LinkStyled = styled(Link)`
    display: block; 
    text-align: center; 
    color: #3498db; 
    text-decoration: none; 
    font-weight: bold; 
    
    &:hover {
        text-decoration: underline; 
    }
`;

const ExhibitionDetail = ({ exhibition }: { exhibition: Exhibition }) => {
    return (
        <DetailContainer>
            <Title>{exhibition.title}</Title>
            <Date>{exhibition.begindate} - {exhibition.enddate}</Date>
            <Description>{exhibition.description || "No description available."}</Description>
            {exhibition.images.length > 0 ? (
                <Image src={exhibition.images[0].baseimageurl} alt={exhibition.title} />
            ) : (
                <p>No images available.</p>
            )}
            <LinkStyled href={exhibition.url}>{exhibition.url}</LinkStyled>
        </DetailContainer>
    );
};

export default ExhibitionDetail;