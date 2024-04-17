import '@/styles/globals.css'

export const metadata = {
    title:  "Next JS AI Prompt Share",
    description: "Discover & share AI Prompts"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient">

                </div>
            </div>
            <main className="app">
                {children}
            </main>
        </body>

    </html>
  )
}