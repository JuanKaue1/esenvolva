const fechar_a = document.querySelector('.closer_minhas_consultas_a');
const alerta_a = document.querySelector(".alert_minhas_consultas_a");
const cancelar_a = document.querySelector(".cancelar_minhas_consultas_a");
const cancelar_b = document.querySelector(".alert_minhas_consultas_b");

fechar_a.addEventListener('click', () => {
    if (alerta_a.style.display !== 'flex') {
        alerta_a.style.display = 'flex'
    }
});

cancelar_a.addEventListener('click', () => {
    if (alerta_a.style.display !== 'none') {
        alerta_a.style.display = 'none';
        cancelar_b.style.display = 'flex';
        setTimeout(() => {
            cancelar_b.style.display = 'none'
        }, 2000);
    }
});

