import styled from 'styled-components';
import Link from 'next/link';
import { ExhibitionSummary } from '@/types';
const ExhibitionListContainer = styled.ul`
    width: 95%;
    list-style-type: none;
    padding: 0;
`;

const ExhibitionItem = styled.li`
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    transition: background 0.3s;

    &:hover {
        background: #f0f0f0;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none; 
    color: blue; 
`

const ExhibitionList = ({ data } : {data : ExhibitionSummary[]}) => {
    return (
        <ExhibitionListContainer>
            {data.map((exhibition : ExhibitionSummary) => (
                <ExhibitionItem key={exhibition.exhibitionid}>
                    <StyledLink href={`/Exhibition/${exhibition.exhibitionid}`}>
                        <h2>{exhibition.title}</h2>
                        <p>{exhibition.begindate} - {exhibition.enddate}</p>
                    </StyledLink>
                </ExhibitionItem>
            ))}
        </ExhibitionListContainer>
    );
};

export default ExhibitionList;