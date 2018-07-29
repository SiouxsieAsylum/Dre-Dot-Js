document.addEventListener('DOMContentLoaded', function (dom) {
	const div = document.getElementById('test');
	const body = document.querySelector('body');

	let baseCaseX;
	let baseCaseY;
	let hitBoxRight;
	let hitBoxLeft;

	document.addEventListener('mouseenter', function(me){
		baseCaseX = baseCaseX || me.clientX;
		baseCaseY = baseCaseY || me.clientY;
		hitBoxRight = innerWidth - baseCaseX;
		hitBoxLeft = innerWidth - hitBoxRight;
		console.log(baseCaseX, baseCaseY, hitBoxRight, hitBoxLeft);

	})

	document.addEventListener('mousemove', function (mm) {
			//only works while mouse is within browser window;
			const width = window.innerWidth;
			
			let clientX = mm.clientX;
			//let clientY = mm.clientY;

			let deviationX = clientX - baseCaseX;
			//let deviationY = clientY - baseCaseY; 

			// users will instantiate a base case on load
			// this will establish two hit boxes, a right and a left
			// you want to establish which direction will e the desired direction
			// then, set the box on the left to grow from one side to the other in the desired direction at the speed in which your mouse traverses the desired direction hit box
			// if crossing direction continue growing

			console.log(a, 'width', w);

			div.style.width = w + 'px';
			//div.style.color = `rgba(0,0,0,${a})`; 


			window.addEventListener('scroll', function(s) {

			let scrollY = window.scrollY;

			//colors 	
			let r = 0;
			let g = 0; 
			let b = 0;
			let a = 1;

			//sizes
			let h = 100;
			let w = 100;

			//positions
			let x = 10;
			let y = 10;

			r = scrollY / 2;
			g = scrollY / 2;
			b = scrollY / 2;
			a = scrollY / 578;


		})

	})

	

});




		

	

