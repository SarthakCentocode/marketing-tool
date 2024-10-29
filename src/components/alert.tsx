import { Alert } from "@mui/material";


function AlertMessage({message, sx}:{
    message: string,
    sx: any,
}) {

    return (
        <Alert variant="filled" severity="error" sx={sx}>
            {message}
        </Alert>
    );
    
}