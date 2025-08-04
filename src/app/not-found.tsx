import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-9xl font-heading text-foreground mb-4">404</h1>
                <p className=" text-2xl text-foreground mb-4">Page not found</p>
                <Button asChild size={"lg"}>
                    <Link href="/">Take Me Home</Link>
                </Button>
            </div>
        </div>
    );
}