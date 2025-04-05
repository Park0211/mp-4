"use client"
import { useState, useEffect } from "react"
import { ExhibitionSummary } from "@/types";
import Nav from "@/components/Nav";
import ExhibitionList from "@/components/ExhibitionList";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Button from "@/components/Button";
export default function ExhibitionPage(){
    const [exhibitions, setExhibitions] = useState<ExhibitionSummary[]>([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      async function fetchExhibitions() {
        setLoading(true)
        setError(null);
        try{
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Exhibition?apikey=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`);
          if (!res.ok) {
            throw new Error('Failed to fetch exhibition details'); 
          }
          const data = await res.json();
          setExhibitions((prev) => [...prev, ...data.records]);
          setLoading(false)
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
      fetchExhibitions()
    }, [page]);

    const loadMoreExhibitions = () => {
      setPage(prev => prev + 1);
    }
    return (
        <Container>
            <Nav/>
            <Main>
              <h1>Exhibitions</h1>
              {error && <p style={{ color: 'red' }}>Error: {error}</p>}
              <ExhibitionList data = {exhibitions}/>
              <Button
                onClick={loadMoreExhibitions}
                disabled={loading}
              >{loading ? 'Loading...' : 'Load More'}</Button>
            </Main>
            <Footer/>
        </Container>
    )
}