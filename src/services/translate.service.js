const translatedTasks = {
    "raskrytie-dannyh": {
        action: "raskrytie-dannyh",
        desc: "Поиск утечек информации и раскрытие служебных данных",
        title: "Раскрытие данных"
    },
    "uyazvimye-napravleniya": {
        action: "uyazvimye-napravleniya",
        desc: "Поиск уязвимостей и векторов для атак",
        title: "Поиск уязвимостей"
    },
    "polnoe-issledovanie": {
        action: "polnoe-issledovanie",
        desc: "Проведение расширенного исследования во всех областях",
        title: "Полное исследование"
    },
    "pop3-analiz": {
        action: "pop3-analiz",
        desc: "Проверка использования нестабильных паролей",
        title: "pop3-analiz"
    },
    malware: {
        action: "malware",
        desc: "Проверка на наличие вирусов и стороннего кода",
        title: "Вредоносные программы"
    }
};

function translateTasks(tasksArray) {
    const translatedArray = tasksArray
        .map((task) => translatedTasks[task.action])
        .filter((task) => task.action !== "pop3-analiz");
    return translatedArray;
}

export default translateTasks;
