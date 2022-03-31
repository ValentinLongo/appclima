import Styles from "./Get.module.css"

const Get = props =>{
    console.log(props)
    return(
            <div className={Styles.get}>
                {
                    props.error &&
                    <div>
                        <p>{props.error}</p>
                    </div>
                }
                {props.temperature ?
                <div>
                    {
                    props.city && props.country &&
                    <p>Location: {props.city}, {props.country}</p>
                    }
                    {
                    props.temperature &&
                    <p>Temperature: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                    props.humidity &&
                    <p>Humidity: {props.humidity}</p>
                    }
                    {
                    props.wind_speed &&
                    <p>Wind Speed: {props.wind_speed}</p>
                    }
                </div>
                :
                <div >
                    <i></i>
                </div>
                }
            </div>
    )
}

export default Get;