"use strict";

// Объет вопросов
const questions = {

    gameQuestions: {
        1: {
            question: 'Зимой и летом одним цветом',
            variants: {
                А: 'ёлка',
                Б: 'светофор',
                В: 'квадрат Малевича',
                Г: '100 долларов'
            },
            answer: 'А'
        },
        2: {
            question: 'Висит груша, нельзя скушать',
            variants: {
                А: 'воздущный шар',
                Б: 'боксерская груша',
                В: 'лампочка',
                Г: 'люстра'
            },
            answer: 'В'
        },
        3: {
            question: 'Не имей сто рублей, а имей 100... (продолжите фразу)',
            variants: {
                А: '...раз отмерь!',
                Б: 'друзей',
                В: 'врагов',
                Г: 'долларов'
            },
            answer: 'Б'
        },
        4: {
            question: 'На лает, не кусает, а в дом не пускает',
            variants: {
                А: 'замок',
                Б: 'бордорский дог',
                В: 'родственник из Саратова',
                Г: 'дверь'
            },
            answer: 'А'
        },
        5: {
            question: 'Без рук, без ног, а рисовать умеет',
            variants: {
                А: 'современное искусство',
                Б: 'мороз',
                В: 'птицы на песке',
                Г: 'море'
            },
            answer: 'Б'
        }
    },
    /**
     * Эта функция возвращает правильный ли ответ дал игрок
     * @param {int} num 
     * @param {string} answerLetter 
     * @returns {boolean} true или false
     */
    answerCheck(num, answerLetter) {
        if (this.gameQuestions[num].answer === answerLetter) {
            return true;
        }
        return false;
    }
}

//console.log(questions.gameQuestions[1].variants)