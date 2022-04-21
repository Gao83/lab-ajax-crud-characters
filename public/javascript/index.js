const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(({ data }) => {

        const { name, occupation, cartoon, weapon } = data[0]

        let texto = ""

        data.forEach(element => {
          texto +=
            `<div class="character-info">
            <div class="name">Character Name ${element.name}</div>
            <div class="occupation">Character Occupation ${element.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${element.cartoon}</div>
            <div class="weapon">Character Weapon ${element.weapon}</div>
            </div>`

        });
        document.querySelector('.characters-container').innerHTML = texto

      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.querySelector("input[name='character-id']").value

    charactersAPI
      .getOneRegister(id)
      .then(({ data }) => {

        let getbyId = ''

        getbyId +=
          `<div class="character-info">
            <div class="name">Character Name ${data.name}</div>
            <div class="occupation">Character Occupation ${data.occupation}</div>
            <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
            <div class="weapon">Character Weapon ${data.weapon}</div>
            </div>`

        document.querySelector('.characters-container').innerHTML = getbyId
      })

      .catch(err => console.log(err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.querySelector("input[name='character-id-delete']").value

    charactersAPI
      .deleteOneRegister(id)
      .then(({ data }) => {
        console.log(id)
      })

      .catch(err => console.log(err))

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let characterInfo = document.querySelectorAll('#edit-character-form input')
    const characterValue = {
      name: characterInfo[1].value,
      occupation: characterInfo[2].value,
      weapon: characterInfo[3].value,
      cartoon: characterInfo[4].checked
    }

    let id = document.querySelector("input[name='character-id-delete']").value

    charactersAPI

      .updateOneRegister(id, characterValue)
      .then(() => {
        console.log(characterInfo)

      })

      .catch(err => console.log(err))
  });

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {
  event.preventDefault()


  let name = document.querySelector("input[name='name']").value
  let occupation = document.querySelector("input[name='occupation']").value
  let weapon = document.querySelector("input[name='weapon']").value
  let cartoon = document.querySelector("input[name='cartoon']").checked
  const characterInfo = { name, occupation, weapon, cartoon }

  charactersAPI

    .createOneRegister(characterInfo)
    .then(() => {
      console.log(characterInfo)

    })

    .catch(err => console.log(err))
});
