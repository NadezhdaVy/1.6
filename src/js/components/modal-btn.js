const callBtn = document.querySelector(".call-btn");
const modalCall = document.querySelector(".call-modal"); 
const modalFeedback = document.querySelector(".feedback-modal")
const feedbackBtn = document.querySelector(".feedback-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const modals = document.querySelectorAll(".modal");
const modalContent = document.querySelectorAll(".modal-content")

function showHideModalCall () {
	modalCall.classList.toggle("call-modal--active");
	}
	
	function showHideModalFeedback () {
	modalFeedback.classList.toggle("feedback-modal--active");
	}
	
	for (let i = 0; i < closeBtns.length;i++){
			let close = closeBtns[i];
			close.addEventListener("click", function(){
				modalCall.classList.remove("call-modal--active");
				modalFeedback.classList.remove("feedback-modal--active")
			})
		}

		for (let i = 0; i < modals.length;i++){
			let modal = modals[i];
			let content = modalContent[i];
			modal.addEventListener('click', (e) => {
				if (!content.contains(e.target)) {
					modalCall.classList.remove("call-modal--active");
				   modalFeedback.classList.remove("feedback-modal--active")
				}
			})
		}

		callBtn.addEventListener("click",showHideModalCall);
		feedbackBtn.addEventListener("click", showHideModalFeedback)