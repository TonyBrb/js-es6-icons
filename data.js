const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const main = document.getElementById('main');

icons.forEach((el) => {
	main.innerHTML += 
	`
		<div class="box">
      <i style="color:${el.color};" class="${el.family} ${el.prefix}${el.name}"></i>
      <h5 style="text-transform: uppercase;">${el.name}</h5>
    </div>
	`
});



document.getElementById('level').addEventListener("change", (event) => {
	const level = document.getElementById('level');
	main.innerHTML = ''; 
		if(level.value == 1){
			icons.forEach((el) => {
			main.innerHTML += 
			`
				<div class="box">
					<i style="color:${el.color};" class="${el.family} ${el.prefix}${el.name}"></i>
					<h5 style="text-transform: uppercase;">${el.name}</h5>
				</div>
			`
});
	}

	if(level.value == 2){
		const animal = icons.filter((el) =>{
			if(el.type == 'animal') {
				return true;
			}
			return false;
		});
		console.log(animal);
		animal.forEach((el) => {
			main.innerHTML += 
			`
				<div class="box">
					<i style="color:${el.color};" class="${el.family} ${el.prefix}${el.name}"></i>
					<h5 style="text-transform: uppercase;">${el.name}</h5>
				</div>
			`
		});
	}

	if(level.value == 3){
		const vegetable = icons.filter((el) =>{
			if(el.type == 'vegetable') {
				return true;
			}
			return false;
		});
		console.log(vegetable);
		vegetable.forEach((el) => {
			main.innerHTML += 
			`
				<div class="box">
					<i style="color:${el.color};" class="${el.family} ${el.prefix}${el.name}"></i>
					<h5 style="text-transform: uppercase;">${el.name}</h5>
				</div>
			`
		});
	}

	if(level.value == 4){
		const user = icons.filter((el) =>{
			if(el.type == 'user') {
				return true;
			}
			return false;
		});
		console.log(user);
		user.forEach((el) => {
			main.innerHTML += 
			`
				<div class="box">
					<i style="color:${el.color};" class="${el.family} ${el.prefix}${el.name}"></i>
					<h5 style="text-transform: uppercase;">${el.name}</h5>
				</div>
			`
		});
	}
});