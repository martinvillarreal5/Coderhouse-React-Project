import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox, Button, Box } from "@mui/material/";

export default function RegisterForm() {
    const { handleSubmit, watch, control, reset, formState: { errors } } = useForm(
        {
            defaultValues: {
                checkbox: false,
            }
        }
    );
    const onSubmit = data => alert(JSON.stringify(data));

    console.log(watch("email")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate inputs before invoking "onSubmit" */
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch', display: "flex" },

            }}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
        >
            <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField
                        id="firstNameTextField"
                        label="First Name"
                        
                        helperText={errors.firstName?.type === 'required' && "First name is required"}
                        //onChange={onChange} 
                        {...field}
                    />}
            />
            <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field}) =>
                    <TextField
                        id="lastNameTextField"
                        label="Last name"
                        helperText={errors.lastName?.type === 'required' && "Last name is required"}
                        //onChange={onChange} 
                        {...field}
                    />}
            />
            <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField
                        id="emailTextField"
                        label="Email"
                        helperText={errors.email?.type === 'required' && "Email is required"}
                        //onChange={onChange} 
                        {...field}
                    />}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <TextField
                        id="passwordTextField"
                        label="Password"
                        helperText={errors.password?.type === 'required' && "Password is required"}
                        {...field}
                    />}
            />
            <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) =>
                    <Checkbox
                    {...field}
                    />}
            />
            <Button type="submit">Submit</Button>
        </Box>
    );
}
