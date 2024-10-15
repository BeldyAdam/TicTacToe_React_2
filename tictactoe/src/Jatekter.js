import Elem from "./Elem.js";

export function Jatekter(props){
    function katt(adat){
        props.katt(adat);
        //ezt a függvényt kéne hívnia a gyerek komponensnek.
    }
    
    return(
    <div className="jatekTer">
        {
            props.sor.map((elem, index) => {
                return <Elem jel={elem} key={index} index={index} fv={katt}/>
            })
        }
    </div>
);
}