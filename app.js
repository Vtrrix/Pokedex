// var pokename=prompt("Input pokemon name")
var pokename='';
// function get_name(){
//     document.getElementById("pokename").submit();
//     console.log(pokename);

// }
let fetchName = document.getElementById("fetch-name");
fetchName.value = "";
function get_name(){
    let fetched_name = fetchName.value;
    console.log(fetched_name);  
    pokename=fetched_name;  



const apiData={
    url:'https://pokeapi.co/api/v2/',
    type:'pokemon',
    name:pokename,
}
const {url,type,name}=apiData
const apiUrl=`${url}${type}/${name}`

fetch(apiUrl)
    .then((data)=>  data.json())
    .then((pokemon)=> pokehtml(pokemon))

const pokehtml = (data) =>{
    console.log(data)

    var pokeType1 = data.types[0].type.name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].type.name;
        }
        else var pokeType2 =' ';

        var pokeAbility1 = data.abilities[0].ability.name;
        if (data.types.length == 2) {
            var pokeAbility2 = data.abilities[1].ability.name;
        }
        else var pokeAbility2 =' ';


    const html=`
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
    `
    const html2=`
        <div class="type">  Type:${pokeType1} ${pokeType2}</div>
        <div class="weight">  Weight:${data.weight}</div>
        <div class="height">  Height:${data.height}</div>
        <div class="type">  Ability:${pokeAbility1} ${pokeAbility2}</div>
    `
    const pokeimg=document.querySelector('.pokeimg')
    pokeimg.innerHTML=html
    const pokedata=document.querySelector('.pokedata')
    pokedata.innerHTML=html2
}
}