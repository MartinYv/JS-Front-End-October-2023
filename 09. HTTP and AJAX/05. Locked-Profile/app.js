function lockedProfile() {
    let profilesObj = {};

    fetch(`http://localhost:3030/jsonstore/advanced/profiles`).then(response => {
        return response.json();
    }).then(profiles => {

        for (const profile of Object.values(profiles)) {

            const [id, username, email, age] = Object.values(profile);
            profilesObj[id] = { username, email, age };

            const main = document.getElementById('main');

            const profileDiv = document.createElement('div');
            profileDiv.classList.add('profile');

            const userIconImg = document.createElement('img');
            userIconImg.src = './iconProfile2.png';
            userIconImg.classList.add('userIcon');

            const lockLabel = document.createElement('label');
            lockLabel.textContent = 'Lock';

            const lockRadioInput = document.createElement('input');
            lockRadioInput.setAttribute('type', 'radio');
            lockRadioInput.setAttribute('name', 'user1Locked');
            lockRadioInput.setAttribute('value', 'lock');
            lockRadioInput.setAttribute('checked', 'checked');

            const unlockLabel = document.createElement('label');
            unlockLabel.textContent = 'Unlock';

            const unlockRadioInput = document.createElement('input');
            unlockRadioInput.setAttribute('type', 'radio');
            unlockRadioInput.setAttribute('name', 'user1Locked');
            unlockRadioInput.setAttribute('value', 'unlock');

            const lineBreak = document.createElement('br');
            const horizontalRule = document.createElement('hr');

            const usernameLabel = document.createElement('label');
            usernameLabel.textContent = 'Username';

            const usernameInput = document.createElement('input');
            usernameInput.setAttribute('type', 'text');
            usernameInput.setAttribute('name', 'user1Username');
            usernameInput.setAttribute('value', username);
            usernameInput.setAttribute('disabled', 'true');
            usernameInput.setAttribute('readonly', 'true');

            const userUsernameDiv = document.createElement('div');
            userUsernameDiv.classList.add('userHiddenFields');
            userUsernameDiv.style.display = 'none';
            const innerHorizontalRule = document.createElement('hr');

            const emailLabel = document.createElement('label');
            emailLabel.textContent = 'Email:';

            const emailInput = document.createElement('input');
            emailInput.setAttribute('type', 'email');
            emailInput.setAttribute('name', 'user1Email');
            emailInput.setAttribute('value', email);
            emailInput.setAttribute('disabled', 'true');
            emailInput.setAttribute('readonly', 'true');

            const ageLabel = document.createElement('label');
            ageLabel.textContent = 'Age:';

            const ageInput = document.createElement('input');
            ageInput.setAttribute('type', 'email');
            ageInput.setAttribute('name', 'user1Age');
            ageInput.setAttribute('value', age);
            ageInput.setAttribute('disabled', 'true');
            ageInput.setAttribute('readonly', 'true');

            const showMoreButton = document.createElement('button');
            showMoreButton.textContent = 'Show more';
            showMoreButton.dataset.lockTimes = 0;
            showMoreButton.addEventListener('click', showMore);

            // Append elements to the profileDiv
            profileDiv.appendChild(userIconImg);
            profileDiv.appendChild(lockLabel);
            profileDiv.appendChild(lockRadioInput);
            profileDiv.appendChild(unlockLabel);
            profileDiv.appendChild(unlockRadioInput);
            profileDiv.appendChild(lineBreak);
            profileDiv.appendChild(horizontalRule);
            profileDiv.appendChild(usernameLabel);
            profileDiv.appendChild(usernameInput);
            profileDiv.appendChild(userUsernameDiv);
            userUsernameDiv.appendChild(innerHorizontalRule);
            userUsernameDiv.appendChild(emailLabel);
            userUsernameDiv.appendChild(emailInput);
            userUsernameDiv.appendChild(ageLabel);
            userUsernameDiv.appendChild(ageInput);
            profileDiv.appendChild(showMoreButton);

           // const container = document.getElementById('container');
            //container.appendChild(profileDiv);
            main.appendChild(profileDiv);
        }

    }).catch(error => {
        return error;
    })

    function showMore(e) {

        let lockedTimes = e.currentTarget.dataset.lockTimes;

        const lockRadio = e.currentTarget.parentNode.querySelector('input[name="user1Locked"][value="lock"]');
        const unlockRadio = e.currentTarget.parentNode.querySelector('input[name="user1Locked"][value="unlock"]');

        const userHiddenFields = e.currentTarget.parentNode.querySelector('.userHiddenFields');

        if (lockRadio.checked) {

            e.currentTarget.dataset.lockTimes += 1;
            
            if (e.currentTarget.dataset.lockTimes.includes('11')) {
                e.currentTarget.disabled = true;
                return;
            }

            e.currentTarget.textContent = 'Show more';
            userHiddenFields.style.display = 'none';

            if (lockedTimes.includes('11')) {
                e.currentTarget.disabled = true;
                return;
            }

        } else if (unlockRadio.checked) {

            //checks if two '1' are added, that means that profile is locked 2 times
            if (lockedTimes.includes('11')) {
                e.currentTarget.disabled = true;
                return;
            }

            e.currentTarget.textContent = 'Hide it';
            userHiddenFields.style.display = 'block';

        } else {
            console.log('Neither lock nor unlock is checked');
        }
    }
}