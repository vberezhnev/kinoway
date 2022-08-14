import styles from './Button.module.scss'

type Data = {
    text: String
}

const Button = (props: Data) => {
    return (
        <button className={styles.ButtonBase_btn}>{props.text}</button>
    )
}

export default Button