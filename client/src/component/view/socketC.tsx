import { io } from 'socket.io-client';
import classNames from 'classnames';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ChatContainer,
  Message,
  MessageBox,
  MessageForm,
} from './sss'

// 웹소켓 연결 및 소켓 인스턴스 생성, chat은 namespace입니다.
const socket = io('http://localhost:3000/chat');

interface IChat {
  username: string;
  message: string;
}

const SocketApp = () => {
  const [chats, setChats] = useState<IChat[]>([]);
  const [message, setMessage] = useState<string>('');
  const chatContainerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const messageHandler = (chat: IChat) =>
      setChats((prevChats) => [...prevChats, chat]);

    socket.on('events', messageHandler);
    return () => {
      socket.off('message', messageHandler);
    };
  }, []);
  const onSendMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!message) return alert('메시지를 입력해 주세요.');

      socket.emit('events', message, (chat: IChat) => {
        setChats((prevChats) => [...prevChats, chat]);
        setMessage('');
      });
    },
    [message]
  );
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };
  console.log("ddddd: ", chats)

  return (
    <>
      <h1>WebSocket Chat</h1>
      <ChatContainer ref={chatContainerEl}>
        {chats.map((chat, index) => (
          
          <MessageBox
            key={index}
            className={classNames({
              my_message: socket.id === chat.username,
              alarm: !chat.username,
            })}
          >
            <span>
              {chat.username
                ? socket.id === chat.username
                  ? ''
                  : chat.username
                : ''}
            </span>
            <Message className="message">{chat.message}</Message>
          </MessageBox>
        ))}
      </ChatContainer>
      <MessageForm onSubmit={onSendMessage}>
        <input type="text" onChange={onChange} value={message} placeholder='oooo' />
        <button>보내기</button>
      </MessageForm>
    </>
  );
};

export default SocketApp;