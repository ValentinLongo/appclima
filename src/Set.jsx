import Styles from "./Set.module.css"
import React from 'react';

const Set = props => (   
        <form onSubmit={props.getWeather}>
            <div className={Styles.set}>
                <input type="text" name="city" className={Styles.input} placeholder="Ciudad"/>
                <input type="text" name="country" className={Styles.input} placeholder="Pais"/>
                <button className={Styles.button}>Aceptar</button>
            </div>
        </form>
    );

export default Set;