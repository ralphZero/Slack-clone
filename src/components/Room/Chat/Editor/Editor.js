import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

const Editor = () => {

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

    return (
        <div style={style}>
            <ReactQuill theme='snow' placeholder="Message #design" modules={modules} formats={formats} value={state} onChange={setstate} />
            <SendIcon className="editor__sendicon" />
        </div>
    );
}

export default Editor;