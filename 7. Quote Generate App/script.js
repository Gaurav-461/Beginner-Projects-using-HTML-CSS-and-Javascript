const quote_url = "https://api.quotable.io/quotes/random";

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btnQuote = document.querySelector("#btn-new-quote");
const btnTweet=document.querySelector("#btn-tweet")

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}
getQuote(quote_url);
btnQuote.addEventListener("click", () => {
    getQuote(quote_url);
});

btnTweet.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML + "---by " + author.innerHTML, "Tweet Window", "width=600, height=300,left=400px,top=200px");
})