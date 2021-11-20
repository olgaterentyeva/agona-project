import {useState} from "react";

export function Switch () {

    const [question, setQuestion] = useState('Еще не зарегистрированы?');
    const [href, setHref] = useState('Регистрация');
    const [isRegistered, setIsRegistered] = useState(false);


    const handleSwitch = () => {
        if (!isRegistered) {
            setQuestion('Есть логин для входа?')
            setHref('Войти')
            setIsRegistered(true)
        } else {
            setQuestion('Еще не зарегистрированы?')
            setHref('Регистрация')
            setIsRegistered(false)
        }
    }

    return (
        <div className="switch">
            <p>{question}</p>
            <a href="#" onClick={handleSwitch}>{href}</a>
        </div>
    );
}