import React from 'react';
import "./myStyles.css";
import { useNavigate } from 'react-router-dom';
import { motion  } from 'framer-motion';

function ConversationItem({props}) {
  const navigate = useNavigate();
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} className='conversation-container' onClick={() => {navigate('chat')}}>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMessage'>{props.lastMessage}</p>
      <p className='con-timeStamp'>{props.timeStamp}</p>
    </motion.div>
  )
}

export default ConversationItem
