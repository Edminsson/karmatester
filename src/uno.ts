namespace Dummy {

    export function isBodyPresent() {
        return $(document.body).length;
    }
    
    export function isElementPresent(id:any) {
        return $(`#${id}`).length;
    }

}


