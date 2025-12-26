import { ReactLexicalTextEditor } from 'react-lexical-text-editor';

import 'react-lexical-text-editor/dist/index.css';

import { useState } from 'react';

function App() {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div
      style={{
        padding: '80px',
      }}
    >
      <main className='app-main'>
        <ReactLexicalTextEditor onChange={handleEditorChange} />

        <div
          style={{
            padding: '1rem',
            marginTop: '2rem',
          }}
        >
          <div className='tab-content'>
            <div
              dangerouslySetInnerHTML={{
                __html: editorContent,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
