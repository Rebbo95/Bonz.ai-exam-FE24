document.addEventListener("DOMContentLoaded", function () {
    const roomTypeDropdown = document.getElementById("room-type");
    const roomListingsSection = document.getElementById("room-listings");
    const allRoomCards = document.querySelectorAll(".room-card");

    // Function to handle room filtering
    function filterRooms(selectedType) {
        // Display the room listings section
        roomListingsSection.style.display = "block";

        // Hide all cards and display only the selected type
        allRoomCards.forEach(card => {
            card.style.display = card.classList.contains(selectedType) ? "block" : "none";
        });
    }

    // Listen for changes in the dropdown and trigger filtering
    roomTypeDropdown.addEventListener("change", function () {
        const selectedType = roomTypeDropdown.value;
        if (selectedType === "none") {
            roomListingsSection.style.display = "none"; // Hide section if no type selected
        } else {
            filterRooms(selectedType);
        }
    });
});