import 'whatwg-fetch';

let ArticleApi = {
    fetchArticles() {
        return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7440a28a8b304eb3aaa627f6044bacc9')
            .then((response) => response.json());
    },
};

export default ArticleApi;