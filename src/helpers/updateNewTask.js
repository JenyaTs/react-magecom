function updateTask(rootArr, rootId, taskId, task) {
    let parsedId;

    typeof(rootId) === 'string' ?
        parsedId = rootId.split('.') :
        parsedId = `${rootId}`;

    let idElem = parsedId[0];
    let count = 0;
    let parent = rootArr;

    function arrayCategorySplicer(arr) {
        for (let i = 0; i < arr.length; i++) {

            if (`${arr[i].id}` === idElem && parsedId.length - 1 > count) {
                idElem = `${idElem}.${parsedId[count + 1]}`;
                count++;
                parent = arr[i].subCategory;
                arrayCategorySplicer(arr[i].subCategory);
            }


            if (`${arr[i].id}` === idElem && parsedId.length - 1 === count) {
                arr[i].tasks.map((el, idx) => {

                    if (el.id === taskId) {
                        arr[i].tasks[idx] = task;
                    }
                });
                break;
            }
        }
        console.log(rootArr);
    }

    arrayCategorySplicer(rootArr);
}

export default updateTask;