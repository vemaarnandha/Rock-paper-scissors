const getRandomNum = () => Math.floor(Math.random() * 3) + 1;

const getComputerChoice = (num) => {
    switch (num) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'siccors'; 
        default: return 'unknown choice';
    }
};

const userChoice = () => {
    return prompt(`pick between:
    - rock
    - paper
    - siccors`);
};

let userScore = 0;
let computerScore = 0;
let round = 0;

const startGame = document.querySelector('.mulai');

startGame.addEventListener('click', () => {
    const user = userChoice();
    
    if (user === null) {
        console.log('Game aborted.');
        return;
    }

    const computer = getComputerChoice(getRandomNum()); 

    console.log(`User memilih: ${user}`);
    console.log(`Computer memilih: ${computer}`);

    switch (user) { 
        case 'rock':
            switch (computer) { 
                case 'rock':
                    console.log('tie!');
                    break;
                case 'paper':
                    computerScore += 1;
                    console.log('computer win!');
                    break;
                case 'siccors':
                    userScore += 1;
                    console.log('User win!~');
                    break;
                default:
                    console.log('cant identify computer choice..');
                    break;
            }
            break;
            
        case 'paper':
            switch (computer) {
                case 'rock':
                    userScore += 1;
                    console.log('User win!');
                    break;
                case 'paper':
                    console.log('tie');
                    break;
                case 'siccors':
                    computerScore += 1;
                    console.log('Computer win!');
                    break;
                default:
                    console.log('cant identify computer choice..');
                    break;
            }
            break;
            
        case 'siccors':
            switch (computer) {
                case 'rock':
                    computerScore += 1;
                    console.log('computer Win!');
                    break;
                case 'paper':
                    userScore += 1;
                    console.log('user win');
                    break;
                case 'siccors':
                    console.log('Tie');
                    break;
                default:
                    console.log('cant identify computer choice..');
                    break;
            }
            break;
            
        default:
            console.log('Pilihan user tidak valid / salah ketik.');
            break;
    }
    
    round += 1;
    console.log(`Round: ${round} | User: ${userScore} | Computer: ${computerScore}`);
});