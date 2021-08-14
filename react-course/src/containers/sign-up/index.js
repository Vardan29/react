import React, {useEffect, useState} from 'react';
import {DAYS, GENDERS, MONTHS, REGEXP, YEARS} from '../../helpers/constants';
import {signUpUser} from "../../core/controllers/signup";

const SignUp = () => {
    const [email, changeEmail] = useState('');
    const [fullName, changeFullName] = useState('');
    const [phone, changePhone] = useState('');
    const [password, changePassword] = useState('');
    const [confirmPassword, changeConfirmPassword] = useState('');
    const [day, changeDay] = useState(1);
    const [month, changeMonth] = useState(0);
    const [year, changeYear] = useState(2021);
    const [gender, changeGender] = useState(1);

    const [isValid, changeIsValid] = useState({
        email: true,
        fullName: true,
        phone: true,
        password: true,
        confirmPassword: true,
        date: true
    });

    const validateEmail = () => {
        changeIsValid({
            ...isValid,
            email: REGEXP.email.test(email.toLowerCase())
        });
    }

    const validateFullName = () => {
        changeIsValid({
            ...isValid,
            fullName: REGEXP.fullName.test(fullName)
        });
    }

    const validatePhone = () => {
        changeIsValid({
            ...isValid,
            phone: REGEXP.phone.test(phone)
        });
    }

    const validatePassword = () => {
        changeIsValid({
            ...isValid,
            password: REGEXP.password.test(password),
            confirmPassword: confirmPassword === password
        });
    }

    function calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const validateDate = () => {
        changeIsValid({
            ...isValid,
            date: calculateAge(new Date(year, month, day)) > 10
        });
    }

    useEffect(() => {
        if (email) {
           validateEmail();
        }
    }, [email]);

    useEffect(() => {
        if (fullName) {
           validateFullName();
        }
    }, [fullName]);

    useEffect(() => {
        if (password || confirmPassword) {
            validatePassword();
        }
    }, [password, confirmPassword]);

    useEffect(() => {
       if (phone) {
           validatePhone();
       }
    }, [phone]);

    useEffect(() => {
        if(year !== 2021 || month !== 0 || day !== 1){
            validateDate();
        }
    }, [day, month, year]);

    const signUp = () => {
        const checked = Object.values(isValid).every(Boolean);
        if(email && fullName && phone && password && checked){
            const user = {
                email,
                fullName,
                phone,
                password,
                birthDate: new Date(year, month, day),
                gender
            };
            signUpUser(user);
        } else {
            changeIsValid({
                email: REGEXP.email.test(email.toLowerCase()),
                fullName: REGEXP.fullName.test(fullName),
                phone: REGEXP.phone.test(phone),
                password: REGEXP.password.test(password),
                confirmPassword: confirmPassword === password,
                date: calculateAge(new Date(year, month, day)) > 10
            });
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>

            Email:
            <input
                type={'text'}
                value={email}
                className={!isValid.email ? 'validation-error' : null}
                onChange={({target: {value}}) => changeEmail(value)}
            />
            {!isValid.email && <span className={'validation-error'}>Email must be valid email address.</span>}
            <br/>

            Full Name:
            <input
                type={'text'}
                value={fullName}
                className={!isValid.fullName ? 'validation-error' : null}
                onChange={({target: {value}}) => changeFullName(value)}
            />
            {!isValid.fullName &&
            <span className={'validation-error'}>Full name must contain two words with minimum three symbols length for each.</span>}
            <br/>

            Phone:
            <input
                type={'text'}
                value={phone}
                className={!isValid.phone ? 'validation-error' : null}
                onChange={({target: {value}}) => changePhone(value)}
            />
            {!isValid.phone && <span className={'validation-error'}>Phone must be valid phone number</span>}
            <br/>

            Password:
            <input
                type={'password'}
                value={password}
                className={!isValid.password ? 'validation-error' : null}
                onChange={({target: {value}}) => changePassword(value)}
            />
            {!isValid.password &&
            <span className={'validation-error'}>Password have to contain minimum 8 symbols and at least one uppercase, one lowercase, one special and one numeric symbol.</span>}
            <br/>

            Confirm Password:
            <input
                type={'password'}
                value={confirmPassword}
                className={!isValid.confirmPassword ? 'validation-error' : null}
                onChange={({target: {value}}) => changeConfirmPassword(value)}
            />
            {!isValid.confirmPassword &&
            <span className={'validation-error'}>Confirm password and password have to match.</span>}
            <br/>

            Birth date:
            <select
                value={day}
                className={!isValid.date ? 'validation-error' : null}
                onChange={({target: {value}}) => changeDay(+value)}
            >
                {DAYS.map((day) => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
            <select
                value={month}
                className={!isValid.date ? 'validation-error' : null}
                onChange={({target: {value}}) => changeMonth(+value)}
            >
                {MONTHS.map((month, i) => (
                    <option key={month} value={i}>{month}</option>
                ))}
            </select>
            <select
                value={year}
                className={!isValid.date ? 'validation-error' : null}
                onChange={({target: {value}}) => changeYear(+value)}
            >
                {YEARS.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            {!isValid.date && <span className={'validation-error'}>You must be older then 10 years</span>}
            <br/>

            {GENDERS.map(currentGender => (
                <label key={currentGender.id}>
                    <input
                        type='radio'
                        value={currentGender.id}
                        checked={gender === currentGender.id}
                        onChange={() => changeGender(currentGender.id)}
                    />
                    {currentGender.label}
                </label>
            ))}
            <br/>

            <button onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default SignUp;