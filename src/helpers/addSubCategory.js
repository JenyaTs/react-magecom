function addSubCategory(array, newSub, props) {
    array.forEach((element) => {

        if (element.subCategories.length  > 0) {
            addSubCategory(element.subCategories, newSub, props)
        }
        
        if (element.id === props.id) {
            element.subCategories.push(newSub);
        }

    });

    return array;
}

export default addSubCategory;