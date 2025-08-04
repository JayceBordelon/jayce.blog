"use client";

import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {blogEntriesMetaData} from "@/app/posts";
import {useRouter} from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const totalReadTime = blogEntriesMetaData.reduce((total, entry) =>
        total + parseInt(entry.readTime), 0
    );

    const handleRowClick = (entryId: string) => {
        router.push(`/posts/${entryId}`);
    };

    return (
        <div>
            <h1 className="text-center font-heading p-6 text-foreground">Posts</h1>
            <Table>
                <TableHeader className={"text-lg"}>
                    <TableRow>
                        <TableHead className={"text-center"}>Title</TableHead>
                        <TableHead className="hidden md:table-cell text-center">Category</TableHead>
                        <TableHead className="hidden lg:table-cell text-center">Date</TableHead>
                        <TableHead className="text-center">Read Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogEntriesMetaData.map((entry) => (
                        <TableRow
                            key={entry.id}
                            className="hover:bg-cyan-300 cursor-pointer "
                            onClick={() => handleRowClick(entry.id)}
                        >
                            <TableCell className="text-center">{entry.title}</TableCell>
                            <TableCell className="hidden md:table-cell text-center">{entry.category}</TableCell>
                            <TableCell className="hidden lg:table-cell text-center">
                                {new Date(entry.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-center">{entry.readTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className={"text-center"}>
                            {blogEntriesMetaData.length} Published Posts
                        </TableCell>
                        <TableCell className="hidden md:table-cell"></TableCell>
                        <TableCell className="hidden lg:table-cell"></TableCell>
                        <TableCell className="text-center">
                            {totalReadTime} min total
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}