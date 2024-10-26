// Sample attendance data
const attendanceData = [
    { date: "2024-10-01", status: "Present" },
    { date: "2024-10-02", status: "Absent" },
    { date: "2024-10-03", status: "Present" },
    { date: "2024-10-04", status: "Absent" },
    { date: "2024-10-05", status: "Present" },
];

// Function to populate attendance records
function populateAttendance() {
    const tableBody = document.getElementById("attendance-table").getElementsByTagName("tbody")[0];

    attendanceData.forEach(record => {
        const row = tableBody.insertRow();
        const cellDate = row.insertCell(0);
        const cellStatus = row.insertCell(1);
        cellDate.textContent = record.date;
        cellStatus.textContent = record.status;
        cellStatus.className = record.status === "Present" ? "present" : "absent"; // Add class for styling
    });
}

// Call the function to populate the table
document.addEventListener("DOMContentLoaded", populateAttendance);
