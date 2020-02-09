import React from 'react'
import AskModal from 'components/common/AskModal'

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
    return(
        <AskModal 
        visible={visible} 
        title="메모 삭제" 
        description="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    )
}

export default AskRemoveModal