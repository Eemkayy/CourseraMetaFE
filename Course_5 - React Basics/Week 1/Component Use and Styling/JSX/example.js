function Nav(props){
    return(
        <nav className="main-nav">
            <ul>
            <li>{props.first}</li>
            <li>{props.second}</li>
            <li>{props.third}</li>
            <li>{props.fourth}</li>
            </ul>

        </nav>
        
    );
}

export default Nav;Jsxlist;Header;

function Jsxlist(){
    return(
        <ul>
            <li>{"He" + "llo"}</li>
            <li>{2}</li>
            <li>{2*2}</li>
            <li>{16/2}</li>
        </ul>
    )
}
/**
 * 
 * JSX rules
 * 
 * if multiple lines, return is between parentheses
 */


function Header(){
    return(
    <div>
        <h1>Welcome</h1>
        <h2>this is a component</h2>
    </div>);

}

/** Also can use <> </> instead of div, open and close tag without the tag name
 * 
 * Cannot use "class" to work with css elements, class is reserved word in javascript, we use className instead
 * 
 * HTML:
 * class=""
 * 
 * JSX
 * className=""
 * 
 */