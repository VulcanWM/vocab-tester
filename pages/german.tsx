import { germanDictionary, inverseGermanDictionary } from '../lib/dictionary'
import {useEffect, useState, useRef} from 'react'
import Layout from '../components/layout'

export default function German() {
    const topics = Object.keys(germanDictionary)
    const [topic, setTopic] = useState(topics[0])
    const [words, setWords] = useState(Object.keys(germanDictionary[topic])) 
    const [currentWord, setCurrentWord] = useState('')
    const [msg, setMsg] = useState('')
    const [type, setType] = useState('EtG')

    const inputRef = useRef<HTMLInputElement>(null)

    function getRandomWord() { 
        const randomIndex = Math.floor(Math.random() * words.length)
        const randomWord = words[randomIndex] 
        setCurrentWord(randomWord)
        return randomWord
    }

    function handleGuess(userGuess: string) { 
        var answer;
        if (type == "EtG"){
            answer = germanDictionary[topic][currentWord]
        } else {
            answer = inverseGermanDictionary[topic][currentWord]
        }

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
        setMsg("")
        getRandomWord()  
        const userGuess = inputRef.current!.value
        handleGuess(userGuess)
        inputRef.current!.value = ""
    }

    function submitSelect(topic: string){
        setMsg("")
        setTopic(topic)
        setWords(Object.keys(germanDictionary[topic]))
        getRandomWord()
    }

    function submitType(type: string){
        setType(type)
        if (type == "EtG"){
            setWords(Object.keys(germanDictionary[topic]))
        } else {
            setWords(Object.keys(inverseGermanDictionary[topic]))
        }
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
                        <select onChange={e => submitType(e.target.value)}>
                            <option value='EtG'>English to German</option>
                            <option value="GtE">German to English</option>
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