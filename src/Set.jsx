import Styles from "./Set.module.css"

export function Set(){
    return(
    <div className={Styles.set}>
        <input type="text" className={Styles.input}/>
        <input type="text" className={Styles.input}/>
        <button className={Styles.button}>Aceptar</button>
    </div>)
}