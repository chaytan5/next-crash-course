import Article from "./Article";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
	return (
		<div className={articleStyles.container}>
			{articles?.map((article) => (
				<Article key={article.id} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
