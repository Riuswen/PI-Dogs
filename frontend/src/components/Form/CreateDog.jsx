import React from "react";
import { createDog } from '../../Redux/actions';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../Form/CreateDog.module.css';

const CreateDog = () => {
    const dispatch = useDispatch();
  
    const [form, setForm] = useState({
      imagen: "",
      nombre: "",
      altura: "",
      peso: "",
      longevidad: "",
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (form.nombre === "") {
        alert("Please enter a name");
        return;
      }
  
      const newDog = {
        imagen: form.imagen,
        nombre: form.nombre,
        altura: parseInt(form.altura),
        peso: parseInt(form.peso),
        longevidad: parseInt(form.longevidad),
      };
  
      dispatch(createDog(newDog));
    };
  
    return (
      <div>
        <Link to="/home" className={styles.homeButton}>Home</Link>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label}>Image: </label>
          <input
            className={styles.inputField}
            type="text"
            name="imagen"
            value={form.imagen}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.label}>Name: </label>
          <input
            className={styles.inputField}
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.label}>Height: </label>
          <input
            className={styles.inputField}
            type="number"
            name="altura"
            value={form.altura}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.label}>Weight: </label>
          <input
            className={styles.inputField}
            type="number"
            name="peso"
            value={form.peso}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className={styles.label}>Life Span: </label>
          <input
            className={styles.inputField}
            type="number"
            name="longevidad"
            value={form.longevidad}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.buttonContainer} type="submit">
          Update your dog
        </button>
      </form>
      </div>
    );
  };
  
  export default CreateDog;