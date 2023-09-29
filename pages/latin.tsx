import { latinDictionary } from '../lib/dictionary'
import {useEffect, useState, useRef} from 'react'
import Layout from '../components/layout'

export default function latin() {
    const [words, setWords] = useState(Object.keys(latinDictionary)) 
    const [currentWord, setCurrentWord] = useState('')
    const [msg, setMsg] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    function getRandomWord() { 
        const randomIndex = Math.floor(Math.random() * words.length) 
        const randomWord = words[randomIndex] 
        setCurrentWord(randomWord)
        return randomWord
    }

    function handleGuess(userGuess: string) { 
        
        const answer = latinDictionary[currentWord]

        if(userGuess.toLowerCase() === answer.toLowerCase()) { 
            const newWords = words.filter(w => w !== currentWord) 
            setWords(newWords)
            setMsg("Correct!")
        } else {
            setMsg(`The answer was ${answer}`)
        }
        const word = getRandomWord()
    }

    function handleSubmit() {
        getRandomWord()  
        const userGuess = inputRef.current!.value
        handleGuess(userGuess)
    }

    useEffect(() => {
        getRandomWord()
    });

    return ( 
        <Layout pageTitle="Latin">
            <div id="content">
                {words.length == 0 ? 
                    <p>You finished it!</p>
                :
                    <>
                        <p className={msg == "Correct!" ? "correct" : "wrong"}>{msg}</p>
                        <p>Words left: {words.length}</p> 
                        <p>Latin Word: {currentWord}</p> 
                        <input 
                            type="text"
                            ref={inputRef}  
                        />
                        <button    
                            type="submit"    
                            onClick={handleSubmit}    
                            >
                            Submit   
                        </button>
                    </>
                }
            </div>
        </Layout>
    )
}