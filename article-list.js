async function makeList() {
    let json = await fetch("index.json").then(res => res.json());
    console.log(json);
    let list = document.getElementById("articles");
    Object.keys(json).forEach((key) => {
        list.innerHTML += `<h2>${key}</h2>`
        list.innerHTML += `<hr>`
        list.innerHTML += `<ul>`
        json[key].forEach((item) => {
            let name = item[Object.keys(item)[0]]
            let url = item[Object.keys(item)[1]]
            url = url.substring(3)
            list.innerHTML += `<li><a href="${url}">${name}</a></li>`
        })
        list.innerHTML += `</ul>`
    })
}

makeList();