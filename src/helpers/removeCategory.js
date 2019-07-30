function removeCategory(rootArr, id) {
    let parsedId;
    let newArray;

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
                parent = arr[i].subCategories;
                arrayCategorySplicer(arr[i].subCategories);
            }


            if (`${arr[i].id}` === idElem && parsedId.length - 1 === count) {
                parent.splice(i, 1);
                newArray = [...rootArr];
            }
        }
    }

    arrayCategorySplicer(rootArr);

    return newArray;
}

export default removeCategory;
