(function() {
    const taskName = document.querySelector('.task-name')
    const addTask = document.querySelector('.add-task')
    const toAddForm = document.querySelector('.to-add')
    const ul = document.querySelector('#todo-list')

    const tasks = [
        {
            name: 'task1',
            creation: Date.now(),
            completed: false
        },
        {
            name: 'task2',
            creation: Date.now(),
            completed: false
        }
    ]

    function createLi (obj){
        const li = document.createElement('li')
        li.className = 'task-item'
        // ul.appendChild(li)

        const iCheck = document.createElement('i')
        iCheck.className = 'fa-regular fa-square-full'
        li.appendChild(iCheck)

        const iConfirmCheck =  document.createElement('i')
        iConfirmCheck.className = 'fa-solid fa-check displayNone'
        iCheck.appendChild(iConfirmCheck)

        const p = document.createElement(p)
        p.className = 'name-the-task'
        li.appendChild(p)

        const divEditDelete = createElement('div')
        divEditDelete.className = 'edit-delete'
        li.appendChild(divEditDelete)

        const iEdit = document.createElement('i')
        iEdit.className = 'fa-regular fa-pen-to-square'
        divEditDelete.appendChild(iEdit)

        const iCancel = document.createElement('i')
        iCancel.className = 'fa-regular fa-trash-can'
        divEditDelete.appendChild(iCancel)

        const divContainerEdit = document.createElement('div')
        divContainerEdit.className = 'container-edit'
        li.appendChild(divContainerEdit)

        const inputNewTask = document.createElement('input')
        inputNewTask.className = 'new-task-name'
        divContainerEdit.appendChild(inputNewTask)

        const inputAlter = document.createElement('input')
        inputAlter.className = 'to-alter'
        divContainerEdit.appendChild(inputAlter)

        const inputCancel = document.createElement('input')
        inputCancel.className = 'cancel'
        divContainerEdit.appendChild(inputCancel)

        p.textContent = obj.name

        return li
    }

    function addLi (e) {
        if (taskName.value == '') {
            alert('digite os dados')
            taskName.focus()
        } else {
            renderLi()
            taskName.value = ''
            taskName.focus()
        }

        e.preventDefault()
    }

    function renderLi() {
        ul.innerHTML = ''
        tasks.forEach(task => {
            ul.appendChild(createLi(task))
        })
    }

    toAddForm.addEventListener('submit', addLi)

})()