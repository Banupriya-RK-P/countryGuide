const country_input = document.querySelector("#country_input")
const search_btn = document.querySelector("#search_btn")
const reset_btn = document.querySelector("#reset_btn")
const result = document.querySelector("#result")

search_btn.addEventListener("click",()=>{
    const input_value = country_input.value.trim()
    if(input_value ===""){
        result.innerHTML=`<p>Please enter a valid country name </p>`
        
        return
    }
    
   const url = `https://restcountries.com/v3.1/name/${input_value}`;
    fetch(url).then(res=>res.json()).then(data=>{
        const country = data[0]
        const flag=country.flags.svg
        const name=country.name.common
        const capital = country.capital?country.capital[0]:"N/A"
        const region = country.region
        const populaion = country.population.toLocaleString()
        const currencyobj = Object.values(country.currencies)[0]
        const currencysymbol = currencyobj.symbol
        const currencyname = currencyobj.name

        result.innerHTML =`<img src=${flag} alt="img-loading">
        <h2> ${name}</h2>
        <p><strong>Capital:</strong>${capital}</p>
        <p><strong>Region:</strong>${region}</p>
        <p><strong>Population:</strong>${populaion}</p>
        <p><strong>Currency Symbol:</strong>${currencysymbol}</p>
        <p><strong>Currency Name:</strong>${currencyname}</p>`

    })

    .catch(()=>{
        result.innerHTML=`<p>Country not found ❌</p>`
    })
})

country_input.addEventListener("input",()=>{
    
    if(country_input.value.trim()===""){
        result.innerHTML=""
        
    }  
 
})
reset_btn.addEventListener("click",()=>{
    country_input.value=""
    result.innerHTML=""
})