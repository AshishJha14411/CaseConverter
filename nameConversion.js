let convertBtn = document.querySelector("#convert-btn")
let caseArr;
let final;
//issue faced was not reassigning the values to replace the item in arr
const camelCase = (str) => {
    caseArr = str.split(" ")
    for(let i =1; i<caseArr.length; i++){
        caseArr[i] = caseArr[i].charAt(0).toUpperCase() + caseArr[i].substring(1)
    }
    document.querySelector("#camel-case").innerHTML = caseArr.join("")
}
const pascalCase = (str) => {
    caseArr = str.split(" ")
    for(let i =0; i<caseArr.length; i++){
        caseArr[i] = caseArr[i].charAt(0).toUpperCase() + caseArr[i].substring(1)
    }
    document.querySelector("#pascal-case").innerHTML = caseArr.join("")
}

const snakeCase = (str) => {
    caseArr = str.toLowerCase().split(" ")
    document.querySelector("#snake-case").innerHTML = caseArr.join("_")
}

const kebabCase = (str) => {
    caseArr = str.toLowerCase().split(" ")
    document.querySelector("#kebab-case").innerHTML = caseArr.join("-")
}
const screamingSnakeCase = (str) => {
    caseArr = str.toUpperCase().split(" ")
    document.querySelector("#screaming-snake-case").innerHTML = caseArr.join("_")
}

const screamingKebabCase = (str) => {
    caseArr = str.toUpperCase().split(" ")
    document.querySelector("#screaming-kebab-case").innerHTML = caseArr.join("-")
}












//needs optimising
convertBtn.addEventListener("click", () => {
    let name = document.querySelector("#text").value
    camelCase(name)
    pascalCase(name)
    screamingSnakeCase(name)
    screamingKebabCase(name)
    snakeCase(name)
    kebabCase(name)
})