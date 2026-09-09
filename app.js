const getRandomNum = () => Math.floor(Math.random() * 3) + 1;

const getComputerChoice = (num) => {
    switch (num) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'sciccors';
        default: return 'unknown choice';
    }
};

const userChoice = () => {
    return prompt(`pick between:
    - rock
    - paper
    - scissors`);
};
const validChoice = ['rock', 'paper', 'scissors'];

const evaluateGame = (user, computer) => {
    try {
        if(!user) throw new Error("input cant be empty.");
        user = user.toLowerCase();
        if(!validChoice.includes(user)) throw new Error("input cant be established.");
    } catch (error) {
        console.log(error);
        return;
    }
    console.log(`User choose: ${user}`);
    console.log(`Computer choose: ${computer}`);

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
                case 'sciccors':
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
                case 'sciccors':
                    computerScore += 1;
                    console.log('Computer win!');
                    break;
                default:
                    console.log('cant identify computer choice..');
                    break;
            }
            break;

        case 'scissors':
            switch (computer) {
                case 'rock':
                    computerScore += 1;
                    console.log('computer Win!');
                    break;
                case 'paper':
                    userScore += 1;
                    console.log('user win');
                    break;
                case 'sciccors':
                    console.log('Tie');
                    break;
                default:
                    console.log('cant identify computer choice..');
                    break;
            }
            break;

        default:
            console.log('User input are invalid.');
            break;
    }

    round += 1;
    console.log(`Round: ${round} | User: ${userScore} | Computer: ${computerScore}`);
};

let userScore = 0;
let computerScore = 0;
let round = 0;

const startGame = document.querySelector('.mulai');

startGame.addEventListener('click', () => {
    evaluateGame(userChoice(), getComputerChoice(getRandomNum()));
});