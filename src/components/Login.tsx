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
import {  useContext, useEffect, useReducer, useState } from "react"
import { useRouter } from "next/navigation"
import LoginContext from "@/context/login-context"

type FormData = z.infer<typeof LoginValidator>

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const { toast } = useToast()
    const router = useRouter();
    
    const form = useForm<LoginRequest>({
        resolver: zodResolver(LoginValidator),
        defaultValues: {
            username: "",
            password: ""
        }
    })
    const handleLogin = (email) => {
        setEmail(email);
    };
    const onSubmit = async (values: LoginRequest) => {
        const { username, password } = values
        try {
            const response = await axios.post('https://dummyjson.com/auth/login',
                JSON.stringify({ username: username, password: password }), {
                headers: { 'Content-Type': 'application/json' }
            })
            const newemail = JSON.stringify(response.data.email)
            handleLogin(newemail)
            toast({
                title: `${username} is logged in.`,
                description: `${newemail}`,
            })
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <LoginContext.Provider value={{ email, handleLogin }}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormDescription>The mock data to access the app:<br />
                        username: <span className="font-medium text-gray-500">kminchelle </span> <br />
                        password: <span className="font-medium text-gray-500">0lelplR </span> <br />
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
        </LoginContext.Provider>

    )
}
