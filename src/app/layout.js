import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'GK Inside',
    description: 'Crud',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={`max-w-3xl mx-auto`}>
            <Navbar/>
            <div className={`mt-8`}>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
