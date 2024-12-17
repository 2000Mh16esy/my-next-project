import Hero from "../components/Hereo";
import Sheet from "../components/Sheet";

type Props = {
    children: React.ReactNode;
};
export default function NewsLayout({ children }: Props) {
    return (
        <>
        <Hero title="News" sub="ニュース"/>
        <Sheet>{children}</Sheet>
        </>
    );
}