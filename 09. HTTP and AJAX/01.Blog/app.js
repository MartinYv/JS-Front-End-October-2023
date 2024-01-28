function attachEvents() {
    let posts = document.getElementById('posts');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');
    
    document.getElementById('btnLoadPosts').addEventListener('click', () => {

        fetch(`http://localhost:3030/jsonstore/blog/posts`).then(response =>{
            return response.json();
        }).then(postsObj => {

            for (const [id, post] of Object.entries(postsObj)) {

                let optionalPost = document.createElement('option');
                optionalPost.value = id;
                optionalPost.textContent = post.title;
                
                postBody.textContent = post.body;
                
                posts.appendChild(optionalPost);

            }
        }).catch(error =>{
            return error;
        });
    })

    document.getElementById('btnViewPost').addEventListener('click', () =>{

        postComments.innerHTML = '';

        fetch(`http://localhost:3030/jsonstore/blog/comments`).then(response => {
            return response.json();
        }).then(comments =>{
            // id, postId, text
           let selectedPostId = posts.value;
         
           let postToEdit = Array.from(posts.querySelectorAll('option')).find(x=>x.value == selectedPostId);
           postTitle.textContent = postToEdit.textContent;

           let commentsForPost = Object.values(comments).filter(obj => obj.postId == posts.value);
           
           for (const comment of commentsForPost) {
                let li = document.createElement('li');
                li.textContent = comment.text;
            
                postComments.appendChild(li);
           }

           postComments.textContent = postToEdit.comments.text;
             
        }).catch(error =>{
            return error;
        })
    });

}

attachEvents();