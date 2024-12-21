import {getNewsList} from "@/app/libs/microcms";
import NewsList from "@/app/components/NewsList";
import Pagination from "@/app/components/Pagination";
import { NEWS_LIST_LIMIT } from "../components/constants";

 export default async function Page () {
    const {contents: news, totalCount } = await getNewsList({
      limit: NEWS_LIST_LIMIT,
    });

    return(
      <>
      <NewsList news ={news}/>
      <Pagination totalCount={totalCount}/>
      </>
    );
 }