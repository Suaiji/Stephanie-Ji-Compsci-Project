window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const question = params.get('question');
    const questionContainer = document.getElementById('questionContainer');

    if (question) {
        questionContainer.textContent = question;
    }

    document.getElementById('yesButton').addEventListener('click', function() {
        window.location.href = 'page3.html'; 
    });

    const noButton = document.getElementById('noButton');
    noButton.addEventListener('click', function() {
        const newX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const newY = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    });
};
