window.addEventListener("load", solve);

function solve() {

    const titleInput = document.getElementById('task-title');
    const categoryInput = document.getElementById('task-category');
    const contentInput = document.getElementById('task-content');

    const publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', publishTask);

    function publishTask(e) {
        e.preventDefault();
        debugger
        if (titleInput.value != "" && categoryInput.value != '' && contentInput.value != "") {

            let list = document.getElementById('review-list');

            let li = document.createElement('li');
            li.className = 'rpost';

            let article = document.createElement('article');

            let h4Title = document.createElement('h4');
            h4Title.textContent = titleInput.value;

            let pCategory = document.createElement('p');
            pCategory.textContent = `Category: ${categoryInput.value}`;

            let pContent = document.createElement('p');
            pContent.textContent = `Content: ${contentInput.value}`;

            let editButton = document.createElement('button');
            editButton.classList.add('action-btn');
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', editPost);

            let postButton = document.createElement('button');
            postButton.classList.add('action-btn');
            postButton.classList.add('post');
            postButton.textContent = 'Post';
            postButton.addEventListener('click', publishPost);

            li.appendChild(article);

            article.appendChild(h4Title);
            article.appendChild(pCategory)
            article.appendChild(pContent);

            li.appendChild(editButton);
            li.appendChild(postButton);

            list.appendChild(li);

            clearInputFields();
        }
    }

    function clearInputFields() {
        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';
    }

    function editPost(e) {
        e.preventDefault();

        let liToRemove = e.currentTarget.parentNode;

        let postTitle = e.currentTarget.parentNode.querySelector('h4').textContent;

        let postParagraphs = e.currentTarget.parentNode.querySelectorAll('p');
        let postCategory = postParagraphs[0].textContent.split(': ')[1];
        let postContent = postParagraphs[1].textContent.split(': ')[1];

        titleInput.value = postTitle;
        categoryInput.value = postCategory;
        contentInput.value = postContent;

        liToRemove.remove();
    }

    function publishPost(e) {
        let publishedPostList = document.getElementById('published-list');

        let post = e.currentTarget.parentNode;

        let postButtons = post.querySelectorAll('button');
        postButtons.forEach(button => {
            button.remove();
        });

        publishedPostList.appendChild(post);
    }
}