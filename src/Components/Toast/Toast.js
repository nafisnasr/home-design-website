import React from 'react'

export default function Toast({isShowToast,setIsShowToast}) {
    return (
        <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
            <div className={`${isShowToast ? 'show' : ''} toast align-items-center text-white bg-primary`} >
                <div className="d-flex align-items-center justify-content-center">
                    <button
                        type='button'
                        className="btn-close btn-close-white ms-3"
                        onClick={() => {
                            setIsShowToast(false)
                        }}>
                    </button>
                    <div className="toast-body">محصول با موفقیت اضافه شد</div>
                </div>
            </div>
        </div>
    )
}
