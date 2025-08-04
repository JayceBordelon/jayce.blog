import {notFound} from 'next/navigation';
import {Metadata} from "next";
import {getPostContentById, getPostMetaDataById} from "@/lib/getPost";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";


interface PageProps {
    params: {
        id: string;
    };
}

export default async function PostPage({params}: PageProps) {
    const {id} = await params;
    const postMetaData = getPostMetaDataById(id);
    const content = await getPostContentById(id);


    if (!postMetaData || !content) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-4xl mx-auto">
                <article>
                    <header className="mb-8">
                        <h1 className="font-heading text-foreground mb-4">
                            {postMetaData.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground">
                            <Badge>{new Date(postMetaData.date).toLocaleDateString()}</Badge>
                            <span>•</span>
                            <Badge>{postMetaData.readTime} read</Badge>
                            <span>•</span>
                            <Badge>
                                {postMetaData.category}
                            </Badge>
                        </div>
                    </header>

                    <div
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                </article>
            </div>
            <footer className={"justify-center flex pt-4"}>
                <Button asChild size={"lg"}>
                    <Link href="/">Take Me Home</Link>
                </Button>
            </footer>
        </div>
    );
}


export async function generateMetadata({params}: { params: { id: string } }): Promise<Metadata> {
    const {id} = await params
    const post = await getPostMetaDataById(id);
    if (!post) return {title: "Not Found"}
    return {
        title: post.title,
        description: post?.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    };
}