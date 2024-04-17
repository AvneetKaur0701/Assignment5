document.addEventListener("DOMContentLoaded", function() {
    var studentID = "200516907";
    var studentName = "Avneet Kaur";
    const apiKey = 'ajHuiZdBc3J89usJJyWocrCGnSFPDfPW';
    const apiUrl = 'https://api.quotable.io/random';

    const quoteContainer = document.getElementById('quote-container');
    const newQuoteBtn = document.getElementById('new-quote-btn');


    var studentInfo = document.getElementById("student-info");

    studentInfo.textContent = "Student ID: " + studentID + " | Name: " + studentName;
    function fetchQuote() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                quoteContainer.innerHTML = `
                    <blockquote>
                        <p>${data.content}</p>
                        <footer>${data.author}</footer>
                    </blockquote>
                `;
            })
            .catch(error => console.error('Error:', error));
    }

    fetchQuote();

    newQuoteBtn.addEventListener('click', fetchQuote);
});
