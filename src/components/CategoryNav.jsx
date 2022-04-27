import { Container, Box, Button, Divider } from "@mui/material/";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          component={Link}
          to={`/category/category1`}
          sx={{
            p: 1,
            m: .5,
          }}
        >
          Category 1
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          component={Link}
          to={`/category/category2`}
          sx={{
            p: 1,
          }}
        >
          Category 2
        </Button>
      </Box>
      <Divider sx={{ mb: "1rem" }} />
    </Container>
  );
}
