let input = document.querySelector("#text")
let form = document.querySelector("form")
let section = document.querySelector("#result")
let container = document.querySelector(".container")
let genderImg = document.querySelector("#gender-img")
let genderTitle = document.querySelector("#gender-title")
let genderProbability = document.querySelector("#gender-probability")
// https://api.genderize.io/?name=sarah

form.addEventListener("submit",function(event){
    event.preventDefault()
    let inputValue = input.value.trim()
    if (inputValue){
        let url = `https://api.genderize.io/?name=${inputValue}`;
        fetch(url).then((response) => response.json())
        .then((data)=>{
            console.log(data)
            let gender = data.gender
            let probability = (data.probability) * 100
            console.log(gender)
            console.log(probability)

            section.style.display = "block"
            container.style.height = "440px"
            if (gender === "male") {
                genderImg.setAttribute("src","./img/male.png")
                genderTitle.innerHTML = "Male"
            }else if(gender === "female"){
                genderImg.setAttribute("src", "./img/femail.png")
                genderTitle.innerHTML = "Female"
            }else{
                genderImg.setAttribute("src","")
                genderTitle.innerHTML = "NULL"
            }
            genderProbability.innerHTML = `${probability}%`
        })
    }
})