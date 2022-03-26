import Styles from "./Set.module.css"

export function Set(){
    return(
    <div className={Styles.set}>
        <input type="text" className={Styles.input} placeholder="Ciudad"/>
        <input type="text" className={Styles.input} placeholder="Pais"/>
        <button className={Styles.button}>Aceptar</button>
    </div>)
}