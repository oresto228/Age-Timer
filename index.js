let timerId; 
function startAgeTimer() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const ageElement = document.getElementById('age');
    if (!birthdate || isNaN(birthdate.getTime())) {
        alert("Please enter a valid birthdate.");
        return;
    }
    document.getElementsByClassName('container')[0].style.opacity = "0";
    clearInterval(timerId);
    timerId = setInterval(updateAge, 100);
    function updateAge() {
        const now = new Date();
        const ageInMilliseconds = now - birthdate;
        const fractionalYears = (ageInMilliseconds / 31556900000).toFixed(9);
        ageElement.textContent = `Age ${fractionalYears}`;
    }
    updateAge();
}

function resetAgeTimer(){
    clearInterval(timerId); 
    const ageElement = document.getElementById('age');
    document.getElementsByClassName('container')[0].style.opacity = "1"; 
    ageElement.textContent = ''; 
}