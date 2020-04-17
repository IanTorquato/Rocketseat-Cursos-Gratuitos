import api from './api'

class App
{
	constructor()
	{
		document.querySelector('input').focus()
		
		// Iniciando variáveis/propriedade da classe
		this.repositories = []
		
		this.formRepos = document.getElementById('repoForm')
		this.formText = document.getElementById('txtRepository')
		this.formList = document.getElementById('repoList')
		
		this.registerHandlers()
	}
	
	registerHandlers()
	{
		// Pega o evento do botão e chama a função para salvá-lo
		this.formRepos.onsubmit = event => this.addRepository(event)
	}
	
	setLoading(loading = true)
	{
		if (loading == true)
		{
			let formLoading = document.createElement('span')
			formLoading.innerHTML = 'Carregando...'
			formLoading.setAttribute('id', 'loading')
			
			this.formRepos.appendChild(formLoading)
		}
		else
		{
			document.getElementById('loading').remove()
		}
	}
	
	async addRepository(event)
	{
		// Impede a página de ser atualizada e enviar por get/post
		event.preventDefault()
		
		const txtRepos = this.formText.value
		
		if (txtRepos.length === 0) return
		
		this.setLoading()
		
		try
		{
			const response = await api.get(`repos/${txtRepos}`)
			
			const
			{
				name,
				description,
				html_url,
				owner:
				{
					avatar_url
				}
			} = response.data
			
			this.repositories.push(
			{
				name,
				description,
				avatar_url,
				html_url
			})
			
			this.formText.value = ''
			
			this.render()
		}
		catch (error)
		{
			alert('O repositório não existe!')
		}
		this.setLoading(false)
	}
	
	// Limpa o que está em tela e renderiza a partir do array 'repositories'
	render()
	{
		this.formList.innerHTML = ''
		
		this.repositories.forEach(repo =>
		{
			let imgRepo = document.createElement('img')
			imgRepo.setAttribute('src', repo.avatar_url)
			
			let titleRepo = document.createElement('h1')
			titleRepo.innerHTML = repo.name
			
			let descriptionRepo = document.createElement('p')
			descriptionRepo.innerHTML = repo.description
			
			let linkRepo = document.createElement('a')
			linkRepo.setAttribute('target', '_blank')
			linkRepo.innerHTML = 'Acessar'
			linkRepo.setAttribute('href', repo.html_url)
			
			let liRepo = document.createElement('li')
			liRepo.appendChild(imgRepo)
			liRepo.appendChild(titleRepo)
			liRepo.appendChild(descriptionRepo)
			liRepo.appendChild(linkRepo)
			
			this.formList.appendChild(liRepo)
		})
	}
}

// Rodar uma classe sem armazer em uma variável:
new App()

/*
// ---> MÓDULO 1 (Conceitos) <---

// Aula_04 -Classes

class List
{
	constructor()
	{
		this.data = []
	}
	add(data)
	{
		this.data.push(data)
		console.log(this.data)
	}
}

class TodoList extends List
{
	constructor()
	{
		super()
		this.usuario = 'Ian'
	}
	mostraUsu()
	{
		console.log(this.usuario)
	}
}

const minhaLista = new TodoList()

document.querySelector('button').onclick = function()
{
	minhaLista.add('Novo Todo...')
}

minhaLista.mostraUsu()

// Aula_06 -Operações em Arrays

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArray = array.map(function(item, index)
{
	return item + index
})

console.log(newArray)

const sum = array.reduce(function(total, next)
{
	return total + next
})
console.log(sum)

const filterr = array.filter(function(item)
{
	return item % 2 === 0
})

console.log(filterr)

const findd = array.find(function(item)
{
	return item === 4
})

console.log(findd)

// Aula_07 -Arrow Functions

const arr = [1, 2, 3, 4, 5]
console.log(arr)

// Se recebe apenas 1 parâmetro, este não precisa de "()"
// Se não houver várias linhas na função, não é necessário o uso de "{}" e do "return"
const novoArr = arr.map(item => item * 2)

console.log(novoArr)

// Outra forma de se criar uma função:
// Para poder retornar um objeto sem usar return deve-se envolver o objeto com "()"
const teste = () => (
{
	nome: 'Ian',
	idade: '18'
})
console.log(teste())

// Aula_09 -Desestruturação

const usuario = {
	name: 'Ian',
	age: '18',
	address:
	{
		city: 'Gravatal',
		state: 'SC'
	}
}
// Para buscar mais de uma informação do usuário, basta colocar "{}" antes do "=", e depois o objeto 'alvo'
const
{
	name,
	age,
	address:
	{
		city
	}
} = usuario

console.log(name, age, city)

// Desestruturação em parâmetros
function usu(
{
	name,
	age
})
{
	console.log(name, age)
}

usu(usuario)

// Aula_10 -Operadores rest/spread

// "Rest (...)" pega o 'resto' das propriedades
const usuario2 = {
	name: 'Ian',
	age: 18,
	city: 'Gravatal'
}

const
{
	name2,
	...qualquerNome
} = usuario2
console.log(name2)
console.log(qualquerNome)

// Com arrays:
const numbers = [1, 2, 3, 4, 5]

const [a, b, c, ...d] = numbers
console.log(a, b, c, d)

// Com parâmetros:
function soma(...params)
{
	return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3, 4, 5))

// "Spread (...Objeto,Array)"
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = [...array1, ...array2]
console.log(array3)

const usuario3 = {
	...usuario2,
	age: 19
}
console.log(usuario3)

// Aula_12 -Object Short Syntax 

// Sintaxe curta: Quando o nome da variável é igual ao da propriedade do objeto
const name3 = 'Ian3',
	age3 = 18

const usuario4 = {
	name3,
	age3,
	city: 'Gravatal'
}

console.log(usuario4)

// ---> DESAFIOS MÓDULO 1 <---

// Desafio_1 -Classes

class Usuario
{
	constructor(email = 3, senha = 7)
	{
		this.emailUsu = email
		this.senhaUsu = senha
	}
	isAdmin()
	{
		if (this.admin)
		{
			return true
		}
		else
		{
			return false
		}
	}
}

class Admin extends Usuario
{
	constructor()
	{
		super('teste', 'teste2')
		this.admin = true
	}
}
const user = new Usuario()
const administrador = new Admin()

console.log(user.isAdmin())
console.log(administrador.isAdmin())

// Desafio_2 -Map, Filter e Find

const users = [
{
	name: 'Ian',
	age: 18,
	city: 'Gravatal'
},
{
	name: 'Ana',
	age: 17,
	city: 'Gravatal'
},
{
	name: 'Davi',
	age: 17,
	city: 'Gravatau'
}]

// Map
const ages = users.map((item) => item.age)
console.log(ages)

// Filter
const usersGravatal18 = users.filter((item) => item.city == 'Gravatal' && item.age >= 18)
console.log(usersGravatal18)

// Find
const userTuba = users.find((item) => item.city == 'Tubarão')
console.log(userTuba)

// Mistura
const users51 = users.map((item) =>
{
	item.age *= 3
	return item
}).filter((item) => item.age <= 51)

console.log(users51)

// Desafio_3 -Reduzir Funções

const usuario5 = {
	name5: 'Ian5',
	age5: 18
}

const mostraIdade = (usu) => usu.age
console.log(mostraIdade(usuario5))

const promise = () => new Promise((resolve, reject) => resolve())

// Desafio_4 -Desestruturação

// Simples
const empresa = {
	name: 'Rocketseat',
	address:
	{
		city: 'Rio do Sul',
		state: 'SC'
	}
}

const
{
	name6,
	address:
	{
		city6
	},
	address:
	{
		state
	}
} = empresa
console.log(name6)
console.log(city6)
console.log(state)

// Em parâmetros
const mostraInfo = (
{
	name,
	age
}) => `${name} tem ${age} anos.`

const usu2 = {
	name: 'Ian',
	age: 18
}
console.log(mostraInfo(usu2))

// Desafio_5 -Rest e Spread

const arr2 = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr2
console.log(x)
console.log(y)

const soma2 = (...numbers) => numbers.reduce((next, total) => total += next)
console.log(soma2(1, 2, 3, 4))

const usuario7 = {
	name7: 'Ian7',
	age: 18,
	address:
	{
		city: 'Gravatal',
		state: 'SC',
		country: 'Brasil'
	}
}

const usuario8 = {
	...usuario7,
	name8: 'Daniel8'
}
console.log(usuario8)

const usuario9 = {
	...usuario7,
	address:
	{
		...usuario7.address,
		city: 'Florianópolis'
	}
}
console.log(usuario9)

// ---> MÓDULO 3 (Async/wait) <---

// Aula_01 -Async/wait

const minhaPromise = () => new Promise((resolve, reject) =>
{
	setTimeout(() =>
	{
		resolve('OK')
	}, 2000)
})

// forma Antiga:
// minhaPromise().then(response =>
// {
// 	console.log(response)
// }).catch(err =>
// {
// 	console.log(err)
// })

// Forma nova:
async function executaFunction()
{
	console.log(await minhaPromise())
	console.log(await minhaPromise())
	console.log(await minhaPromise())
}
// Ou:
// const executaFunction = async () =>
// {
// 	console.log(await minhaPromise())
// 	console.log(await minhaPromise())
// 	console.log(await minhaPromise())
// }

executaFunction()

/*
// API github AXIOS

import apiAxios from 'axios'

class Api
{
	static async getUserInfo(userName)
	{
		try
		{
			const response = await apiAxios.get(`https://api.github.com/users/${userName}`)
			console.log(response)
		}
		catch (error)
		{
			console.warn('Falha na requisição. Usuário inválido!)
		}
	}
}

Api.getUserInfo('IanTorquato')
*/

// ---> DESAFIOS MÓDULO 3 (Refatorar) <---

// Código1:
/*
const delay = (tempo) => new Promise((resolve) => setTimeout(resolve(tempo), 2000))

async function umPorSegundo()
{
	try
	{
		console.log(await delay('1s'))
		console.log(await delay('2s'))
		console.log(await delay('3s'))
	}
	catch (error)
	{
		console.warn('Falha: ' + error)
	}
}
umPorSegundo()
*/

// Código2:
/*
import apiAxios from 'axios'

async function getUserData(user)
{
	try
	{
		const userGit = await apiAxios.get(`https://api.github.com/users/${user}`)
		console.log(userGit.data)
	}
	catch (error)
	{
		console.warn('Usuário Inesistente!')
	}
}

getUserData('IanTorquato')
getUserData('IanInexistente')
*/

// Código3:
/*
import apiAxios from 'axios'

class ApiGitHub
{
	static async getRepositories(repos)
	{
		try
		{
			const reposi = await apiAxios.get(`https://api.github.com/repos/${repos}`)
			console.log(reposi)
		}
		catch (error)
		{
			console.warn('Repositório não existe!')
		}
	}
}
ApiGitHub.getRepositories('Rocketseat/unform')
ApiGitHub.getRepositories('rocketseat/Inexistente')
*/

// Código4:
/*
import apiAxios from 'axios'

const buscarUsuario = async usuario =>
{
	try
	{
		const resposta = await apiAxios.get(`https://api.github.com/users/${usuario}`)
		console.log(resposta.data)
	}
	catch (error)
	{
		console.warn('Usuário inexistente!')
	}
}

buscarUsuario('IanTorquato')
*/