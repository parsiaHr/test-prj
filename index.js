const API_KEY = `c294b8e85ede454898b9eefc36d10484`;
const btn = document.querySelector(".get-btn");
const showMoreBtn = document.querySelector(".show-more-btn");
const container = document.querySelector(".container");

const getData = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2024-09-29&to=2024-09-29&sortBy=popularity&apiKey=${API_KEY}`
    );
    
    btn.textContent = "....";
    const data = await response.json();
    const articles = data.articles;
    console.log(articles);
    articles.forEach((item) => {
      container.innerHTML += `<h2>${item.author}</h2>`;
    });


    showMoreBtn.classList.remove("hide");

    // show more button function
    let current = 3;
    let allTitles = container.querySelectorAll("h2");
    console.log(allTitles);
    
    showMoreBtn.addEventListener("click", () => {
      for (let i = current; i < current + 3; i++) {
        allTitles[i].style.display = "block";
      }
      current += 3;
      if (current >= allTitles.length - 1) {
        showMoreBtn.style.display = "none";
      }
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    btn.textContent = "you got the data";
  }
};

btn.addEventListener("click", getData);
