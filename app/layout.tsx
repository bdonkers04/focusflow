import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"FocusFlow — Make space for meaningful work",description:"A beautifully simple workspace for tasks, focus sessions, and weekly progress."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark"><body>{children}</body></html>}

