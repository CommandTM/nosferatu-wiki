async function countArticles() {
    let json = await fetch("articles/index.json").then(res => res.json());
    console.log(json);
    let countDisplay = document.getElementById("article-number");
    let count = 0;
    Object.keys(json).forEach((key) => {
        let list = json[key];
        console.log(list);
        count += list.length
    })
    console.log(count);
    countDisplay.innerText = count;
}

countArticles()