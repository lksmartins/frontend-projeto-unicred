import React, { useState, useEffect } from 'react'

export default function TimerButton(props) {

    const time = props.time

    const loadingTimerText = <i className="fas fa-spin fa-spinner"/>
    const [timerText, setTimerText] = useState(loadingTimerText)
    const [buttonDisabled, setButtonDisabled] = useState('disabled')
    const [autoStart, setAutoStart] = useState(props.start !== undefined ? props.start : true)

    const [loadedDate, setLoadedDate] = useState(calcNewDate())

    function calcNewDate(){
        let t = new Date()
        t.setSeconds(t.getSeconds() + time)
        return t
    }

    function calculateTimeLeft(){

        let difference = +new Date(loadedDate) - +new Date()
        let timeLeft = {}
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
      }
      
      if( difference <= 0 ){
        setButtonDisabled('')
        return props.children
      }

      return `${timeLeft.minutes > 9 ? timeLeft.minutes : "0"+timeLeft.minutes }:${ timeLeft.seconds > 9 ? timeLeft.seconds : "0"+timeLeft.seconds }`
    }

    useEffect(() => {

        if( props.start != autoStart ){
            setAutoStart(props.start)
            setLoadedDate(calcNewDate())
        }

        if( !autoStart ) return

        const timer = setTimeout(() => {
            setTimerText( calculateTimeLeft() )
        }, 1000)

        if( calculateTimeLeft() == props.children ){
            clearTimeout(timer)
        }

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer)

    })

    return(

        <button disabled={buttonDisabled === '' && props.disabled ? props.disabled : buttonDisabled} className={props.className ? props.className : "button button-timer" }>
            { !autoStart ? props.children : timerText }
        </button>

    )
}