"use strict";
let game = {
    // запускает игру
    run() {
        //считаем правильные ответы
        let rightAnswers = 0;
        //цикл по по обекту с вопросами
        for (let i in questions.gameQuestions) {
            //задаем вопрос
            console.log(`Вопрос: ${questions.gameQuestions[i].question}:`);
            let variants = questions.gameQuestions[i].variants;
            console.log('Варианты ответа: ')
            //в цикле выводим варианты ответа
            for (let j in variants) {
                console.log(`${j}. ${variants[j]}`);
            }
            //получаем ответ пользователя
            let userAnswer = answer.getUserAnswer();
            console.log(`Ваш ответ: ${userAnswer}`);
            //если игрок хочет выйти, завершаем игру
            if (userAnswer === null) {
                console.log('Игра окончена');
                return;
            }
            //если ответ правильный, сообщаем игроку и увеличиваем счет правильных ответов.
            if (questions.answerCheck(i, userAnswer) === true) {
                rightAnswers++;
                console.log('Правильно!');
                //иначе, сообщаем правильный ответ.
            } else {
                console.log(`Неверно! Правильный ответ ${questions.gameQuestions[i].answer}`)
            }
            console.log(`Количество правильных ответов ${rightAnswers}`);
        }
        console.log("Игра окончена! Чтобы снова начать игру наберите game.run() и нажмите Enter.");
    },

    // этот метод появляется при открытии страницы
    init() {
        console.log('Это игра "Кто хочет стать миллионером!"')
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }

}

game.init();
