document.addEventListener('DOMContentLoaded', function (dom) {

	const div = document.getElementById('test');
	const body = document.querySelector('body');
	const split = document.getElementById('split-screen');

	const height = window.innerHeight;
	let scrollY = window.scrollY;

	const firstHeight = 900;
	const secondHeight = 1800;
	const thirdHeight = 2700;
	const fourthHeight = 3600;
	const fifthHeight = 4500;

	//colors 	
	let r = 242;
	let g = 243; 
	let b = 255;
	let a = 1;

	let color = `rgba(${r}, ${g}, ${b}, ${a}`;
	div.style.backgroundColor = color;

	//containers
	let secondContainer = secondHeight - firstHeight;
	let thirdContainer = thirdHeight - secondHeight;



	document.addEventListener('mouseenter', function(me){
	})



			window.addEventListener('scroll', function(s) {
				scrollY = window.scrollY;
				let w;

				if (scrollY < firstHeight) {
					let firstContainerScroll = scrollY;
					let firstPercentage = firstContainerScroll / firstHeight; 

					w = 100 * firstPercentage;
					div.style.width = w + 'vw';
				}

				if (scrollY > firstHeight) {
					let secondScrollHeight = scrollY - firstHeight;
					let secondPercentage = secondScrollHeight / secondHeight;
					
					//what percent ahead of first height are we of 
					r = setColorValue(secondPercentage, r, 242, 10); //10
					g = setColorValue(secondPercentage, g, 243, 18); //18
					b = setColorValue(secondPercentage, b, 255, 71); // 71;
					color = `rgba(${r}, ${g}, ${b}, ${a}`;


					div.style.backgroundColor = color;
					body.style.backgroundColor = color;
				}

				if (scrollY > secondHeight) {
					const hidden = Array.from(document.querySelectorAll('.hidden'));
					let mapped = hidden.map(function(element){
						element.classList.remove('hidden');
						element.classList.remove('risen');
						element.classList.add('shown');
					})
				} else if (scrollY < secondHeight){
					const shown = Array.from(document.querySelectorAll('.shown'));
					let mapped = shown.map(function(element){
						element.classList.remove('shown');
						element.classList.add('risen');
						element.classList.add('hidden');


					})
					hidden = mapped;

				}	

				if (w >= 100){
					body.style.backgroundColor = color;

				} else if (w < 100) {
					body.style.backgroundColor = 'white';

				}

			})

})

			


			//console.log('w', w, ' = 100 * 1st%', firstPercentage, ' = 1stscroll', firstContainerScroll, '/ 1stheight', firstHeight);



function setColorValue(percent,color, upperLimit, lowerLimit){
	 let range = upperLimit - lowerLimit;
	 let value = Math.floor((1 - percent) * color);
	 if (value < lowerLimit){
	 	value = lowerLimit;
	 } else if (value > upperLimit) {
	 	value = upperLimit;
	 } 

	return value
}




		

	

