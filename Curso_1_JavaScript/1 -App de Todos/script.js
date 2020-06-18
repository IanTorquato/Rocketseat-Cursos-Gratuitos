let listTodos = document.querySelector('#app ul')
let inputText = document.querySelector('#app input')
let buttonDelete = document.querySelector('#app button')

let todos = JSON.parse(localStorage.getItem('listStorageTodos')) || []

function renderTodos()
{
	listTodos.innerHTML = ''
	
	for (let todo of todos)
	{
		let linkTodo = document.createElement('a')
		let liTodo = document.createElement('li')
		let posicao = todos.indexOf(todo)
		
		linkTodo.style.margin = '5px'
		linkTodo.href = '#'
		linkTodo.innerText = 'Excluir'
		linkTodo.setAttribute('onclick', 'deleteTodo(' + posicao + ')')
		
		liTodo.innerText = todo
		listTodos.appendChild(liTodo)
		liTodo.appendChild(linkTodo)
	}
}

function addTodo()
{
	todos.push(inputText.value)
	inputText.value = ''
	renderTodos()
	saveStorage()
}

function deleteTodo(pos)
{
	todos.splice(pos, 1)
	renderTodos()
	saveStorage()
}

function saveStorage()
{
	localStorage.setItem('listStorageTodos', JSON.stringify(todos))
}