import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import ReactQuill from 'react-quill';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import { SaveMessage } from '../../../../store/actions/MessageActions';
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = (props) => {

    const [state, setstate] = useState('');
    
    const modules = {
        toolbar: [
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link']
        ],
      };
    
    const formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link'
    ];

    const style = { margin: '12px',
        border: '1px solid #ccc',
        borderRadius: 8, 
        maxHeight: '45%', 
        position: 'relative'
    }

    const handleSend = (e) => {
        if(state){
            //sanitize
            let cleanMessage = DOMPurify.sanitize(state);
            //save
            props.saveMessage(cleanMessage, props.currentId);
            //clear
            setstate('');
        }
    }

    return (
        <div style={style}>
            <ReactQuill theme='snow' placeholder='Message #channel' modules={modules} formats={formats} value={state} onChange={setstate} />
            <SendIcon className="editor__sendicon" onClick={e => handleSend(e)}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentId: state.channel.currentId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveMessage: (message, currentId) => dispatch(SaveMessage(message, currentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);