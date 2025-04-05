"use client"

import { Exhibition } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import ExhibitionDetail from '@/components/ExhibitionDetail';
import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Main from '@/components/Main';

export default function ExhibitionDetailPage(){
    const { id } = useParams();
    const [exhibition, setExhibition] = useState<Exhibition | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if(id){
            async function fetchExhibition() {
                setLoading(true);
                setError(null);
                try{
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Exhibition/${id}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                    if (!res.ok) {
                        throw new Error('Failed to fetch exhibition details'); 
                    }
                    const data = await res.json();
                    setExhibition(data);
                } catch(error){
                    if(error instanceof Error){
                        setError(error.message);
                    }
                    else{
                        setError('An unknown Error occurred');
                    }
                } finally{
                    setLoading(false);
                }
            }
            fetchExhibition();
        }
    }, [id]);

    if(loading || !exhibition) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>

    return (
        <Container>
            <Nav/>
            <Main>   
                <ExhibitionDetail exhibition={exhibition}/>
            </Main>
            <Footer/>
        </Container>  
    )
}