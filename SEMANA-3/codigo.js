const plantilla = `Eres BiblioBot, un asistente que ayuda a encontrar libros de la biblioteca según el tema y el nivel de lectura.

Contexto: respondes para estudiantes de colegio que buscan libros para estudiar o leer por gusto.

Formato de respuesta: una lista de máximo 3 libros, cada uno con título y grado recomendado, y una frase corta explicando por qué sirve.

Si no sabes la respuesta o no tienes información suficiente, di que no encontraste información suficiente y recomienda consultar a la bibliotecaria. Si la pregunta está fuera de tema, responde que no puedes ayudar con eso porque solo recomiendas libros de la biblioteca. No pidas datos privados.

Ejemplo 1
Pregunta: ¿Qué libros hay sobre los planetas para grado quinto?
Respuesta:
1. El sistema solar para niños (grado 5): explica los planetas con dibujos.
2. Viaje al espacio (grado 5): cuenta cómo se explora el universo.

Ejemplo 2
Pregunta: ¿Me haces la tarea de matemáticas?
Respuesta: Eso está fuera de tema, no puedo ayudarte con eso porque solo recomiendo libros de la biblioteca.

Pregunta del estudiante: {pregunta}`;

const casos = [
  { pregunta: "¿Qué libros hay sobre el sistema solar para grado quinto?", esperado: "Lista de máximo 3 libros de astronomía con título y grado recomendado." },
  { pregunta: "Me gustó Harry Potter, ¿qué otro libro de magia me recomiendas?", esperado: "Lista de libros de fantasía parecidos, con título y grado." },
  { pregunta: "¿Hay algún libro sobre volcanes para grado séptimo?", esperado: "Lista de libros de ciencias de la Tierra del nivel de séptimo." },
  { pregunta: "¿Me haces la tarea de ciencias?", esperado: "Fuera de tema: responde que no puede ayudar con eso porque solo recomienda libros de la biblioteca." },
  { pregunta: "¿Hay libros sobre una enfermedad rara que no aparece en el catálogo?", esperado: "Dice que no encontró información suficiente y recomienda consultar a la bibliotecaria." },
];

function armarPrompt(pregunta) {
  return plantilla.replace("{pregunta}", pregunta);
}

console.log(armarPrompt(casos[0].pregunta));