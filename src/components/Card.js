import styles from './Card.module.css'

function Card({id}){
    return(

        <div className={styles.cardEstilizado}><p>{id}</p></div>

    )

}

export default Card