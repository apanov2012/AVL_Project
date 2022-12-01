import React, { useEffect, useState } from "react";
const fakeScannersList = [
    {
        label: "Поиск утечек информации и раскрытия служебных данных",
        value: "Scannertype1"
    },
    {
        label: "Поиск уязвимостей и векторов для проведения атак",
        value: "Scannertype2"
    },
    {
        label: "Проведение расширенного исследования по всем направлениям",
        value: "Scannertype3"
    },
    {
        label: "Проверка использования нестойких паролей",
        value: "Scannertype4"
    },
    {
        label: "Поиск вирусов и стороннего кода",
        value: "Scannertype5"
    }
];

const AddTaskForm = ({ visibleAddTaskForm, closeAddTaskForm }) => {
    const [formData, setFormData] = useState("");
    useEffect(() => {
        console.log("formData", formData);
    }, [formData]);
    const showAddTaskForm = {
        display: "block"
    };
    const hideAddTaskForm = {
        display: "none"
    };
    const handleChange = ({ target }) => {
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };
    const handleChangeCheckBox = ({ target }) => {
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.checked
        }));
    };
    const clearForm = (element) => {
        for (let i = 0; i < element.length; i++) {
            if (element[i].name === "url") {
                element[i].value = "";
            } else if (element[i].name === "addTask") {
                element[i].checked = false;
            } else if (element[i].name === "onControl") {
                element[i].checked = false;
            }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData("");
        clearForm(event.target);
        closeAddTaskForm();
    };
    const cancelSubmit = (event) => {
        event.preventDefault();
        setFormData("");
        clearForm(event.target);
        closeAddTaskForm();
    };
    return (
        <>
            <div
                className="add-new-task-form-back"
                style={visibleAddTaskForm ? showAddTaskForm : hideAddTaskForm}
            >
                <div className="add-new-task-form-back-name">
                    Добавить задачу
                </div>
                <div className="add-new-task-form-back-url">URL</div>
                <form
                    onSubmit={handleSubmit}
                    className="add-new-task-form-back-form"
                >
                    <input
                        type="text"
                        placeholder="example.com..."
                        className="add-new-task-form-back-form-input"
                        name="url"
                        onChange={handleChange}
                    />
                    <div className="add-new-task-form-back-form-task-name">
                        Тип задачи
                    </div>
                    {fakeScannersList &&
                        fakeScannersList.map((scanType) => (
                            <div key={scanType.value}>
                                <input
                                    type="radio"
                                    name="addTask"
                                    className="add-new-task-form-back-form-checkbox"
                                    id={scanType.value}
                                    onChange={handleChange}
                                    value={scanType.value}
                                />
                                <label
                                    htmlFor={scanType.value}
                                    className="add-new-task-form-back-form-label"
                                >
                                    {scanType.label}
                                </label>
                            </div>
                        ))}

                    <input
                        type="checkbox"
                        className="add-new-task-form-back-form-checkbox-square"
                        id="onControl"
                        name="onControl"
                        onChange={handleChangeCheckBox}
                    />
                    <label
                        htmlFor="onControl"
                        className="add-new-task-form-back-form-label-square"
                    >
                        На контроль
                    </label>
                    <button
                        type="submit"
                        className="add-new-task-form-back-form-submit"
                    >
                        Добавить
                    </button>
                    <button
                        type="button"
                        className="add-new-task-form-back-form-cancel"
                        onClick={cancelSubmit}
                    >
                        Отмена
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddTaskForm;
