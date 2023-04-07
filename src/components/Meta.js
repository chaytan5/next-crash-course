import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta charSet="utf-8" />
			<link rel="icon" href="favicon.ico" type="image/x-icon" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Web dev news",
	keywords: "web development, javascript, nextjs",
	description: "Get the latest news in web dev technologies",
};

export default Meta;
