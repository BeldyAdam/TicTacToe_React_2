export default function Elem(props){
    function katt(){
        props.fv(props.index);
    }

    return(
        <div className="Elem" onClick={()=> katt()}>{props.jel}</div>
    )
}