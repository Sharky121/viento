'use client';

import { useState } from "react";

import styles from './casting-form.module.scss';

const CastingForm = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const submitForm = async (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        
        try {
            const response = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    phone: ''
                })
            } else {
                console.log('Ошибка в try');
            }
        } catch (error) {
            console.log('Ошибка catch');
        }
    }

    const checkInputHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div className={styles.callback}>
            <p className={styles.callbackSubtitle}>Отправьте сообщение, наш менеджер перезвонит и проконсультирует вас по любым вопросам, связанными с подбором оптимального решения.</p>

            <form className="callback__form callback-form" id="callback-form" onSubmit={submitForm}>
                <ul className="callback-form__list">
                    <li className="callback-form__item form-field">
                        <label className="form-field__label visually-hidden" htmlFor="name">Имя</label>
                        <input className="form-field__input" value={formData.name} id="name" name="name" type="text" placeholder="Имя" required onChange={handleInputChange}/>
                    </li>
                    <li className="callback-form__item form-field">
                        <label className="form-field__label visually-hidden" htmlFor="phone">Ваш номер телефона</label>
                        <input className="form-field__input" value={formData.phone} id="phone" name="phone" type="tel" placeholder="Ваш номер телефона" required onChange={handleInputChange}/>
                    </li>
                    <li className="callback-form__item">
                        <button className="callback-form__btn btn" type="submit">Отправить</button>
                    </li>
                </ul>
                <p className="callback-form__confirm">
                    <label className="checkbox" htmlFor="confirm-form">
                        <input className="checkbox__input" id="confirm-form" name="confirm-form" type="checkbox" checked={isChecked} onChange={checkInputHandler}/>
                        <span className="checkbox__text">нажимая кнопку «Отправить» я подтверждаю, что ознакомлен и согласен с политикой <br/> конфиденциальности и обработки персональных данных</span>
                    </label>
                </p>
            </form>
        </div>
    )
}

export default CastingForm;