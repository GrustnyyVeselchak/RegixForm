import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!/^[a-zA-Zа-яА-Я]+$/.test(name)) {
      newErrors.name = 'Имя должно содержать только буквы';
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!/^\d{2}.\d{2}.\d{4}$/.test(date)) {
      newErrors.date = 'Дата рождения должна быть в формате дд.мм.гггг';
    }

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Форма успешно отправлена!', {
        "имя":name, 
        "почта":email, 
        "дата":date
      });
    } else {
      console.log('Пожалуйста, исправьте ошибки');
    }
  };

  return (
    <div className="App-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <label>Имя</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        {errors.name && <p className="error">{errors.name}</p>}

        <div className="container">
          <label>Почта</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        <div className="container">
          <label>Дата рождения</label>
          <input 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
        {errors.dob && <p className="error">{errors.date}</p>}

        <button className="button" type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;

