import { Button, CircularProgress } from "@mui/material/";
import { Link } from "react-router-dom";

export default function CategoryButton({ category, isLoading }) {

    return (
        isLoading ? (
            <CircularProgress />
        ) : (
        <Button
            variant="outlined"
            size="small"
            color="primary"
            component={Link}
            to={`/category/${category.name}`}
            sx={{
                p: 1,
                m: .5,
            }}
        >
            {category.name}
        </Button>
        )
    );
}