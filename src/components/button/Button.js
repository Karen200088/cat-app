import React from 'react';
import styles from "./button.module.css";

const Button = ({ className ,children }) => {
    return (
        <button className={styles.button + " " +className}>
            {children}
        </button>
    );
};

export default Button;
