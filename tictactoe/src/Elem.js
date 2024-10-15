export default function Elem(props){
    function katt(){
        console.log("elem: " + props.jel);
        console.log("elem: " + props.index);
    }

    return(
        <div className="Elem" onClick={()=> katt()}>{props.jel}</div>
    )
}