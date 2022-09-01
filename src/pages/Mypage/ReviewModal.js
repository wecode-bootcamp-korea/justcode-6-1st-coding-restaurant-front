import React from 'react';

function ReviewModal(props) {
  function closeModal() {
    props.closeModal();
  }

  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={e => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default ReviewModal;
