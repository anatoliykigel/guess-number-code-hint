

    let secret = Math.floor(Math.random() * 100) + 1; // Генерирует ('загадываем') число

    function playRound() { //Каждый раунд это один вызов функции

        let variant = +userVariant.value;

        if(variant == secret){
            messagePlace.innerHTML = `Вы угадали! Это было ${secret}!`;
        } else {
            messagePlace.innerHTML = `Нет моё число не ${variant}...`;
        }

    }