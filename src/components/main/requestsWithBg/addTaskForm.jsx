import React, { useEffect, useState } from "react";
import validator from "../../../services/validator";
import translateTasks from "../../../services/translate.service";
import listOfTasks from "../../../fake.api/response_taskList.json";

// const fakeScannersList = [
//     {
//         label: "Поиск утечек информации и раскрытия служебных данных",
//         value: "Scannertype1"
//     },
//     {
//         label: "Поиск уязвимостей и векторов для проведения атак",
//         value: "Scannertype2"
//     },
//     {
//         label: "Проведение расширенного исследования по всем направлениям",
//         value: "Scannertype3"
//     },
//     {
//         label: "Проверка использования нестойких паролей",
//         value: "Scannertype4"
//     },
//     {
//         label: "Поиск вирусов и стороннего кода",
//         value: "Scannertype5"
//     }
// ];
const AddTaskForm = ({ visibleAddTaskForm, closeAddTaskForm }) => {
    const [tasksList, setTasksList] = useState();
    useEffect(() => {
        const initialTasks = JSON.parse(
            JSON.stringify(listOfTasks.result.message)
        );
        setTasksList(translateTasks(initialTasks));
    }, []);
    const [formData, setFormData] = useState("");
    const [errors, setErrors] = useState();
    useEffect(() => {
        if (formData) {
            console.log("formData", formData);
        }

        const errors = validator(
            ["isRequired", "isWebAddress", "isTaskSelected"],
            formData
        );
        setErrors(errors);
        // console.log("errors in AddFormData", errors);
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
    //OnControl disabled
    // const handleChangeCheckBox = ({ target }) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         [target.name]: target.checked
    //     }));
    // };
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
        console.log("event.target cancel form ", event.target);
        event.preventDefault();
        setFormData("");
        setErrors();
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
                    {errors ? (
                        errors.isRequired ? (
                            <p className="error">{errors.isRequired}</p>
                        ) : errors.isWebAddress ? (
                            <p className="error">{errors.isWebAddress}</p>
                        ) : (
                            ""
                        )
                    ) : (
                        ""
                    )}
                    <div className="add-new-task-form-back-form-task-name">
                        Тип задачи
                    </div>
                    {tasksList &&
                        tasksList.map((scanType) => (
                            <div key={scanType.action}>
                                <input
                                    type="radio"
                                    name="addTask"
                                    className="add-new-task-form-back-form-checkbox"
                                    id={scanType.title}
                                    onChange={handleChange}
                                    value={scanType.action}
                                />
                                <label
                                    htmlFor={scanType.title}
                                    className="add-new-task-form-back-form-label"
                                >
                                    {scanType.desc}
                                </label>
                            </div>
                        ))}
                    {errors ? (
                        errors.isTaskSelected ? (
                            <p className="error">{errors.isTaskSelected}</p>
                        ) : (
                            ""
                        )
                    ) : (
                        ""
                    )}

                    {/* <input
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
                    </label> */}
                    <button
                        type="submit"
                        className="add-new-task-form-back-form-submit"
                        disabled={
                            errors
                                ? !errors.statusValidate
                                    ? "disabled"
                                    : ""
                                : ""
                        }
                    >
                        Добавить
                    </button>
                    <button
                        type="submit"
                        className="add-new-task-form-back-form-cancel"
                        onSubmit={cancelSubmit}
                    >
                        Отмена
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddTaskForm;
