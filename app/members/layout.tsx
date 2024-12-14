import Sheet from "@/app/components/Sheet";
import Hero from "../components/Hereo";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
    <>
        <Hero title="Members" sub="メンバー"/>
        <Sheet>{children}</Sheet>;
    </>
    );
}
