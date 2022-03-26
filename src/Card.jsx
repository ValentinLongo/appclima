import Styles from "./Card.module.css"
import { Get } from "./Get"
import { Set } from "./Set"

export function Card(){
    return(
        <div className={Styles.card}>
            <Set/>
            <Get/>
        </div>
    )
}