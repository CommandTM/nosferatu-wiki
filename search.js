async function makeList(query) {
    let json = await fetch("index.json").then(res => res.json());
    console.log(json);
    let list = document.getElementById("articles");
    let numOfResults = 0
    Object.keys(json).forEach((key) => {
        list.innerHTML += `<h2>${key}</h2>`
        list.innerHTML += `<hr>`
        list.innerHTML += `<ul>`
        json[key].forEach((item) => {
            let name = item[Object.keys(item)[0]]
            if (name.toLowerCase().includes(query)) {
                let url = item[Object.keys(item)[1]]
                url = url.substring(3)
                list.innerHTML += `<li><a href="${url}">${name}</a></li>`
                numOfResults++
            }
        })
        list.innerHTML += `</ul>`
    })
    document.getElementById("numOfResults").innerText = numOfResults;
}

let params = new URLSearchParams(document.location.search);
let query = params.get("query");
query = decodeURI(query);
makeList(query);
document.getElementById("search-input").value = query;