const form = document.querySelector("#searchForm");
const gallery = document.querySelector(".gallery");
const input = document.getElementsByTagName("input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input[0].value;
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  createImg(res.data);
  input[0].value = " ";
});

const createImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      gallery.append(img);
    }
  }
};