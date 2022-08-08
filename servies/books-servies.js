const Main_Container = document.querySelector("#main_container");

async function whyWeLoveDogs() {
  try {
    return await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=Why_We_Love_Dogs,_Eat_Pigs,_and_Wear_Cows&explaintext=1&formatversion=2&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          (Main_Container.innerHTML += `
<div class="row">
 <div class="col-12 mt-5 col-lg-4 mt-5 ">
 <img   src="https://m.media-amazon.com/images/P/1573245054.01._SCLZZZZZZZ_SX500_.jpg" alt=""> 
</div> 
            <div class="col-12 col-lg-8 "><h1  class=" mt-5" >Why We Love Dogs, Eat Pigs, and Wear Cows</h1>
<br> ${data.query.pages[0].extract}</div></div>.

<a target="_blank" href="https://www.amazon.com/Love-Dogs-Pigs-Wear-Cows/dp/1573245054">
<button class="w-25 bg-success">Buy</button>/a>
</div>

`);
      });
  } catch (err) {
    console.log(err);
  } finally {
  }
}
whyWeLoveDogs();

async function animalLiberation() {
  try {
    return await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=Animal_(De)liberation&explaintext=1&formatversion=2&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          (Main_Container.innerHTML += `
<div class="row">
 <div class="col-12 mt-5 col-lg-4 mt-5 ">
 <img   src="https://m.media-amazon.com/images/P/B00YWIN2H4.01._SCLZZZZZZZ_SX500_.jpg" alt=""> 
</div> 
            <div class="col-12 col-lg-8 "><h1  class=" mt-5" >Animal Liberation: The Definitive Classic of the Animal Movement </h1>
<br> ${data.query.pages[0].extract}</div></div>.
<a target="_blank" href="https://www.amazon.com/-/he/Peter-Singer/dp/0061711306/ref=sr_1_1?crid=3EGUHQGDXRLH3&keywords=Animal+%28De%29liberation&qid=1659962730&sprefix=animal+de+liberation%2Caps%2C386&sr=8-1">
<button class="w-25 bg-success">Buy</button>/a>

</div>

`);
      });
  } catch (err) {
    console.log(err);
  } finally {
  }
}
animalLiberation();

async function skinnyBitch() {
  try {
    return await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=Diet_for_a_New_America&explaintext=1&formatversion=2&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          (Main_Container.innerHTML += `
<div class="row">
 <div class="col-12 mt-5 col-lg-4 mt-5 ">
 <img   src="https://m.media-amazon.com/images/P/193207354X.01._SCLZZZZZZZ_SX500_.jpg" alt=""> 
</div> 
            <div class="col-12 col-lg-8 "><h1  class=" mt-5" >Diet for a New America</h1>
<br> ${data.query.pages[0].extract}</div></div>.
<a target="_blank" href="https://www.amazon.com/-/he/John-Robbins/dp/193207354X/ref=sr_1_1?crid=22JACG0AMPH82&keywords=Diet+for+a+New+America&qid=1659963070&sprefix=diet+for+a+new+america%2Caps%2C424&sr=8-1">
<button class="w-25 bg-success">Buy</button>/a>
</div>

`);
      });
  } catch (err) {
    console.log(err);
  } finally {
  }
}
skinnyBitch();

async function dietforANewAmerica() {
  try {
    return await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=Skinny_Bitch&explaintext=1&formatversion=2&format=json&origin=*`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data),
          (Main_Container.innerHTML += `
<div class="row">
 <div class="col-12 mt-5 col-lg-4 mt-5 ">
 <img   src="https://m.media-amazon.com/images/P/0762424931.01._SCLZZZZZZZ_SX500_.jpg" alt=""> 
</div> 
            <div class="col-12 col-lg-8 "><h1  class=" mt-5" >Skinny Bitch</h1>
<br> ${data.query.pages[0].extract}</div></div>.
<a target="_blank" href="https://www.amazon.com/-/he/Rory-Freedman/dp/0762424931/ref=sr_1_1?crid=1NSUO2Y1UQH95&keywords=skinny+bitch&qid=1659963171&sprefix=skinny_bitch%2Caps%2C183&sr=8-1https://www.amazon.com/-/he/John-Robbins/dp/193207354X/ref=sr_1_1?crid=22JACG0AMPH82&keywords=Diet+for+a+New+America&qid=1659963070&sprefix=diet+for+a+new+america%2Caps%2C424&sr=8-1">
<button class="w-25 bg-success">Buy</button>/a>
</div>

`);
      });
  } catch (err) {
    console.log(err);
  } finally {
  }
}
dietforANewAmerica();
