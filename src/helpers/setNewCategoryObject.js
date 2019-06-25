function setNewCategoryObject(id, value) {
    return {
        id: id,
        name: `${id}. ${value}`,
        tasks: [],
        subCategory: []
    }
}

export default setNewCategoryObject;