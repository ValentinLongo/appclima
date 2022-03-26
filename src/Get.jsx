import Styles from "./Get.module.css"

export function Get(){
    return(
        <div className={Styles.get}>
            <p>Location:</p>
            <p>Temperature:</p>
            <p>Humidity:</p>
            <p>Wind Speed:</p>
        </div>
    )
}