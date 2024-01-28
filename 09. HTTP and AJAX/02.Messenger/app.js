function attachEvents() {

    let textArea = document.getElementById('messages');

    let inputAuthor = document.querySelector('input[name="author"]');
    let inputContent = document.querySelector('input[name="content"]');

    document.getElementById('submit').addEventListener('click', () => {

        let objToPost = {
            author: inputAuthor.value,
            content: inputContent.value
        }

        fetch(`http://localhost:3030/jsonstore/messenger`, {
            method: 'POST',
            body: JSON.stringify(objToPost)
        }).catch(error => {

            console.log('Error')
            return error;
        })

    });

    document.getElementById('refresh').addEventListener('click', () => {

        fetch(`http://localhost:3030/jsonstore/messenger`).then(response => {
            return response.json();
        }).then(messages => {

            inputAuthor.value = '';
            inputContent.value = '';
            textArea.textContent = '';
            
            let output = [];

            for (const message of Object.values(messages)) {

                output.push(`${message.author}: ${message.content}`);
            }
            textArea.textContent = output.join('\n');
        })
    });
}

attachEvents();