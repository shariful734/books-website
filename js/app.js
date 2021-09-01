const searchFood = () => {
    const searchField = document.getElementById('search-field');

    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => loadSearchBooks(data.docs));

}

const loadSearchBooks = docs => {

    const results = document.getElementById('results');

    results.textContent = '';

    docs.forEach(docs => {
        console.log(docs);

        const div = document.createElement('div');

        div.classList.add('col');

        div.innerHTML = `
                     <div class="card h-100">
                           <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">${docs.title}</h3>
                            <h5>${docs.author_name[0]}</h5>
                            <p>${docs.first_publish_year}</p>                         
                        </div>
                    </div>
        `;

        results.appendChild(div);
    })

}



