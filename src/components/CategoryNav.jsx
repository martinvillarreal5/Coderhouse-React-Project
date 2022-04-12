import { Container, Box, Button } from "@mui/material/";
import { Link } from "react-router-dom";

export default function CategoryNav() {
    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="center" alignItems="center"
                sx={{
                    p: 3,
                }}
            >
                <Button size="small" color="primary" 
                sx={{
                    p: 1,
                }}>
                    <Link to={`/category/category1`}>Category 1</Link>
                </Button>
                <Button size="small" color="primary" 
                sx={{
                    p: 1,
                }}>
                    <Link to={`/category/category2`}>Category 2</Link>
                </Button>
            </Box>
        </Container>
    )
}