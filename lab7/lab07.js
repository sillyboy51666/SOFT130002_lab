const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

for (let i = 0; i < works.length; i++) {
    let item = document.createElement("div"),
        genre = document.createElement("h4"),
        information = document.createElement("div"),
        author = document.createElement("h3"),
        lifetime = document.createElement("h5"),
        popularPhotos = document.createElement("div"),
        popularPhotoTopic = document.createElement("h3"),
        visit = document.createElement("button");

    item.className = "item";
    information.className = "inner-box";
    popularPhotos.className = "inner-box";

    genre.innerHTML = "Genre : " + works[i].tips;
    author.innerHTML = works[i].author;
    author.style.display = "inline";
    lifetime.innerHTML = "lifetime:" + works[i].lifetime;
    lifetime.style.display = "inline";
    lifetime.style.marginLeft = "1em";
    information.appendChild(author);
    information.appendChild(lifetime);
    popularPhotoTopic.innerHTML = "Popular Photos";
    popularPhotos.appendChild(popularPhotoTopic);
    visit.innerHTML = "Visit";

    for (let j = 0; j < works[i].photos.length; j++) {
        let photo = document.createElement("img");
        photo.className = "photo";
        photo.src = "images/lab7/" +  works[i].photos[j];
        popularPhotos.appendChild(photo);
    }

    item.appendChild(genre);
    item.appendChild(information);
    item.appendChild(popularPhotos);
    item.appendChild(visit);
    document.getElementsByClassName("flex-container justify")[0].appendChild(item);
}