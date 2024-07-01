(function () {
    const taskName = document.querySelector('.task-name')
    const addTask = document.querySelector('.add-task')
    const toAddForm = document.querySelector('.to-add')
    const ul = document.querySelector('#todo-list')
    const lis = document.getElementsByClassName('task-item')

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



    function createLi(obj) {
        const li = document.createElement('li')
        li.className = 'task-item'
        ul.appendChild(li)

        const iCheck = document.createElement('i')
        iCheck.className = 'fa-regular fa-square-full'
        iCheck.setAttribute('data-action', 'iCheck')
        li.appendChild(iCheck)

        iCheck.innerHTML += `
            <i class='fa-solid fa-check ${obj.completed == true ? "":"displayNone"}' data-action= 'iCheck'></i>
        `
        console.log()
        // const iConfirmCheck = document.createElement('i')
        // iConfirmCheck.className = 'fa-solid fa-check displayNone'
        // iCheck.appendChild(iConfirmCheck)

        const p = document.createElement('p')
        p.className = 'name-the-task'
        li.appendChild(p)

        const divEditDelete = document.createElement('div')
        divEditDelete.className = 'edit-delete'
        li.appendChild(divEditDelete)

        const iEdit = document.createElement('i')
        iEdit.className = 'fa-regular fa-pen-to-square'
        iEdit.setAttribute('data-action', 'iEdit')
        divEditDelete.appendChild(iEdit)

        const iDelet = document.createElement('i')
        iDelet.className = 'fa-regular fa-trash-can'
        iDelet.setAttribute('data-action', 'iDelet')
        divEditDelete.appendChild(iDelet)

        const divContainerEdit = document.createElement('div')
        divContainerEdit.className = 'container-edit'
        li.appendChild(divContainerEdit)

        const inputNewTask = document.createElement('input')
        inputNewTask.className = 'new-task-name'
        divContainerEdit.appendChild(inputNewTask)

        const inputAlter = document.createElement('button')
        inputAlter.className = 'to-alter'
        inputAlter.textContent = 'Alter'
        inputAlter.setAttribute('data-action', 'inputAlter')
        divContainerEdit.appendChild(inputAlter)

        const inputCancel = document.createElement('button')
        inputCancel.className = 'cancel'
        inputCancel.textContent = 'Cancel'
        inputCancel.setAttribute('data-action', 'inputCancel')
        divContainerEdit.appendChild(inputCancel)

        p.textContent = obj.name

     
        return li

    }


    function addLi(e) {
        if (taskName.value == '') {
            alert('digite os dados')
            taskName.focus()
        } else {
            addTasks(taskName.value)
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

    function addTasks(task) {
        tasks.push({
            name: task,
            creation: Date.now(),
            completed: false
        })
    }

    function clickUl(e) {
        const dataAction = e.target.getAttribute('data-action')


        if (!dataAction) return

        let currentLi = e.target

        while(currentLi.nodeName !== 'LI') {
            currentLi = currentLi.parentElement
        }

        const liIndex = [...lis].indexOf(currentLi)
        

        const actions = {
            iEdit: function() {
                const divContainerEdit = currentLi.querySelector('.container-edit');
                [...ul.querySelectorAll('.container-edit')].forEach(container => {
                    container.removeAttribute('style')
                });

                divContainerEdit.style.display = 'flex'
            },

            inputCancel: function() {
                const divContainerEdit = currentLi.querySelector('.container-edit');
                divContainerEdit.style.display = 'none'
            },

            iDelet: function() {
                tasks.splice(liIndex, 1)
                renderLi()
            },

            inputAlter: function() {
                const newName = currentLi.querySelector('.new-task-name').value
                tasks[liIndex].name = newName
                renderLi()
            },

            iCheck: function() {
                const iConfirmCheck = currentLi.querySelector('.iConfirmCheck')
                tasks[liIndex].completed = !tasks[liIndex].completed
                console.log(tasks[liIndex].completed)
                renderLi()
                
            }


        }
        if (actions[dataAction]) {
            actions[dataAction]()
        }
    };

    toAddForm.addEventListener('submit', addLi)
    ul.addEventListener('click', clickUl)
    renderLi()

})()