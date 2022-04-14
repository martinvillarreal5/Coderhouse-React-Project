import { Container } from "@mui/material";

export default function AppShell(){
    return (
        <>
            <Container maxWidth={false}
            sx={{
                display: "flex",
                flexFlow: "column",
                height: "100%",
            }}/>
        </>
    )
}