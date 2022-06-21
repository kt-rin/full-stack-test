import React from 'react'
import { useEffect, useState, useRef } from "react";
import '../style/Timer.css';

export default function Timer() {
    const intervalRef = useRef(null)
    const [timer, setTimer] = useState('00:00:00')

    const getTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date())
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const days = Math.floor(total / (1000 * 60 * 60 * 24))

        return {
            total, seconds, minutes, hours, days
        }
    }

    const startTimer = (deadline) => {
        let { total, seconds, minutes, hours } = getTimeRemaining(deadline)

        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            clearInterval(intervalRef.current)
        }
    }

    const clearTimer = (endTime) => {
        setTimer('23:59:48');

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        const id = setInterval(() => {
            startTimer(endTime)
        }, 1000)
        intervalRef.current = id
    }

    const getDeadlineTime = () => {
        let deadline = new Date()

        deadline.setHours(deadline.getHours() + 23)
        deadline.setMinutes(deadline.getMinutes() + 59)
        deadline.setSeconds(deadline.getSeconds() + 48)

        return deadline
    }

    useEffect(() => {
        clearTimer(getDeadlineTime())
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return (
        <div className='timer'>
            {timer}
        </div>
    )
}
