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

  // Función para calcular BMR usando Mifflin-St Jeor (más precisa que Harris-Benedict)
  const getMifflinStJeorBySex = (peso, altura, edad, sexo) => {
    const imc = peso / ((altura / 100) ** 2); // Calcular IMC
  
    // Usar peso actual para el cálculo base (más preciso según la referencia)
    let pesoFinal = peso;

    let bmr;
    if (sexo === 'hombre') { //Formula de Mifflin-St Jeor (más precisa que Harris-Benedict)
      bmr = (10 * parseFloat(pesoFinal)) + (6.25 * parseFloat(altura)) - (5 * parseInt(edad)) + 5;
    } else {
      bmr = (10 * parseFloat(pesoFinal)) + (6.25 * parseFloat(altura)) - (5 * parseInt(edad)) - 161;
    }
    
    // Ajuste más conservador para personas con obesidad
    if (imc >= 35) {
      // Ajuste del 5% para obesidad severa
      bmr *= 0.95;
    } else if (imc >= 30) {
      // Ajuste del 2% para obesidad
      bmr *= 0.98;
    }
    
    return bmr;
  };

  const getObjetive = (objetivo) => parseFloat(objetivo);

  const calculateMacronutrients = (totalCalories) => {
    let carbPercentage, proteinPercentage, fatPercentage;

    switch (objetivo) {
      case '0.9': // Pérdida de grasa - Basado en evidencia científica actualizada 2024
        // Proteína moderada (20-25%) suficiente para preservar masa muscular
        // Carbohidratos moderados (45-50%) para mantener energía y función cerebral
        // Grasas saludables (25-30%) para hormonas y absorción de vitaminas
        carbPercentage = 0.50;
        proteinPercentage = 0.25;
        fatPercentage = 0.25;
        break;
      case '1': // Mantenimiento - Distribución equilibrada según RDA actualizado 2024
        // Proteína adecuada (15-20%) según requerimientos reales del organismo
        // Carbohidratos principales (50-55%) como fuente de energía preferida
        // Grasas esenciales (25-30%) para funciones metabólicas
        carbPercentage = 0.55;
        proteinPercentage = 0.20;
        fatPercentage = 0.25;
        break;
      case '1.1': // Ganancia muscular - Optimizado según evidencia científica 2024
        // Carbohidratos altos (50-55%) para energía en entrenamientos intensos
        // Proteína moderada (25-30%) suficiente para síntesis proteica muscular
        // Grasas moderadas (20-25%) para hormonas anabólicas
        carbPercentage = 0.50;
        proteinPercentage = 0.25;
        fatPercentage = 0.25;
        break;
      default:
        carbPercentage = 0.55;
        proteinPercentage = 0.20;
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
      const bmr = getMifflinStJeorBySex(peso, altura, edad, sexo);
      const finalObjetive = getObjetive(objetivo);
      
      // Cálculo más preciso del TDEE basado en la calculadora de referencia
      let activityFactor;
      if (pasos === '1') {
        // Si no cuenta pasos, usar el factor de actividad seleccionado
        activityFactor = parseFloat(actividad);
      } else {
        // Si cuenta pasos, usar el factor de pasos
        activityFactor = parseFloat(pasos);
      }
      
      // Calcular TDEE base (BMR × Factor de actividad)
      const tdeeBase = bmr * activityFactor;
      
      // Agregar el efecto del entrenamiento de fuerza de forma más conservadora
      const strengthTrainingFactor = parseFloat(entrenamiento);
      const tdeeWithTraining = tdeeBase * strengthTrainingFactor;
      
      // Aplicar el objetivo (déficit/superávit calórico)
      const totalCalories = Math.round(tdeeWithTraining * finalObjetive);

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
                <span>Hombre</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="mujer"
                  checked={sexo === 'mujer'}
                  onChange={(e) => setSexo(e.target.value)}
                />
                <span>Mujer</span>
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
              <option value="1.2">Menos de 2000 (Sedentario)</option>
              <option value="1.3">2000 - 4000 (Poco activo)</option>
              <option value="1.375">4000 - 6000 (Ligeramente activo)</option>
              <option value="1.45">6000 - 8000 (Activo)</option>
              <option value="1.55">8000 - 10000 (Moderadamente activo)</option>
              <option value="1.65">10000 - 12000 (Muy activo)</option>
              <option value="1.725">12000 - 15000 (Extremadamente activo)</option>
              <option value="1.8">Más de 15000 (Ultra activo)</option>
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
                <option value="1.2">Sedentario (trabajo de oficina, sin ejercicio)</option>
                <option value="1.3">Poco activo (trabajo sedentario + caminar ocasional)</option>
                <option value="1.375">Ligeramente activo (ejercicio ligero 1-3 días/semana)</option>
                <option value="1.45">Activo (trabajo de pie o ejercicio 3-4 días/semana)</option>
                <option value="1.55">Moderadamente activo (ejercicio moderado 4-5 días/semana)</option>
                <option value="1.65">Muy activo (ejercicio intenso 5-6 días/semana)</option>
                <option value="1.725">Extremadamente activo (ejercicio muy intenso 6-7 días/semana)</option>
                <option value="1.8">Ultra activo (trabajo físico intenso + ejercicio diario)</option>
              </select>
            </div>
          )}

          {/* Entrenamiento */}
          <div className="form-group">
            <label htmlFor="entrenamiento" className="form-label">
              Días/semana de entrenamiento de fuerza <sup className="text-danger">*</sup>
            </label>
            <select
              id="entrenamiento"
              className="form-select"
              value={entrenamiento}
              onChange={(e) => setEntrenamiento(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="1">No entreno fuerza</option>
              <option value="1.02">1 día/semana</option>
              <option value="1.04">2 días/semana</option>
              <option value="1.06">3 días/semana</option>
              <option value="1.08">4 días/semana</option>
              <option value="1.1">5 días/semana</option>
              <option value="1.12">6 días/semana</option>
              <option value="1.15">7 días/semana</option>
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
            <h3>Tus calorías aproximadas son:</h3>
               <h1><strong className="text-light">{finalResult} Kcal</strong></h1>
            {macros && (
                <div className="macros m-2 text-start">
                  <h4>Distribución de Macronutrientes</h4>
                <h4 className="text-primary">
                  <span>Proteínas</span>
                  <span>{parseInt(macros.protein)} g</span>
                </h4>
                <h4 className="text-success">
                  <span>Carbohidratos</span>
                  <span>{parseInt(macros.carbs)} g</span>
                </h4>
                <h4 className="text-warning">
                  <span>Grasas</span>
                  <span>{parseInt(macros.fat)} g</span>
                </h4>
                
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
