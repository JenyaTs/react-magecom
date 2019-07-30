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
                let date = new Date();
                let endDate = new Date();
                endDate.setDate(date.getDate() + 3);

                const taskObject = {};
                taskObject.id = `${idElem}/${arr[i].tasks.length + 1}`;
                taskObject.title = task;
                taskObject.description = 'Description';
                taskObject.startDate = date;
                taskObject.endDate = endDate;
                taskObject.isDone = 'Comment';
                taskObject.dod = false;

                arr[i].tasks.push(taskObject);
                break;
            }
        }
    }

    taskAdderPusher(arr, task);

    return arr;
}

export default newTaskAdder;
