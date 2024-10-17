document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let score = 0;
    const totalQuestions = 10;

    // Sumar puntos según las respuestas
    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            score += parseInt(question.value);
        }
    }

    // Calcular el porcentaje
    let percentage = (score / totalQuestions) * 100;

    // Asegurar que el porcentaje esté entre 0 y 100
    percentage = Math.max(0, Math.min(percentage, 100));

    // Mostrar resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Su nivel de digitalización es: ${percentage.toFixed(2)}%`;
});
