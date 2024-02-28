"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { LoginRequest, LoginValidator } from "@/lib/validator/user"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"


type FormData = z.infer<typeof LoginValidator>

export default function LoginForm() {
    const {toast} = useToast()

    const form = useForm<LoginRequest>({
        resolver: zodResolver(LoginValidator),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const onSubmit = async (values: LoginRequest) => {
        const { username, password } = values
        try {
            const response = await axios.post('https://dummyjson.com/auth/login',
                JSON.stringify({ username: username, password: password }), {
                headers: { 'Content-Type': 'application/json' }
            })
            const email = JSON.stringify(response.data.email)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormDescription>The mock data to access the app:<br/>
                                username: <span className="font-medium text-gray-500">kminchelle </span> <br/>
                                password: <span className="font-medium text-gray-500">0lelplR </span> <br/>
                </FormDescription>

                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Your username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="******" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
