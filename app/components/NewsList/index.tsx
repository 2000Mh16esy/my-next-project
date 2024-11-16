import Image from "next/image";
import styles from "./index.module.css"
import { News } from "@/app/libs/microcms";

type Props = {
    news: News[];
}

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事ありません。</p>;
    }
    return (
        <ul>
            {news.map((article) =>(
                <li key ={article.id} className={styles.list}>
                    <div className={styles.link}>
                        <Image
                        className={styles.image}
                        src='/public/no-image.png'
                        alt= "No Image"
                        width={1200}
                        height={630}
                        />
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <span className={styles.tag}>{article.category.name}
                                </span>
                                <span className={styles.date}>
                                    <Image
                                    src="/public/clock.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                    priority
                                    />
                                    {article.publishedAt}
                                </span>
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    );
}