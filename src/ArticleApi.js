import 'whatwg-fetch';

let ArticleApi = {
    fetchArticles() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json());
    },
};

export default ArticleApi;