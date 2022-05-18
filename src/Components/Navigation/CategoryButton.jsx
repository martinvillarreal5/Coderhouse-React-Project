import { Button } from "@mui/material/";
import { Link } from "react-router-dom";

export default function CategoryButton({ category }) {

    return (
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
        
    );
}