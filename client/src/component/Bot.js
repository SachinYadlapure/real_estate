import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';


function Bot() {
  const steps = [ 
 
    { 
 
      id: "Greet", 
 
      message: "Hello, Welcome to our website", 
 
      trigger: "Done", 
 
    }, 
 
    { 
 
      id: "Done", 
 
      message: "Please enter your name!", 
 
      trigger: "waiting1", 
 
    }, 
 
    { 
 
        id: "waiting1", 
 
      user: true, 
 
      trigger: "Name", 
 
    }, 
 
    { 
 
      id: "Name", 
 
      message: "Hi {previousValue}, What do you want to ask", 
 
      trigger: "ask", 
 
    }, 
 
    { 
 
      id: "ask", 
 
      options: [ 
 
        { 
 
          value: " check status", 
 
          label: "check status", 
 
          trigger: "check status", 
 
        }, 
 
        { value: "raise ticket", label: "raise ticket", trigger: "raise ticket" }, 
         
 
      ], 
 
    }, 
 
    { 
 
      id: "check status", 
 
      message: 
 
        "Your application is in progress!!!", 
 
      end: true, 
 
    }, 
 
    { 
 
      id: "raise ticket", 
 
      message: 
 
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP", 
 
      end: true, 
 
    }, 
 
  ];  
  return ( 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Segment floated="right">
      <ChatBot steps={steps} />
    </Segment>
  </div>
  ); 
} 
 
export default Bot;