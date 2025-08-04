export interface BlogPostMetaData {
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    readTime: string;
}


export const blogEntriesMetaData: BlogPostMetaData[] = [
    {
        id: 'hacked-blog',
        title: 'How My Simple Blog Got Hacked... Twice',
        category: 'Next',
        date: '2025-08-4',
        description: "Over the last three years, I have rewritten my blog three times: First in basic html and js, then with react, and finally here with Next. Here's what I learned...",
        readTime: '5 min',
    }

]