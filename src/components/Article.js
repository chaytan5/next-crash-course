import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const Article = ({ article }) => {
	return (
		<Link
			href={"/article/[id]"}
			className={articleStyles.card}
			as={`/article/${article.id}`}
		>
			<h3>{article.title} &rarr;</h3>
			<p>{article.excerpt}</p>
		</Link>
	);
};

export default Article;
