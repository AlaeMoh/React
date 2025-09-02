"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

type VoiceSearchProps= {
  onResult: (text:string) => void;
}
export default function Voicesearch({onResult}: VoiceSearchProps) {
  const startListening =()=>{
    const SpeechRecognition= 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if(!SpeechRecognition){
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition()
    recognition.lang ="en-US"
    recognition.interimResults= false;
    recognition.maxAlternarive= 1
    recognition.start();
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult= (event:any)=>{
      const transcript = event.results[0][0].transcript;
      onResult(transcript)
    }

}
  
  return (
    <button
      type="button"
      className="btn btn-outline position-absolute top-50 start-50 translate-middle-y ms-5"
      onClick={startListening}
    >
      <FontAwesomeIcon icon={faMicrophone} className="text-dark" />
    </button>
  );
}
