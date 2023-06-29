import { useState } from "react";
import "./index.css";

const Contacts = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${nameInput}, Surname: ${surnameInput}, Email: ${emailInput}`
    );
  };

  //   const onHandleNameInput = (e) => setNameInput(e.target.value);

  const onHandleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setNameInput(e.target.value);
        break;

      case "surname":
        setSurnameInput(e.target.value);
        break;

      case "email":
        setEmailInput(e.target.value);
        break;
    }
  };

  return (
    <form className="Contacts" onSubmit={onHandleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo nome"
        id="name"
        name="name"
        value={nameInput}
        onChange={onHandleChange}
      />
      <label htmlFor="surname">Cognome</label>
      <input
        type="text"
        placeholder="Inserisci il tuo cognome"
        id="surname"
        name="surname"
        value={surnameInput}
        onChange={onHandleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Inserisci la tua email"
        name="email"
        value={emailInput}
        onChange={onHandleChange}
      />
      <input type="submit" value="Invia" />
    </form>
  );
};

export default Contacts;
