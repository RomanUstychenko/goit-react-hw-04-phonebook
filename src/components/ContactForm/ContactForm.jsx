// import { Component } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import css from "./ContactForm.module.css"


export default function ContactForm({onSubmit}) {
   const [state, setState] = useState({
            name: '',
            number: '',
   });

  const nameID = nanoid();
  const telID = nanoid();

  const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => {
          return {
            ...prev,
            [name]: value,
          }
        })
      };

  const handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = state;
        onSubmit({name, number})
        setState ({
          name: '',
          number: '',
        })
      };

      return ( 
        <form 
        className={css.form}
        onSubmit={handleSubmit}>
        <div className={css.formInput}>
          <label htmlFor={nameID}>Name</label>
          <input 
          className={css.formInputName}
          id={nameID} 
          type="text" 
          name="name" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name} 
          onChange={handleChange} />
        </div>
        <div className={css.formInput}>
          <label htmlFor={telID}>Number</label>
          <input 
          className={css.formInputTel}
          id={telID} 
          type="number" 
          name="number" 
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number} 
          onChange={handleChange} 
          required/>
        </div>
        <button 
        className={css.formBtn}
        type="submit">Add</button>
        </form>
        )
};


    ContactForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };