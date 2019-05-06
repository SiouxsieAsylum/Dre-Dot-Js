document.addEventListener('DOMContentLoaded', function (dom) {

	const div = document.getElementById('test');
	const body = document.querySelector('body');
	const text = document.querySelector('#text');
	const half = document.getElementsByClassName('half-screen')[0];



	const height = window.innerHeight;
	let scrollY = window.scrollY;

	const firstHeight = 600;
	const secondHeight = 900;
	const thirdHeight = 1200;

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

	window.addEventListener('scroll', function(s) {
		scrollY = window.scrollY;
		let w;

		//dont reset on scrollup
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
			test.style.position = 'absolute';
			half.style.position = 'fixed';
			half.classList.remove('settled');
			half.classList.remove('close');
			half.classList.add('open');

		} else if (scrollY < secondHeight) {
			test.style.position = 'fixed';
			if (half.classList.contains('open')){
				half.classList.remove('open');
				half.classList.add('close');
			}
		}

		if (scrollY > thirdHeight) {
			const hidden = Array.from(document.querySelectorAll('.hidden'));
			let index = 0;
			let element = hidden[index];

				let showInterval = setInterval(function(){
					if (element) {
						element.classList.remove('hidden');
						element.classList.remove('risen');
						element.classList.add('shown');
						index++;
						element = hidden[index];
					} else {
						clearInterval(showInterval);
					}

				}, 700)

		} else if (scrollY < thirdHeight){
			const shown = Array.from(document.querySelectorAll('.shown'));
			let mapped = shown.map(function(element){
				element.classList.remove('shown');
				element.classList.add('risen');
				element.classList.add('hidden');
			})

		 }	

		if (w >= 100){
			body.style.backgroundColor = color;

		} else if (w < 100) {
			body.style.backgroundColor = 'white';

		}

	})

})


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

	const hello = "Hello. I'm Andrea. "
	let interval = 1;
	let numOfDivs = hello.length;
	let divArray = document.getElementsByClassName("square");


// typing animation
function populate() {
	for (let i = 0; i <= numOfDivs; i++){
		var newDiv = document.createElement('div');
		newDiv.classList.add("square");
    	text.appendChild(newDiv);
	}
}

	const intervalFunction = setInterval(function(){
	  let previous = interval - 1;

	  if (previous >= 0){
	    divArray[previous].innerHTML = hello[previous];
	  } 

	   interval++;
	     if (interval == numOfDivs) {
  			clearInterval(intervalFunction);
  			divArray[previous + 1].classList.add("border-bottom");
  			divArray[previous + 1].classList.add("blink");

 		 }
 		 console.log(divArray[interval])
	}, 50)

 





		

	

