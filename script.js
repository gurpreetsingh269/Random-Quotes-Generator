const quote=document.querySelector('.quote');
const copyQuotes=document.querySelector('#copy');
const newQuote=document.getElementById('newQuote');
newQuote.addEventListener('click',()=>{
    fetch("https://dummyjson.com/quotes/random").then(res=>res.json()).then(result=>{
      quote.innerText=result.quote;
    })
}
)
copyQuotes.addEventListener('click', () => {
  navigator.clipboard.writeText(quote.innerText)
    .then(() => {
      alert("Copied Successful!");
      console.log("copied successfully!");
    })
    .catch(err => {
      console.error("Copy failed:", err);
    });
});