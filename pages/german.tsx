import { germanDictionary } from '../lib/dictionary'
import {useEffect, useState, useRef} from 'react'
import Layout from '../components/layout'

export default function German() {
    const topics = Object.keys(germanDictionary)
    const [topic, setTopic] = useState(topics[0])
    const [words, setWords] = useState(Object.keys(germanDictionary[topic])) 
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
        
        const answer = germanDictionary[topic][currentWord]

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

    function submitSelect(topic: string){
        setTopic(topic)
        setWords(Object.keys(germanDictionary[topic]))
        getRandomWord()
    }

    useEffect(() => {
        getRandomWord()
    });

    return ( 
        <Layout pageTitle="German">
            <div id="content">
                {words.length == 0 ? 
                    <p>You finished it!</p>
                :
                    <>
                        <select onChange={e => submitSelect(e.target.value)}>
                        { 
                            topics.map((topic: string, index: number) => ( 
                                <option value={topic}>{topic}</option>
                            ))
                        }
                        </select>
                        <p className={msg == "Correct!" ? "correct" : "wrong"}>{msg}</p>
                        <p>Words left: {words.length}</p> 
                        <p>German Word: {currentWord}</p> 
                        <input 
                            type="text"
                            ref={inputRef}  
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                handleSubmit(); 
                                }   
                            }}      
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