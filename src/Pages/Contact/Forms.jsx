import { useState } from 'react';
import styled from 'styled-components';

const Forms = () => {
    const [messageSent, messageSentUpdate] = useState(false);
    const [name, nameUpdate] = useState('');
    const [email, emailUpdate] = useState('');
    const [message, messageUpdate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const text = `
            Hello Mitch,

            You have an email from ${name} (${email}),

            Message: ${message}

            Cheers,
            Web Team
        `;

        console.log(text);

        messageSentUpdate(true);

    }

    const onNameChange = (e) => {
        // console.log(e.target.value);
        nameUpdate(e.target.value);
    }
    const onEmailChange = (e) => {
        // console.log(e.target.value);
        emailUpdate(e.target.value);
    }
    const onMessageChange = (e) => {
        // console.log(e.target.value);
        messageUpdate(e.target.value);
    }

    return (
        <FormsStyled className="Forms">
            {
                messageSent
                ?   <div className="messageSent">Message Sent</div>
                :   <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={name} onChange={ onNameChange } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" value={email} onChange={ onEmailChange } />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea type="text" id="message" name="message" value={message} onChange={ onMessageChange } />
                        </div>
                        <footer>
                            <button type="submit">Send</button>
                        </footer>
                    </form>
            }
        </FormsStyled>
    );
};

export default Forms;

const FormsStyled = styled.div`

    .messageSent {
        text-align: center;
        color: teal;
        font-size: 30px;
        font-weight: bold;
        margin: 50px 50px;
        padding: 50px 0px;
        border: solid 2px teal;

    }

    form {
        max-width: 600px;
        margin: 0px auto;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        padding: 5px 0px;
        font-size: 20px;
        font-weight: bold;
    }

    input, textarea {
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;
    }
    textarea {
        height: 250px;
        resize: none;
    }

    footer {
        padding: 10px;
        text-align: right;

        button {
            background-color: teal;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;

            &:hover, &:focus {
                background-color: #013f3f;
            }
        }
    }
`;
