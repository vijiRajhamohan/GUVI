const pokeBtn = document.querySelector("#pokeBtn");
pokeBtn.addEventListener("click", getName);

async function getName() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
    const pokemon = await res.json();
    //console.log(pokemon)
    const data = await pokemon.results;
    //console.log(data)
    data.map((list) => {
      getStatus(list);
    });
    return data;
  } catch (err) {
    console.error(error);
  }
}
const getMainContainer = document.querySelector('#mainContainer')
const getStatus = async (pokemon) => {
  try {
    const inPoke = await fetch(pokemon.url);
  // console.log(inPoke)
    const url = await inPoke.json();
    console.log(url)
    //  console.log("Id:",url.id);
    //  console.log("Name:",url.name);
      // console.log("Abilities:",url.abilities[0]);
    //  console.log("Move:",url.moves[0].move);
    //  console.log("Weight",url.weight);
    // console.log("pics",url.sprites.front_shiny);
    


    const card = document.createElement('div')
    card.className = 'card'



//<card-body> 
const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

// Card title
const h = document.createElement('h5')
      h.className = 'card-title'
      h.textContent =url.name
      cardBody.append("name:",h)
    
//details
const p1 = document.createElement('p')
                      p1.className = 'card-text'
                    p1.textContent= url.id
     cardBody.append("Id:",p1)

     const p2 = document.createElement('p')
                      p2.className = 'card-text'
                    p2.textContent= url.weight
     cardBody.append("Weight:",p2)

     const p3 = document.createElement('p')
                      p3.className = 'card-text'
                    p3.textContent=`"name:"${url.moves[0].move.name}
                    , "url:"${url.moves[0].move.url}`
     cardBody.append("Move:",p3)

     const p4 = document.createElement('p')
                      p4.className = 'card-text'
                    p4.textContent=`${url.abilities[0].ability.name}`
     cardBody.append("Ability: Name:",p4)

     const p5 = document.createElement('p')
     p5.className = 'card-text'
   p5.textContent=`${url.abilities[0].ability.url}`
cardBody.append(" url:",p5)

const p6 = document.createElement('p')
p6.className = 'card-text'
p6.textContent=`${url.abilities[0].slot}`
cardBody.append(" slot:",p6)

   // <img >
const frontShiny = url.sprites.front_shiny
const img = document.createElement('img')
    img.src = frontShiny
    img.className = 'card-img'
  
    
    card.append(cardBody)
    card.append(img)
getMainContainer.append(card)


  }
 
   catch (err) {
    console.error(error);
  }
};

