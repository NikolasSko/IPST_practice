function rockPaperScissors(playerChoice: string): { player: string; computer: string; result: string } {

    const choices = ['Камень', 'Ножницы', 'Бумага'];

    if (!choices.includes(playerChoice)) {
        throw new Error('Необходимо выбрать из списка: "Камень", "Ножницы", "Бумага".');
    }

    const computerChoice:string = choices[Math.floor(Math.random() * choices.length)];

    let result:string = '';

    if (playerChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (playerChoice === 'Камень' && computerChoice === 'Ножницы') ||
        (playerChoice === 'Ножницы' && computerChoice === 'Бумага') ||
        (playerChoice === 'Бумага' && computerChoice === 'Камень')
    ) {
        result = 'Вы победили!';
    } else {
        result = 'Компьютер победил!';
    }

    return {
        player: playerChoice,
        computer: computerChoice,
        result: result,
    };
}

const playerInput = 'Ножницы';
const result = rockPaperScissors(playerInput);
console.log(`Ваш выбор: ${result.player}; Выбор компьютера: ${result.computer}; Результат: ${result.result}`)