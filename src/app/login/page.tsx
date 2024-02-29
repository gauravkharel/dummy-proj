import Login from "@/components/Login"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import Image from "next/image"
import image from '../cover.jpg'
interface pageProps {

}

const page = ({ }) => {
    return (
        <Card className="flex flex-row">
            <Card className="w-1/2">
                <CardHeader>
                    <CardTitle>Login here</CardTitle>
                    <CardDescription>Welcome to dive into world of overwhelm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Login />
                </CardContent>
                <CardFooter>
                    <p>Happy shopping!</p>
                </CardFooter>
            </Card>
            <Card className="w-1/2 relative ">
                <Image src={image} alt="Banner" fill sizes="(min-width: 808px) 50vw, 100vw"
                />
            </Card>
        </Card>

    )
}

export default page