function setNewCategoryObject(id, value) {
    return {
        id: id,
        name: `${id}. ${value}`,
        tasks: [],
        subCategories: []
    }
}

export default setNewCategoryObject;