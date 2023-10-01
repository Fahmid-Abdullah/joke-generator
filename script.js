const jokeContainer = document.getElementById("setup");
const setupContainer = document.getElementById("setup");
const deliveryContainer = document.getElementById("delivery");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/dark";

let getJoke = () => {
	jokeContainer.classList.remove("fade");
    setupContainer.classList.remove("fade");
    deliveryContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
    	if (`${item.setup}` === 'undefined') {
    		setupContainer.textContent = `${item.joke}`;
    		jokeContainer.classList.add("fade");
    	} else {
	 		setupContainer.textContent = `${item.setup}`;
	        deliveryContainer.textContent = `${item.delivery}`;
	        setupContainer.classList.add("fade");
	        deliveryContainer.classList.add("fade");
    	}
    });
}
btn.addEventListener("click",getJoke);
getJoke();