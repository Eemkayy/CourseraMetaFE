

/**HTML->JSX->React 
 * 
 * Embedded expressions allow JS values to be inserted into HTML of react element
*/

function formatName(firstName, surName){
    return firstName +" " + surName;
}

const result = <p>{formatName("Jane", "Wilson")}</p>;

//Expressions in HTML attributs

const url = "photo.png";

const hey = <img src={url}></img>;