export default class Editor {
    constructor() {
        this.editCategoryId = localStorage.getItem("editCategoryId") ? localStorage.getItem("editCategoryId") : null; //store category id
        this.editCategoryMode = localStorage.getItem("editCategoryMode") ? localStorage.getItem("editCategoryMode") : false; //set category edit mode
    }
   
    /**
     * set the current Category
     *  To Be Edited 
    */
    setEditCategoryId(id){
        localStorage.setItem("editCategoryId", id);
    }
    
    /**
     * return id of category to be edited
    */

    returnEditCategoryId(){
        return Number(localStorage.getItem('editCategoryId'));
    }

    /**
     * set Category Mode
    */
   setEditCategoryMode(mode){
    localStorage.setItem("editCategoryMode", mode);
}
}