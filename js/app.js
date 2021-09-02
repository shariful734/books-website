// fetching the url 

const searchFood = () => {
    const searchField = document.getElementById('search-field');

    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => loadSearchBooks(data.docs));

}


// loading the books 

const loadSearchBooks = docs => {

    const results = document.getElementById('results');

    results.textContent = '';

    if (docs.length === 0) {
        const errorMessage = document.getElementById('error');

        errorMessage.style.display = 'block';
    }

    else {

        docs.forEach(docs => {
            console.log(docs);

            const div = document.createElement('div');

            div.classList.add('col');

            div.innerHTML = `
                         <div class="card h-100">
                               <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top w-50 mx-auto mt-3 h-50" alt="..." >
                            <div class="card-body text-center mt-3">
                                <h3 class="card-title">${docs.title}</h3>
                                <h5>Author:${docs.author_name[0]}</h5>
                                <p>First Published:${docs.first_publish_year}</p>                         
                            </div>
                        </div>
            `;

            results.appendChild(div);
        })



    }


}





