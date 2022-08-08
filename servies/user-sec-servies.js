async function PrintUsers() {
  let counter = 54;
  try {
    return await fetch(
      "https://harry-potter-open-api.herokuapp.com/api/v1/people/students"
    )
      .then((res) => res.json())
      .then((res) =>
        res.data.forEach((item) => {
          if (counter <= 65) {
            Users_container.innerHTML += `
   <div class="col-6  col-lg-2 g-5">
          <div class="card" style="width: 10rem;"  >
  <img src="https://ozgrozer.github.io/100k-faces/0/3/003${counter++}2.jpg" class="card-img-top" >
  <div class="card-body">
    <p class="card-text text-center fs-5"> ${(person.fullName =
      item.attributes.name)}</p> </div> 
  </div>
      </div> `;
          } else {
               
          }
        })
      );
  } catch (error) {}
}
PrintUsers();
