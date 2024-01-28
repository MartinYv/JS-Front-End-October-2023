window.addEventListener("load", solve);

function solve() {

    let typeInput = document.getElementById('expense');
    let amountInput = document.getElementById('amount');
    let dateInput = document.getElementById('date');

    let previewList = document.getElementById('preview-list');
    let expensesList = document.getElementById('expenses-list');

    let addButtonForm = document.getElementById('add-btn');
    addButtonForm.addEventListener('click', addExpense);

    document.querySelector('.delete').addEventListener('click', () => { window.location.reload() });

    function addExpense(e) {
        e.preventDefault();

        let type = typeInput.value;
        let amount = amountInput.value;
        let date = dateInput.value;

        if (type != '' && amount != '' && date != '') {

            let li = document.createElement('li');
            li.className = 'expense-item';

            let article = document.createElement('article');

            let pType = document.createElement('p');
            pType.textContent = `Type: ${type}`;

            let pAmount = document.createElement('p');
            pAmount.textContent = `Amount: ${amount}$`;

            let pDate = document.createElement('p');
            pDate.textContent = `Date: ${date}`;

            let divButtons = document.createElement('div');
            divButtons.className = 'buttons';

            let editButton = document.createElement('button');
            editButton.classList.add('btn');
            editButton.classList.add('edit');
            editButton.textContent = 'edit';
            editButton.addEventListener('click', editExpense);

            let okButton = document.createElement('button');
            okButton.classList.add('btn');
            okButton.classList.add('ok');
            okButton.textContent = 'ok';
            okButton.addEventListener('click', confirmExpence);

            li.appendChild(article);

            article.appendChild(pType);
            article.appendChild(pAmount);
            article.appendChild(pDate);

            li.appendChild(divButtons);

            divButtons.appendChild(editButton);
            divButtons.appendChild(okButton);

            previewList.appendChild(li);

            addButtonForm.disabled = true;
            clearInputFields();
        }
    }

    function editExpense(e) {
    
        let expence = e.currentTarget.parentNode.parentNode;

        let paragraphs = Array.from(expence.querySelectorAll('article p'));

        let pType = paragraphs[0].textContent.split(': ')[1];
        typeInput.value = pType;

        pAmount = paragraphs[1].textContent.split(': ')[1].split('')[0];
        amountInput.value = pAmount;

        pDate = paragraphs[2].textContent.split(': ')[1];
        dateInput.value = pDate;

        addButtonForm.disabled = false;

        expence.remove();
    }

    function confirmExpence(e) {
debugger
        let expence = e.currentTarget.parentNode.parentNode;

        let divButtons = expence.querySelector('div');
        divButtons.remove();

        expensesList.appendChild(expence);

        addButtonForm.disabled = false;
    }
    
    function clearInputFields() {
        typeInput.value = '';
        amountInput.value = '';
        dateInput.value = '';
    }
}