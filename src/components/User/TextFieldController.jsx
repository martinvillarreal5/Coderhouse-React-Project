import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material/";

// component for react-hook-form to handle text fields from MUI to later validate with zod

export default function TextFieldController({ name, label, defaultValue="" }) {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: {value, ...otherFields} }) => (
                <TextField
                    {...otherFields}
                    value={value|| ''}
                    label={label}
                    variant='outlined'
                    error={!!errors[name]}
                    helperText={errors[name]?.message && (errors[name]?.message)}
                />

            )}
        />
    );
}