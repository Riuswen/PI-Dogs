import React from "react";
import { createDog } from '../../Redux/actions';
import { useDispatch } from "react-redux";
import { useState } from "react";

const CreateDog = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        imagen: '',
        nombre: '',
        minHeight: '',
        maxHeight:'',
        minWeight: '',
        maxWeight: '',
        longevidad: '',
        // temperament: [],
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

     if (form.nombre === '') {
        alert('Please enter a name');
        return;
     }

     if (form.minHeight >= form.maxHeight) {
        alert('Min Height should be less than Max Height')
        return;
     }

     if (form.minWeight >= form.maxWeight){
        alert('Min Weight should be less than Max Weight');
        return;
     }
     console.log(form);
     dispatch(createDog(form));
    };

    return (
        <form onSubmit={handleSubmit}>
             <div>
            <label>Image: </label>
            <input
              type="text"
              name="imagen"
              value={form.imagen}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label> Min Height: </label>
            <input
              type="number"
              name="minHeight"
              value={form.altura}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label> Max Height: </label>
            <input
              type="number"
              name="maxHeight"
              value={form.altura}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Min Weight: </label>
            <input
              type="number"
              name="minWeight"
              value={form.peso}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Max Weight: </label>
            <input
              type="number"
              name="maxWeight"
              value={form.peso}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Life Span: </label>
            <input
              type="number"
              name="longevidad"
              value={form.longevidad}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Crear Raza</button>
        </form>
      );
    };

export default CreateDog;