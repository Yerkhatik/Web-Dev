const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');



class item{
	constructor(name) {
        if (!name.trim()) {
            alert("Ошибка: поле не может быть пустым. Пожалуйста, введите значение.");
            return;
        }
        this.createItem(name);
    }
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

		var checkbox = document.createElement('input');
		checkbox.type = "checkbox"
		checkbox.classList.add('item_checkbox');
		checkbox.addEventListener('change',()=>this.checked(itemBox,checkbox))


    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "Edit";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Remove";
    	remove.addEventListener('click', () => this.remove(itemBox, name));


    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(checkbox);
		itemBox.appendChild(edit);
        itemBox.appendChild(remove);
		

    }
	checked(input,name){
		if (checkbox.checked) {
            itemBox.classList.add('completed');
            let index = todos.indexOf(name);
            if (index !== -1) {
                todos.splice(index, 1);
                completedTodos.push(name);
                window.localStorage.setItem("todos", JSON.stringify(todos));
                window.localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
            }
        } else {
            itemBox.classList.remove('completed');
            let index = completedTodos.indexOf(name);
            if (index !== -1) {
                completedTodos.splice(index, 1);
                todos.push(name);
                window.localStorage.setItem("todos", JSON.stringify(todos));
                window.localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
            }
        }
	}
    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        
		inputValue.value = "";
	}
}


new item("sport");