let answer = {
    /**
     * Запрашивает и возвращает ответ пользователя
     * @returns {string} - ответ пользователя или null в случае завершения игры.
     */
    getUserAnswer() {
        //допустимые значения ответов
        const availableAnswers = ['А', 'Б', 'В', 'Г'];
        while (true) {
            // просим ввести ответ
            let userAnswer = prompt('Введите вариант ответа (русская буква А-Г). Для выхода нажмите "Отмена"');
            //если пользователь отменил игру, возвращаем null
            if (userAnswer === null) {
                return null;
            }
            //приводим к верхнему регистру
            userAnswer = userAnswer.toUpperCase()
            // если ответа нет среди допустимых вариантов, просим попробовать еще раз ввести
            if (!availableAnswers.includes(userAnswer)) {
                alert('Для ответа введите одну из русских букв А, Б, В, Г');
                continue;
            }
            // если пользователь ввел корректное значение - отдаем его.
            return userAnswer;
        }
    }

}