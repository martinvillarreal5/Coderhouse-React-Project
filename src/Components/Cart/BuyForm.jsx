import { CartContext } from "../CartContext";
import { useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import { Button, Box, TextField, Typography } from "@mui/material/";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"

export default function BuyForm() {
    const { cart, cartTotal, clearCart } = useContext(CartContext);
    const schema = z.object({
        firstName: z.string()
            .min(1, { message: "First Name is required" })
            .max(20, { message: "Must be 20 or fewer characters long" }),
        lastName: z.string()
            .min(1, { message: "Last Name is required" })
            .max(20, { message: "Must be 20 or fewer characters long" }),
        phone: z.string()
            .min(1, { message: "Phone is required" })
            .length(12, { message: "Phone must be 12 digits long" })
            .regex(/^\d+$/),
        //.transform(Number),
        email: z.string()
            .min(1, { message: "Email is required" })
            .email({ message: "Use a valid email format" }),
        confirmEmail: z.string()
            .min(1, { message: "Email is required" }),
    }).refine(data => data.email === data.confirmEmail, {
        message: "Email don't match",
        path: ['confirmEmail'],
    });
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = data => {
        const { firstName, lastName, email, phone } = data;
        const order = {
            buyer: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
            },
            items: cart.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    count: item.count,
                    description: item.description,
                    price: item.price,
                }
            }),
            total: cartTotal(),
            timeStamp: new Date().toLocaleString(),
            orderState: "generated",
        };
        if (order.items.length > 0) {
            console.log(order);
            const db = getFirestore();
            const orderRef = collection(db, "orders");
            addDoc(orderRef, order)
                .then(({ id }) => {
                    alert("order saved, order id: " + id);
                    clearCart();
                })
                .catch((err) => {
                    console.log("error saving order: " + err);
                });

        } else {
            console.log("No items in cart, probably a bug, order not saved");
        }
    };

    return (
        <>
            <Typography variant="h4">Checkout</Typography>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { mt: 2, mb: 2, width: 'auto', display: 'flex' }, mb: 3 }}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="First Name"
                            variant='outlined'
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message && (errors.firstName?.message)}
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Last Name"
                            variant='outlined'
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message && (errors.lastName?.message)}
                        />
                    )}
                />
                <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant='outlined'
                            error={!!errors.email}
                            helperText={errors.email?.message && (errors.email?.message)}
                        />
                    )}
                />
                <Controller
                    name="confirmEmail"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Confirm Email"
                            variant='outlined'
                            error={!!errors.confirmEmail}
                            helperText={errors.confirmEmail?.message && (errors.confirmEmail?.message)}
                        />
                    )}
                />
                <Controller
                    name="phone"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                        <TextField
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            {...field}
                            label="Phone Number"
                            variant='outlined'
                            error={!!errors.phone}
                            helperText={errors.phone?.message && (errors.phone?.message)}
                        />
                    )}
                />
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </>
    );
}