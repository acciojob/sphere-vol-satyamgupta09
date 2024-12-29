function volume_sphere() {
	event.preventDefault();
	let r = parseFloat(document.getElementById('radius').value);
	let v = document.getElementById('volume');
	
    if(isNaN(r) || r<0){
		v.value = "NaN";
		return;
	}

	let volume = (4/3)*3.14*r*r*r;

	v.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
