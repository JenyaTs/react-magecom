function addSubCategory(array, newSub, props) {
    array.forEach((element) => {

        if (element.subCategory.length  > 0) {
            addSubCategory(element.subCategory, newSub, props)
        }
        
        if (element.id === props.id) {
            element.subCategory.push(newSub);
        }

        
    });
}

export default addSubCategory;