function removeCategory(rootArr, id) {
    let parsedId;

    typeof(id) === 'string' ?
        parsedId = id.split('.') :
        parsedId = `${id}`;

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
                parent.splice(i, 1);
                break;
            }
        }
    }

    arrayCategorySplicer(rootArr);
}

export default removeCategory;
