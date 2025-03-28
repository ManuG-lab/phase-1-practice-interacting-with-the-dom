let counter = document.getElementById("counter");
let count = 0;
let timer = setInterval(updateCounter, 1000);

function updateCounter() {
    count++;
    counter.innerText = count;
}

document.getElementById("plus").addEventListener("click", function() {
    count++;
    counter.innerText = count;
});

document.getElementById("minus").addEventListener("click", function() {
    count--;
    counter.innerText = count;
});

let likesList = {};

document.getElementById("heart").addEventListener("click", function() {
    let likesContainer = document.querySelector(".likes");
    if (!likesList[count]) {
        likesList[count] = 1;
        let li = document.createElement("li");
        li.setAttribute("data-num", count);
        li.innerHTML = `${count} has been liked <span>1</span> time`;
        likesContainer.appendChild(li);
    } else {
        likesList[count]++;
        let existingLi = document.querySelector(`li[data-num="${count}"]`);
        existingLi.innerHTML = `${count} has been liked <span>${likesList[count]}</span> times`;
    }
});

let pauseButton = document.getElementById("pause");
let isPaused = false;

pauseButton.addEventListener("click", function() {
    if (!isPaused) {
        clearInterval(timer);
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        pauseButton.innerText = "resume";
        isPaused = true;
    } else {
        timer = setInterval(updateCounter, 1000);
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
        pauseButton.innerText = "pause";
        isPaused = false;
    }
});


document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let commentInput = document.getElementById("comment-input").value;
    let commentList = document.getElementById("list");
    
    if (commentInput.trim() !== "") {
        let newComment = document.createElement("p");
        newComment.innerText = commentInput;
        commentList.appendChild(newComment);
        document.getElementById("comment-input").value = "";
    }
});
