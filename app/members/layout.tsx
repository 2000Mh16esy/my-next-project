import Sheet from "@/app/components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
    return <Sheet>{children}</Sheet>;
}
