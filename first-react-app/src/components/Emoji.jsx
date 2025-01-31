import {useState} from "react"

function Emoji(){
    const[emoji, setEmoji] = useState('😊')
    const handleSwitchEmoji=()=>{
        let newEmoji = emoji ==='😊'
    }
    return (
        <div className= "Emoji componentBox">
            Emoji: {emoji}
            <button onclick={handleSwitchEmoji}>switch Emoji</button>
            </div>
    )

}