import React from 'react'
import { useTheme } from 'styled-components';
import MobileThemeComponent from '../mobile-theme/mobile.theme'
import ComponentBody from './cards/body';


const PlavitComponent = () => {
    return (
        <MobileThemeComponent><ComponentBody/></MobileThemeComponent>
    )
}

export default PlavitComponent;

