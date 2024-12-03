import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";

const SendMessageForm = ({ sendMessage }) => {
   const [message, setMessage] = useState("");

   return (
      <Form
         onSubmit={(e) => {
            e.preventDefault();
            sendMessage(message);
            setMessage("");
         }}>
         <InputGroup>
            <FormControl
               type="text"
               placeholder="message..."
               onChange={(e) => setMessage(e.target.value)}
               value={message}
            />
            <InputGroup.Text>
               <Button variant="primary" type="submit" disabled={!message}>
                  Send
               </Button>
            </InputGroup.Text>
         </InputGroup>
      </Form>
   );
};

export default SendMessageForm;
