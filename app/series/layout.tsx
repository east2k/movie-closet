import Header from "@/components/Header";

const MovieLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default MovieLayout;
