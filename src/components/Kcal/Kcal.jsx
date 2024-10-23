import React, { useState, useEffect } from 'react';
import './Kcal.css';
import { ScrollRestoration } from "react-router-dom";

const Kcal = () => {
  const [edad, setEdad] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [pasos, setPasos] = useState('');
  const [actividad, setActividad] = useState('1');
  const [entrenamiento, setEntrenamiento] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [sexo, setSexo] = useState('mujer');
  const [finalResult, setFinalResult] = useState(null);
  const [macros, setMacros] = useState(null);
  const [error, setError] = useState('');

  // Modificación en la fórmula
  const getMifflinStJeorBySex = (peso, altura, edad, sexo) => {
    const imc = peso / ((altura / 100) ** 2); // Calcular IMC
  
    // Si el IMC es mayor o igual a 30, usar el peso ideal ajustado, de lo contrario usar el peso actual
    let pesoFinal;
    if (imc >= 30) {
      const pesoIdeal = altura - 100; // Fórmula simplificada para peso ideal
      pesoFinal = pesoIdeal + 0.4 * (peso - pesoIdeal); // Fórmula del peso ajustado
    } else {
      pesoFinal = peso;
    }

    if (sexo === 'hombre') { //Formula de Mifflin-St Jeor o Harris-Benedict en caso de la aplicación
      return (10 * parseFloat(pesoFinal)) + (6.25 * parseFloat(altura)) - (5 * parseInt(edad)) + 5;
    } else {
      return (10 * parseFloat(pesoFinal)) + (6.25 * parseFloat(altura)) - (5 * parseInt(edad)) - 161;
    }
  };

  const getObjetive = (objetivo) => parseFloat(objetivo);

  const calculateMacronutrients = (totalCalories) => {
    let carbPercentage, proteinPercentage, fatPercentage;

    switch (objetivo) {
      case '0.9': // Pérdida de grasa
        carbPercentage = 0.45;
        proteinPercentage = 0.30;
        fatPercentage = 0.25;
        break;
      case '1': // Mantenimiento
        carbPercentage = 0.50;
        proteinPercentage = 0.25;
        fatPercentage = 0.25;
        break;
      case '1.1': // Ganancia muscular
        carbPercentage = 0.55;
        proteinPercentage = 0.20;
        fatPercentage = 0.25;
        break;
      default:
        carbPercentage = 0.50;
        proteinPercentage = 0.25;
        fatPercentage = 0.25;
    }

    const carbsCalories = totalCalories * carbPercentage;
    const proteinCalories = totalCalories * proteinPercentage;
    const fatCalories = totalCalories * fatPercentage;

    const carbsGrams = carbsCalories / 4;
    const proteinGrams = proteinCalories / 4;
    const fatGrams = fatCalories / 9;

    return {
      carbs: carbsGrams.toFixed(2),
      protein: proteinGrams.toFixed(2),
      fat: fatGrams.toFixed(2),
    };
  };


  const calculateKcalAndMacros = () => {
    if (edad && altura && peso && pasos && entrenamiento && objetivo && sexo) {
      const mifflinStJeor = getMifflinStJeorBySex(peso, altura, edad, sexo);
      const finalObjetive = getObjetive(objetivo);
      const totalCalories = Math.round(
        mifflinStJeor *
          parseFloat(pasos) *
          parseFloat(actividad) *
          parseFloat(entrenamiento) *
          finalObjetive
      );

      const calculatedMacros = calculateMacronutrients(totalCalories);

      setFinalResult(totalCalories);
      setMacros(calculatedMacros);
      setError('');
    } else {
      setError('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="kcal-calculator-container">
      <div className="kcal-calculator">
        <p>Introduce tus datos para calcular tus calorías y macronutrientes aproximados.</p>
      </div>

      <div className="form-container">
        <form className="kcal-calculator-form" id="myForm">
          {/* Sexo */}
          <div className="form-group">
            <label className="form-label">
              Sexo: <sup className="text-danger">*</sup>
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="hombre"
                  checked={sexo === 'hombre'}
                  onChange={(e) => setSexo(e.target.value)}
                />
                Hombre
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="mujer"
                  checked={sexo === 'mujer'}
                  onChange={(e) => setSexo(e.target.value)}
                />
                Mujer
              </label>
            </div>
          </div>

          <div className="form-group flex-row">
            <div className="form-field">
              <label htmlFor="edad" className="form-label">
                Edad <sup className="text-danger">*</sup>
              </label>
              <input
                type="number"
                id="edad"
                className="form-control"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="altura" className="form-label">
                Altura (cm) <sup className="text-danger">*</sup>
              </label>
              <input
                type="number"
                id="altura"
                className="form-control"
                placeholder="Altura (cm)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="peso" className="form-label">
                Peso (kg) <sup className="text-danger">*</sup>
              </label>
              <input
                type="number"
                id="peso"
                className="form-control"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Pasos */}
          <div className="form-group">
            <label htmlFor="pasos" className="form-label">
              Cantidad de pasos <sup className="text-danger">*</sup>
            </label>
            <select
              id="pasos"
              className="form-select"
              value={pasos}
              onChange={(e) => setPasos(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">No los he contado</option>
              <option value="1.2">Menos de 1000</option>
              <option value="1.37">Entre 2 000 y 6 000</option>
              <option value="1.46">Entre 7 000 y 9 000</option>
              <option value="1.55">Entre 10 000 y 15 000</option>
              <option value="1.71">Entre 16 000 y 18 000</option>
              <option value="1.86">Más de 19 000</option>
            </select>
          </div>

          {/* Actividad diaria */}
          {pasos === '1' && (
            <div className="form-group">
              <label htmlFor="actividad" className="form-label">
                Tipo de Actividad diaria <sup className="text-danger">*</sup>
              </label>
              <select
                id="actividad"
                className="form-select"
                value={actividad}
                onChange={(e) => setActividad(e.target.value)}
                required
              >
                <option value="1">Selecciona una opción</option>
                <option value="1.2">Mayormente sentado (Sedentario)</option>
                <option value="1.37">Cardio ligero (1-3 días/semana)</option>
                <option value="1.55">Cardio moderado (3-5 días/semana)</option>
                <option value="1.71">Mucho cardio o Mayormente de pie (Camareros/Operadores)</option>
                <option value="1.86">Soy deportista de alto rendimiento (6-7 veces/semana)</option>
              </select>
            </div>
          )}

          {/* Entrenamiento */}
          <div className="form-group">
            <label htmlFor="entrenamiento" className="form-label">
              Días/ semana de entrenar pesas <sup className="text-danger">*</sup>
            </label>
            <select
              id="entrenamiento"
              className="form-select"
              value={entrenamiento}
              onChange={(e) => setEntrenamiento(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">No entreno pesas</option>
              <option value="1.05">1-2 días</option>
              <option value="1.1">3-4 días</option>
              <option value="1.15">5-6 días</option>
              <option value="1.20">7 días</option>
            </select>
          </div>

          {/* Objetivo */}
          <div className="form-group">
            <label htmlFor="objetivo" className="form-label">
              Objetivo <sup className="text-danger">*</sup>
            </label>
            <select
              id="objetivo"
              className="form-select"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="0.9">Perder grasa</option>
              <option value="1">Mantener peso</option>
              <option value="1.1">Ganar músculo</option>
            </select>
          </div>

          <div className="form-group">
            <button type="button" id="calculate" className="form-control" onClick={calculateKcalAndMacros}>
              CALCULAR
            </button>
            
        {error && <div className="breadcrumb-error">{error}</div>}
        {finalResult !== null && (
          <div className="result">
            <h3>Tus Kcal aproximadas son:</h3>
               <h1>  <strong className="text-light"> {finalResult} Kcal </strong></h1>
            {macros && (
                <div className="macros m-2 text-start">
                  <h4>Macronutrientes</h4>
                <h4 className="text-primary">Proteinas: {parseInt(macros.protein)} g</h4>
                <h4 className="text-success">Carbohidratos: {parseInt(macros.carbs)} g</h4>
                <h4 className="text-warning">Grasas: {parseInt(macros.fat)} g</h4>
                
              </div>
            )}
          </div>
        )}
    <p className="text-light ">*Los valores son aproximados, pueden variar en función de cada persona*</p>
          </div>
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Kcal;
