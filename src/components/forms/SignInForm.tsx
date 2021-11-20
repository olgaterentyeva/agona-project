import React, {useEffect, useState} from "react";

export function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [inputError, setInputError] = useState('Поля ввода не могут быть пустыми')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (inputError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [inputError])


    const handlerBlur = (event: any) => {
        if (event.target.name === 'email') {
            setEmailDirty(true)
            return
        } else if (event.target.name === 'password') {
            setPasswordDirty(true)
            return
        }
    }

    const validateEmail = (event: any) => {
        const email = event.target.value
        const input = event.target
        setEmail(email)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setInputError('Неверный логин или пароль')
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    }

    const validatePassword = (event: any) => {
        const password = event.target.value
        const input = event.target
        setPassword(password)

       if (password.length < 3 || password.length > 10) {
            setInputError('Неверный логин или пароль')
           input.classList.add('error')
        } else {
            input.classList.remove('error')
            setInputError('')
        }
    }

    // const checkButton = (event: any) => {
    //     const input = event.target
    //     if (inputError) {
    //         input.classList.add('block')
    //     } else {
    //         input.classList.remove('block')
    //     }
    // }

    return (
            <div className="signIn">
                <form className="signIn">
                    <input
                        name="email"
                        type="text"
                        placeholder="Адрес электронной почты"
                        value={email}
                        onChange={validateEmail}
                        onBlur={handlerBlur}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={validatePassword}
                        onBlur={handlerBlur}
                    />
                    {((emailDirty && passwordDirty) && inputError) && <div style={{color: 'red', marginTop: 18}}>{inputError}</div>}
                    <button disabled={!formValid} type="submit">Войти</button>
                </form>
            </div>
    );
}

