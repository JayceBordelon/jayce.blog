import fs from 'fs';
import path from 'path';
import {marked, Renderer} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/nord.min.css';
import {blogEntriesMetaData} from "@/app/posts";

const postsDirectory = path.join(process.cwd(), 'content');

const renderer = new Renderer();

renderer.code = ({text, lang}) => {
    const language = (lang && hljs.getLanguage(lang)) ? lang : 'plaintext';

    const highlightedCode = hljs.highlight(text, {language}).value;

    return `<pre><code class="hljs language-${language}">${highlightedCode}</code></pre>`;
};

marked.use({renderer});

export function getPostContentById(id: string) {
    try {
        const fullFilePath = `${postsDirectory}/${id}.md`;
        const markdown = fs.readFileSync(fullFilePath, 'utf8');
        return marked(markdown);
    } catch {
        return "<p>No content</p>";
    }
}

export function getPostMetaDataById(id: string) {
    return blogEntriesMetaData.find(post => post.id === id)
}