import React from 'react'
import { ThemeProvider } from 'styled-components'

// Imports for animation
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import webpacklogo from './assets/images/webpack.png'
import reactlogo from './assets/images/react.svg'

import { GlobalStyles } from './styles/GlobalStyles'
import { myTheme } from './styles/Theme'

import * as S from './AppStyles'

export const App: React.VFC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Global styles */}
        <GlobalStyles />

        <ScrollAnimation animateIn="animate__swing">
          {/* Sample use images png, gif jpg */}
          <S.Image
            src={webpacklogo}
            alt="webpack logo in png format"
            style={{ width: '100px' }}
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__swing">
          {/* Sample use images svg */}
          <S.Image
            src={reactlogo}
            alt="react logo in svg format"
            style={{ width: '100px' }}
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__shakeY" initiallyVisible={true}>
          <S.StyledReactLogo
            style={{ width: '100px' }}
            aria-label="react logo in svg format using as component"
          />
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__lightSpeedInRight"
          initiallyVisible={true}
        >
          <S.Title>Wellcome to React with webpack</S.Title>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__rubberBand">
          <S.StyledButton
            onClick={() => alert('Hi, the button has been clicked!')}
          >
            Clique aqui
          </S.StyledButton>
        </ScrollAnimation>
      </div>
    </ThemeProvider>
  )
}

export default App
