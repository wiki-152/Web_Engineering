const userCardsGrid = document.getElementById('userCardsGrid');
const searchInputBar = document.getElementById('searchInputBar');
const companyDropdownFilter = document.getElementById('companyDropdownFilter');
const detailsModal = document.getElementById('detailsModal');
const modalHeaderName = document.getElementById('modalHeaderName');
const modalContentEmail = document.getElementById('modalContentEmail');
const modalContentUsername = document.getElementById('modalContentUsername');
const modalContentPhone = document.getElementById('modalContentPhone');
const modalContentWebsite = document.getElementById('modalContentWebsite');
const modalContentCompany = document.getElementById('modalContentCompany');
const modalContentCatchPhrase = document.getElementById('modalContentCatchPhrase');
const modalContentBusiness = document.getElementById('modalContentBusiness');
const modalContentAddress = document.getElementById('modalContentAddress');
const closeModalButton = document.querySelector('.closeButton');

let userList = [];
// All declarations
// Fetching user data from ÂPI
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        userList = data;
        populateCompanyDropdown();
        displayUserCards(userList);
    });

// Updating the company dropdown filter
function populateCompanyDropdown() {
    const companiesSet = [...new Set(userList.map(user => user.company.name))];
    companiesSet.forEach(company => {
        const optionElement = document.createElement('option');
        optionElement.value = company;
        optionElement.textContent = company;
        companyDropdownFilter.appendChild(optionElement);
    });
}

// Updating the users in the grid
function displayUserCards(usersToShow) {
    userCardsGrid.innerHTML = ''; 
    usersToShow.forEach(user => {
        const userCardElement = document.createElement('div');
        userCardElement.className = 'userCardClass';
        userCardElement.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.company.name}</p>
        `;
        userCardElement.addEventListener('click', () => showUserDetailsModal(user));
        userCardsGrid.appendChild(userCardElement);
    });
}

// Showing user details in modal
function showUserDetailsModal(user) {
    modalHeaderName.textContent = user.name;
    modalContentEmail.textContent = user.email;
    modalContentUsername.textContent = user.username;
    modalContentPhone.textContent = user.phone;
    modalContentWebsite.textContent = user.website;
    modalContentCompany.textContent = user.company.name;
    modalContentCatchPhrase.textContent = user.company.catchPhrase;
    modalContentBusiness.textContent = user.company.bs;
    modalContentAddress.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
    detailsModal.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target === detailsModal) {
        detailsModal.style.display = 'none';
    }
}

// Search functionality
searchInputBar.addEventListener('input', () => {
    const searchValueLower = searchInputBar.value.toLowerCase();
    const filteredUsersList = userList.filter(user =>
        user.name.toLowerCase().includes(searchValueLower) || 
        user.email.toLowerCase().includes(searchValueLower)
    );
    displayUserCards(filteredUsersList);
});

// Company filter functionality
companyDropdownFilter.addEventListener('change', () => {
    const selectedCompany = companyDropdownFilter.value;
    const filteredUsersByCompany = userList.filter(user => 
        selectedCompany === '' || user.company.name === selectedCompany
    );
    displayUserCards(filteredUsersByCompany);
});

closeModalButton.onclick = function() {
    detailsModal.style.display = 'none';
}


