import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from  './components/ChatMessages'
import './App.css'     
import { Chatbot } from 'supersimpledev';

function App(){

        const [chatMessages, setChatMessages] = useState(() => {
          const savedMessages = localStorage.getItem('messages');
          return savedMessages ? JSON.parse(savedMessages) : [];
        });

        // this way also correct        
        //const initialMessages = JSON.parse(localStorage.getItem('messages')) || [];
        // const [chatMessages, setChatMessages] = useState(initialMessages);


        useEffect(()=>{

          Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function() {
             return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
             }
             
          });

        },[]);

        useEffect(()=>{
          localStorage.setItem('messages', JSON.stringify(chatMessages));
        },[chatMessages]);

        return(

        <div className="app-container">
         
          {chatMessages.length === 0 ? <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>:<ChatMessages 

            chatMessages={chatMessages}
          
          />}  
          <ChatInput
        
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        
         />
          
       </div>

        );


      }

export default App
