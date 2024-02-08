function getArticleGenerator(articles) {
    let articlesContent = Array.from(articles);
    const contentRef = document.getElementById('content');

    return () => {
        if(!articlesContent.length) {
            return;
        }

        let currentArticleValue = articlesContent.shift();
        let newArticleElement = document.createElement('article');
        newArticleElement.textContent = currentArticleValue;
        contentRef.appendChild(newArticleElement);
    }
}
