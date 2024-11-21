document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const highPriorityList = document.getElementById('high-priority-list');
    const lowPriorityList = document.getElementById('low-priority-list');
    const priorityAlta = document.getElementById('pAlta');
    const priorityBaja = document.getElementById('pBaja');

    // Evento para agregar una tarea
    addTaskButton.addEventListener('click', () => {
        const textoTarea = taskInput.value.trim();
        const prioridad = priorityAlta.checked ? 'alta' : priorityBaja.checked ? 'baja' : '';

        // Validar entrada
        if (textoTarea === '') {
            alert('Por favor, ingresa una tarea.');
            return;
        }
        if (prioridad === '') {
            alert('Por favor, selecciona una prioridad.');
            return;
        }

        // Crear elemento de tarea
        const elementoTarea = document.createElement('li');

        // Crear checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            spanTarea.textContent = `${textoTarea} - ${checkbox.checked ? 'Completado' : 'No completado'}`;
            if (checkbox.checked) {
                elementoTarea.classList.add('completed');
            } else {
                elementoTarea.classList.remove('completed');
            }
        });

        // Crear el texto de la tarea
        const spanTarea = document.createElement('span');
        spanTarea.textContent = `${textoTarea} - No completado`;

        // Crear botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'delete-button';
        botonEliminar.addEventListener('click', () => elementoTarea.remove());

        // Ensamblar tarea
        elementoTarea.appendChild(checkbox);
        elementoTarea.appendChild(spanTarea);
        elementoTarea.appendChild(botonEliminar);

        // Agregar a la lista correspondiente
        if (prioridad === 'alta') {
            highPriorityList.appendChild(elementoTarea);
        } else {
            lowPriorityList.appendChild(elementoTarea);
        }

        // Limpiar campos
        taskInput.value = '';
        priorityAlta.checked = false;
        priorityBaja.checked = false;
    });
});