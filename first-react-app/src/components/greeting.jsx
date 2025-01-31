function greeting(props){
return(
    <div className="greeting">
    <h2>hello {props.name? props.name :'world'}</h2>
        {props.children}
        </div>
)}
export default greeting
