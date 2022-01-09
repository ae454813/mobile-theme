import { ConfigProvider} from 'antd'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './theme/global.style'
import { theme } from './theme/style'

const Page = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider direction="ltr">
            <GlobalStyle/>
            {children}
            </ConfigProvider>
        </ThemeProvider>
    )
}

export default Page
