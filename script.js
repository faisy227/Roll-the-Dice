let images = [
    'dice-01.svg',
    'dice-02.svg',
    'dice-03.svg',
    'dice-04.svg',
    'dice-05.svg',
    'dice-06.svg',
];

let dice = document.querySelectorAll('img');

console.log(dice);

function roll(){
    dice.forEach(die =>{
        die.classList.add('shake');
    });

    setTimeout(()=>{
        dice.forEach(die =>{
            die.classList.remove('shake');
        });
        let dieOnceValue = Math.floor(Math.random() * 6);
        let dieTwoValue =  Math.floor(Math.random() * 6);
        document.querySelector('#dice-1').setAttribute('src', images[dieOnceValue]);
        document.querySelector('#dice-2').setAttribute('src', images[dieTwoValue]);

        document.querySelector('#total').innerHTML = 'Your Roll is ' + 
        ((dieOnceValue + 1 ) + (dieTwoValue + 1));
    }, 
    1000
    );
}