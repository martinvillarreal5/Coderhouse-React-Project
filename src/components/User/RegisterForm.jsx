import { useForm, Controller } from "react-hook-form";
import { Button, Box, TextField } from "@mui/material/";
//import { RegisterSchema } from "../../Utils/RegisterSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"


export default function RegisterForm() {
    const schema = z.object({
        email: z.string()
            .min(1, { message: "Email is required" })
            .email({ message: "Use a valid email format" }),
        password: z.string()
            .min(1, { message: "Password is required" })
            .min(8, { message: "Must be 8 or more characters long" })
            .max(20, { message: "Must be 20 or fewer characters long" }),
        confirmPassword: z.string().min(1, { message: "Password is required" }),
    }).refine(data => data.confirmPassword === data.password, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });
    
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(schema), mode: "onChange"
    });
    const onSubmit = data => console.log(data);
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { mb: 2, width: 'auto', display: 'flex' }, }}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="email"
                        variant='outlined'
                        error={!!errors.email}
                        helperText={errors.email?.message && (errors.email?.message)}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Password"
                        variant='outlined'
                        error={!!errors.password}
                        helperText={errors.password?.message && (errors.password?.message)}
                    />
                )}
            />
            <Controller
                control={control}
                name="confirmPassword"
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Confirm Password"
                        variant='outlined'
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message && (errors.confirmPassword?.message)}
                    />
                )}
            /> 
            <Button variant="contained" type="submit">Submit</Button>
        </Box>
    );
}
