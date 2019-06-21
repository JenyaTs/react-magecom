function parseSubCat(array, props, newArr) {
    array.forEach((element) => {
        if(element.id === props.id) {
            element.subCategory.push(newArr);
        }

        if (element.subCategory.length  > 0) {
            parseSubCat(element.subCategory)
        }
    });
}

export default parseSubCat();