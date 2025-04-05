"use client";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
export default function Home(){
  return (
    <Container>
      <Nav/>
      <Main>
        <h1>Welcome!</h1>
        <img src="https://s3.amazonaws.com/media.harvardartmuseums.org/production/uploaded_files/tour_builder/Index-Calderwood-Courtyard-01.jpg"/>
        <p>Explore the exhibitions at the Harvard Art Museums.</p>
      </Main>
      <Footer/>
    </Container>
  );
}