export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>Here is about-us !!!</h1>
            &copy; Next JS is great!
            {children}
        </div>
    )
}