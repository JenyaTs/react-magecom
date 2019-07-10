function addNewTask(arr, id, task) {
    let parsedId = id.split('.');  
    let idElem = parsedId[0];
    let count = 0;

    // arr.map(function(el, idx) {
    //     if (`${el.id}` === idElem) {
    //         debugger;
    //         idElem = `${idElem}.${parsedId[count + 1]}`;
    //         count++;
    //         console.log(el);
    //         addNewTask(el.subCategory, id, task);
    //     }
    // })
    
    arr.map(function(el) {
        if (el.id == id) {
            el.tasks.push(task);
        }     

        if (el.subCategory) {
            addNewTask(el.subCategory, id, task);
        }
        
        return arr;
    })
}

export default addNewTask;