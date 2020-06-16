function checarIdade(idade)
{
	return new Promise(function(resolve, reject)
	{
		setTimeout(function()
		{
			if (idade >= 18)
			{
				resolve()
			}
			else
			{
				reject()
			}
		}, 2000)
		
	})
}

checarIdade(18).then(function()
{
	document.writeln('Maior de Idade')
}).catch(function()
{
	document.writeln('Menor de idade')
})