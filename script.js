document.getElementById("attendance-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const eventDesc = document.getElementById("event").value;
    const proof = document.getElementById("proof").value;

    // Here, you can implement AJAX to send the data to your backend
    // For now, we'll just simulate a response
    const responseMessage = document.getElementById("response-message");
    responseMessage.textContent = `Attendance request for ${eventDesc} on ${date} submitted successfully!`;
    responseMessage.style.color = 'green';
});

document.getElementById("status-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const studentId = document.getElementById("student-id").value;

    // Here, you can implement AJAX to check the attendance status in your backend
    // For now, we'll just simulate a response
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = `Attendance status for Student ID ${studentId}: Request pending.`;
    statusMessage.style.color = 'blue';
});
