// const URL = "https://cat-fact.herokuapp.com/facts";
// const factspara = document.querySelector("#facts");
// const button = document.querySelector("#btn");

// const getfacts = async ()=> {
//     console.log("getting data.....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//    factspara.innerText = data[3].text;
// };

// button.addEventListener("click",getfacts);

const Base_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies"
const btn = document.querySelector("button")
const fromCurr = document.querySelector(".from select")
const tocurr = document.querySelector(".to select")

const dropdowns  = document.querySelectorAll(".dropdown select")

for(let select of dropdowns){
  for (Code in countryList) {
      let newoption = document.createElement("option") 
      newoption.innerText = Code
       newoption.value = Code
       if(select.name === "from" && Code === "USD"){
        newoption.selected = "selected";
       }
       else if (select.name === "to" && Code === "INR") {
        newoption.selected = "selected";
       }
      select.append(newoption)
    }
    select.addEventListener("change",(evt)=> {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
   let Code = element.value;
   let countrycode = countryList[Code];
   let newsrc = `https://flagsapi.com/${countrycode}/shiny/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newsrc;
   
}

btn.addEventListener("click", async (evt)=> {
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtval = amount.value
    // console.log(amtval)
    if(amtval==="" || amtval<1){
        amtval=1;
        amount.value="1";
    }
    // console.log(fromCurr.value,tocurr.value)
    const URL = `${Base_URL}/${fromCurr.value.tolowercase}/${tocurr.value.tolowercase}.json`;
    let response = await fetch(URL);
})
