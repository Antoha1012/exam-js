document.getElementById("btn").addEventListener("click", function () {
  let search = document.getElementById("search").value;
  let data = document.getElementById("data").value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=feac4bb49fe137d99114773f93e5c7af&query=${search}&primary_release_year=${data}`;
  let result = [];
  let wrap = document.getElementById("wrap");
  fetch(url)
    .then((response) => response.json())
    .then(function (response) {
      result = response.results.slice();
      wrap.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
        let title = document.createElement("h2");
        title.textContent = result[i].title;
        let p = document.createElement("p");
        p.textContent = result[i].release_date;
        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500/${result[i].poster_path}`;
        let div = document.createElement("div");
        div.appendChild(title);
        div.appendChild(p);
        div.appendChild(img);
        wrap.appendChild(div);
      }
    });
});
