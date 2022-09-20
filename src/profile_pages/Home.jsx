import styled from "styled-components";

const Section = styled.section`
    height:660px;
    text-indent:-9999px;
    background-image:url(./images/home.png);
    background-position:center center;
    background-size:cover;
`;

const Home = ()=>{
    return (
        <Section>Home</Section>
    );
}

export default Home;