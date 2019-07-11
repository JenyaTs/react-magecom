function newTaskAdder(arr, id, task) {
    let parsedId = id.split('.');
    let idElem = parsedId[0];
    let count = 0;

    function taskAdderPusher(arr, task) {
        for (let i = 0; i < arr.length; i++) {

            if (`${arr[i].id}` === idElem && parsedId.length - 1 > count) {
                idElem = `${idElem}.${parsedId[count + 1]}`;
                count++;
                taskAdderPusher(arr[i].subCategory, task);
            }


            if (`${arr[i].id}` === idElem && parsedId.length - 1 === count) {
                arr[i].tasks.push(task);
                break;
            }
        }
    }

    taskAdderPusher(arr, task);
}

export default newTaskAdder;
