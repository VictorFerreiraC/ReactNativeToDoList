import React from "react"
import { View } from "react-native"
import styles from './styles';

import Logo from "../icons/Logo";

function Header() {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    )
}

export default Header