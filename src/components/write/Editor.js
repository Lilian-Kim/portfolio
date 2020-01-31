import React,{useRef, useEffect} from 'react'
import Quill from 'quill'
import 'quill/dist/quill.bubble.css'
import styled from 'styled-components'
import 'styles/components/Editor.scss'

const Editor = ({title, body, onChangeField}) => {
    const quillElement = useRef(null)
    const quillInstance = useRef(null)

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder:'내용을 작성하세요...',
            modules: {
                toolbar: [
                    [{header: '1'}, {header : '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },            
      })
      const quill = quillInstance.current
      quill.on('text-change', (delta, oldDelta, source) => {
          if (source === 'user'){
              onChangeField({key: 'body', value:quill.root.innerHTML})
          }
      })
    },[onChangeField])

    const onChangeTitle = e => {
        onChangeField({key:'title', value:e.target.value})
    }

 

    return(
        <div className="editor-wrapper">
            <input type="text" placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title}/>
            <div className="quill-wrapper">
                <div ref={quillElement}/>
            </div>

        </div>
    )
}

export default Editor