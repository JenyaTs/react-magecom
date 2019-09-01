function getTask(data) {
    let task;
    data.todos.map((el) => {
        if(el.id === data.id) {
            task = el;
        }
    });

    return task;
    
}

export default getTask;
