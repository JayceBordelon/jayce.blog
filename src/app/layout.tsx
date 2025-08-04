
import "./globals.css";
import { ThemeProvider } from 'next-themes'

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="px-6">
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}