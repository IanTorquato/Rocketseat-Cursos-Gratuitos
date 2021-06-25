function searchName() {
  let nameUser = document.querySelector('input').value
  let tagP = document.querySelector('p')
  let tagImg = document.querySelector('img')
  let tagDiv = document.querySelector('div')
  let tagOl = document.querySelector('ol')

  axios.get('https://api.github.com/users/' + nameUser)
    .then(function (response) {
      tagP.innerText = response.data.name
      tagImg.src = response.data.avatar_url
      tagDiv.style.opacity = 1
      tagOl.style.opacity = 1
    })
    .catch(function (error) {
      document.writeln(error)
    })

  axios.get('https://api.github.com/users/' + nameUser + '/repos')
    .then(function (response) {
      let listRepos = document.querySelector('ol')
      listRepos.innerText = ''
      let cont = 0

      for (let repos of response.data) {
        let itemListRepos = document.createElement('li')
        itemListRepos.innerText = response.data[cont].name
        listRepos.appendChild(itemListRepos)
        cont++
      }
    })
    .catch(function (error) {
      document.writeln(error)
    })
}
