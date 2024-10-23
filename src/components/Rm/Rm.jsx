import React, { useState } from 'react';
import './Rm.css';
import { ScrollRestoration } from 'react-router-dom';

const Rm = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rm, setRm] = useState(null);
  const [error, setError] = useState('');

  const calculateRM = () => {
    if (weight && reps) {
      const rmValue = Math.round(weight / (1.0278 - (0.0278 * reps)));
      setRm(rmValue);
      setError('');
    } else {
        setError('Por favor, introduce un valor de peso y de repeticiones');
        setRm(null);
    }
  };

  return (
    <div className="rm-calculator-container">
        
      <div className="rm-calculator">
        <h2>Calculadora de RM</h2>
        <p>Introduce el peso levantado (kg) y la cantidad de repeticiones para calcular tu RM.</p>
        {error && <div className="breadcrumb-error">{error}</div>}
        {rm !== null && (
          <div className="result">
            <h4>Tu RM aproximado es:</h4>
            <h1 ><strong className="text-warning"> {rm} kg </strong></h1>
          </div>
        )}
      </div>
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="weight">Peso levantado (kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reps">Número de repeticiones:</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={calculateRM}>Calcular</button>
        </form>

      </div>
      <ScrollRestoration />
    </div>
  );
}

export default Rm;
