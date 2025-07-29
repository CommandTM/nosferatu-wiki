function search(event){
    event.preventDefault();
    let query = document.getElementById('search-input').value;
    query = query.trim().toLowerCase();
    console.log(query);
    let url = "../search.html?query="
    try {
        const from = document.getElementById('search-from').value;
        switch(from){
            case "home":
                url = "articles/search.html?query=";
                break;
            case "list":
                url = "search.html?query=";
        }
    } catch (err) {
        console.log(err);
    }
    window.location = url + encodeURI(query);
}

document.getElementById('search-form').addEventListener('submit', search);