import { Container } from "@mui/material"


export default function Footer() {
  return (
      <footer
        style={
        {
            backgroundColor: "#1976d2",
            color: "white",
            flex: "0 1 auto",
        }}>
            <Container maxWidth="lg"
            sx={{
                p: "1rem",
            }}>
                <p> lorem ipsum </p>
            </Container>
        </footer>
  );
}