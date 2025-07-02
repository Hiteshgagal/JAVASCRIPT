console.log("today I am study Arrays");
//  let marks = [97, 40, 67, 45, 55];
//  marks[3] = 50;
//  console.log(marks);
//  console.log(marks.length);
// let heroes = ["Ironman", "hulk", "Antman", "Thor", "Spiderman", "Blaclpanther"]
//for loop in arrays
//  for (let ind = 0; ind < heroes.length; ind++) {
//   //  const element = heroes[ind];
//     console.log(heroes[ind]);
    
//  }
  //for of loop
//   for (let hero of heroes) {
//     console.log(hero)
//   }

  let Gujrat = ["Bhuj", "Jamnagar", "Junagadh", "Somnath", "Gadhinagar", "Amadavad"]
  for (const city of Gujrat) {
    console.log(city.toUpperCase())
  }

  //arrays method
  //push pop tostring concat unshift shift slice splice methods
  //push method for adding items
  vagies = ["potato", "tomato", "Chily", "chps"]
 // vagies.push("Bringale", "fulaver")
  console.log(vagies)
  //pop method for remove
  let deleted =  vagies.pop();
  console.log(deleted)
  console.log(vagies)

  //tostring converting in the string
  let frouts = ["banana", "Apple", "Orange", "Paapaya"] 
  console.log(frouts)
  console.log(frouts.toString())
   let mark = [23, 24, 25, 20]
   console.log(mark.toString())

   //concat
   let marvels_mens = ["thor", "captain", "Spiderman"]
   let marvels_womens = ["zain", "Pegy", "Mz"];
   let marvels_single = ["loky", "Thanos", "straing"]
   let bfgf = marvels_mens.concat(marvels_womens, marvels_single)
   console.log(bfgf)

   //unshiift method add in first place
   let mens = ["thor", "captain", "Spiderman"]
  //  mens.unshift("Antman")
  //shiift method remove first item
 let a=  mens.shift()

  console.log(mens)
  console.log(a)

  //slice
  let her = ["thor", "captain", "Spiderman", "Antman", "Strange", "kong", "Hulk", "Ironman"]
  console.log(her)
 // console.log(her.slice(1, 5))
  //splice
  //splice(start derlete newadd)
let num = [ 1,2,3,4,5,6,7];
//num.splice(2,2,1, 101)
//num.splice(0, 0, 20) //add
//num.splice(3,1) //delete
//num.splice(3, 1, 101) //replace
num.splice(4)
console.log(num)