const C0_Workers = document.querySelector("#coWorkers");
async function getUsers() {
  try {
    return await fetch(
      `https://my-json-server.typicode.com/Jeck99/fake-server/users`
    ).then((res) => res.json());
  } catch (error) {
    console.error(error);
  }
}

async function printUsers() {
  try {
    return getUsers().then(
      (res) =>
        (C0_Workers.innerHTML = `
      <div class="row">
      <div class="col-lg-4 d-flex flex-column align-items-center">
          <img
            class="img-fluid w-50"
            class="section_images "
            src="https://www.webii.net/blog/wp-content/uploads/2022/03/Megan-Headshot.png"
          />
          <h2 class="text-success">${res[0].name.first} ${res[0].name.last}</h2>
          <p>
             Dollie, helping out with the finances of the organization, is a really divided person. to contact Dollie, you can send an email.
          </p>
          <p><a class="btn btn-secondary" href="mailto:${res[0].email}">${res[0].email}</a></p>
        </div>

              <div class="col-lg-4 d-flex flex-column align-items-center">
          <img
            class="img-fluid w-50"
            class="section_images"
            src="https://www.webii.net/blog/wp-content/uploads/2021/12/nathan-montgomery-contributor.jpeg"
          />
          <h2 class="text-success">${res[2].name.first} ${res[2].name.last}</h2>
          <p>
          Milagros, is a softwar enginner who helps with the app,  and does a great job.
          
           to contact Dollie, you can send an email.
          </p>
          <p><a class="btn btn-secondary" href="mailto:${res[2].email}">${res[2].email}</a></p>
        </div>
  
              <div class="col-lg-4 d-flex flex-column  align-items-center">
          <img
            class="img-fluid w-50"
            class="section_images"
            src="https://www.webii.net/blog/wp-content/uploads/2021/12/melanie-reyna-contributor.jpeg"
          />
          <h2 class="text-success">${res[1].name.first} ${res[1].name.last}</h2>
          <p  >
           Dolores, been with us from the begining, she helps us out with donations, and does a great job.
           to contact Dollie, you can send an email.

            
          </p>
          <p><a class="btn btn-secondary" href="mailto:${res[1].email}">${res[1].email}</a></p>
        </div>
        </div>


        `)
    );
  } catch (error) {
    console.error(error);
  }
}
printUsers();
