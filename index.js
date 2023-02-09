const quoteEl=document.getElementById("quote");
const btnEl=document.getElementById("btn");
const authorEl=document.getElementById("author");

const apiURL="https://api.quotable.io/random"
async function getQuote(){
    try {
        btnEl.innerText="Loading.....";
        btnEl.disabled=true;
        quoteEl.innerText="Updating....";
        authorEl.innerText="Updating....";
        const response = await fetch(apiURL)
        const data= await response.json();
        quoteEl.innerText=data.content;
        authorEl.innerText="~"+data.author;
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
        
        
    } catch (error) {
        // btnEl.innerText="Loading.....";
        // btnEl.disabled=true;
        quoteEl.innerText="An error happened ,try again later";
        
        authorEl.innerText="An error happened ,try again later";
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
        
    }
    
}
 getQuote()


btnEl.addEventListener("click",getQuote);



