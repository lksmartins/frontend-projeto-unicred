import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Timer(props) {

    const router = useRouter()

    const code = props.unit

    const loadingTimerText = <i className="fas fa-spin fa-spinner"/>
    const [timerText, setTimerText] = useState(loadingTimerText)
    const [loadedDate, setLoadedDate] = useState(null)
    const [loadedTime, setLoadedTime] = useState(null)
    
    async function loadTime(){

        if( loadedDate != null ){ return }

        const res = await fetch('https://chavemestra.net/api/unicred/index.php', {
            method: 'POST',
            body: JSON.stringify({ 
                token:'rUiDIxjZHIoC8OYlb8lK6xspIwZ78TtJ', 
                action: 'timer',

                code: code
            })
        })

        const response = await res.json()

        console.log(response)

        setLoadedDate(response.start)
        setLoadedTime(response)
    }

    function calculateTimeLeft(){

        let difference = +new Date() - +new Date(loadedDate)
        let timeLeft = {}
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
      }
    
      return `${ timeLeft.hours > 9 ? timeLeft.hours : "0"+timeLeft.hours}:${timeLeft.minutes > 9 ? timeLeft.minutes : "0"+timeLeft.minutes }:${ timeLeft.seconds > 9 ? timeLeft.seconds : "0"+timeLeft.seconds }`
    }

    useEffect(() => {

        loadTime()

        // acabou o tempo
        if( loadedTime != null && loadedTime != undefined ){
            if( loadedTime.end != "0000-00-00 00:00:00" && loadedTime.end != undefined ){
                router.push('/desafio-concluido')
            }
        }

        const timer = setTimeout(() => {
            setTimerText( calculateTimeLeft() )
        }, 1000)
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer)

    })

    return(

        <div className="timer">
            {timerText}
        </div>

    )
}