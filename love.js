// function display(){
//     let input = document.getElementById('enter').value
//     input= parseInt(input);
//     if(input>=70 && input<=100 ){
//         document.getElementById('out').innerHTML = input + 'they are a match'
//     } else if(input>=60 && input<=69){
//         document.getElementById('out').innerHTML = input + 'they are average'
//     }
// }


function calculateCompatibility() {
    // Get names from input fields
    const name1 = document.getElementById('lover1').value.trim();
    const name2 = document.getElementById('lover2').value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById('out').innerHTML = "Please enter both names!";
        return;
    }

    // Generate a random compatibility percentage
    const compatibility = Math.floor(Math.random() * 101);

    // Display result
    let message = `${name1} ❤️ ${name2}: Your compatibility is ${compatibility}%.`;
    document.getElementById('out').innerHTML = message;

    // Play audio based on compatibility
    let lowLoveAudio = document.getElementById('low-love-audio');
    let highLoveAudio = document.getElementById('high-love-audio');
    let mediumLoveAudio = document.getElementById('medium-love-audio');
    

    // Pause any currently playing audio
    highLoveAudio.pause();
    mediumLoveAudio.pause();
    lowLoveAudio.pause();

    if (compatibility >= 70 || compatibility <= 100) {
        highLoveAudio.play();
    } else if (compatibility >= 50) {
        mediumLoveAudio.play();
    }  else if (compatibility < 50){
        lowLoveAudio.play()
    }
    else {
        lowLoveAudio.play();
    }
}

function clearFields() {
    document.getElementById('lover1').value = '';
    document.getElementById('lover2').value = '';
    document.getElementById('out').innerHTML = 'RESULT ❤💕';

    // Pause all audio
    document.getElementById('high-love-audio').pause();
    document.getElementById('medium-love-audio').pause();
    document.getElementById('low-love-audio').pause();
}

// var audio = new Audio()

// Attach event listener to the button
// document.getElementById('calculateLove').addEventListener('click', calculateCompatibility);
