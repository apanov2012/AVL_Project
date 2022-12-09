const validator = (validateMethod, data) => {
    const errors = {
        isRequired: "",
        isWebAddress: "",
        isTaskSelected: "",
        statusValidate: false
    };
    for (let i = 0; i < validateMethod.length; i++) {
        switch (validateMethod[i]) {
            case "isRequired": {
                if (!data.url) {
                    errors.isRequired = "Поле обязательно для заполнения";
                } else {
                    errors.isRequired = "";
                }
                break;
            }
            case "isWebAddress": {
                const withWwwRegExp = /^[w][w][w]+\.\w+\.\w+$/g;
                const withOutWwwRegExp = /^\w+\.\w+$/g;
                if (
                    withWwwRegExp.test(data.url) ||
                    withOutWwwRegExp.test(data.url)
                ) {
                    errors.isWebAddress = "";
                } else {
                    errors.isWebAddress = "Веедите корректный веб-адрес";
                }
                break;
            }
            case "isTaskSelected": {
                if (!data.addTask) {
                    errors.isTaskSelected = "Выберите тип задачи";
                } else {
                    errors.isTaskSelected = "";
                }
            }
            default:
                break;
        }
    }

    !errors.isRequired && !errors.isWebAddress && !errors.isTaskSelected
        ? (errors.statusValidate = true)
        : (errors.statusValidate = false);
    return errors;
};

export default validator;
