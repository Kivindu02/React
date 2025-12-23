import { useState } from 'react';
import LoadingImage from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}){

        const [inputText, setInputText] = useState('');
        const responseTime = dayjs().valueOf();
        console.log(responseTime);

        function saveInputText(event){
          setInputText(event.target.value);      
        }
        async function sendMessage() {

          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              time: dayjs(responseTime).format('h:mma'),
              id: crypto.randomUUID()
            }
          ];

          setChatMessages([
            ...newChatMessages,
            {
              message: <img src={LoadingImage} className="loading-spinner"/>,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]); 

          setInputText('');

          const response = await Chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              time: dayjs(responseTime).format('h:mma'),
              id: crypto.randomUUID()
            }
          ]);


        }

        function handlekeyDown(event){
          if(event.key === 'Enter'){
           sendMessage();
          }else if(event.key === 'Escape'){
           setInputText('');
          }

        }
        function clearMessage(){
          setChatMessages([]);
        }

        return(
          <div className="chat-input-container">
            <input 
            placeholder="Send a message to Chatbot" size="30"
            onChange={saveInputText}
            value={inputText}
            onKeyDown={handlekeyDown}
            className="chat-input"
            
            />
            <button

            onClick={sendMessage}
            className="send-button"
            
            >Send</button>
            <button
            onClick={clearMessage}
            className="clear-button"
            >Clear</button>
          </div>
        );
      }