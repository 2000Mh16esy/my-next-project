import { getNewsDetail } from "@/app/libs/microcms";

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page(props: Props) {
    const data= await getNewsDetail(params.slug);
    return <div>{data.title}</div>;
}