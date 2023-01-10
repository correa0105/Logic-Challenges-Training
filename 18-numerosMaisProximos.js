function numerosMaisProximos(numbers) {
    numbers.sort((a, b) => a - b);
    let salvandoDiferenca = [];
    let menorDiferenca = numbers[1] - numbers[0];

    for(let index = 2; index < numbers.length; index++) {
        menorDiferenca = Math.min(menorDiferenca, numbers[index] - numbers[index - 1])
    }

    for(let index = 1; index < numbers.length; index++) {
        if(numbers[index] - numbers[index - 1] === menorDiferenca) {
            console.log(numbers[index - 1], numbers[index])
        }
    }
}

numerosMaisProximos([5, 4, 3, 2])