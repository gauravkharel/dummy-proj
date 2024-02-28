import Login from "@/components/Login"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"

interface pageProps {

}

const page = ({ }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login here</CardTitle>
                <CardDescription>Welcome to dive into world of overwhelm.</CardDescription>
            </CardHeader>
            <CardContent>
                <Login />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>

    )
}

export default page