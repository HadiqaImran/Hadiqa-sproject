  function submitForm() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var query = document.getElementById("query").value;

        if (!name || !phone || !email || !query) {
            alert("Please fill in all the fields.");
            return;
        }
  alert("Form submitted successfully!");
        }

const images = document.querySelectorAll('#image-container img');

const descriptions = [
    'Senior Strategy Consultant',
    'Senior Marketing Specialist',
    'Senior Client Handler',
    'Data Analytics Consultant',
    'Senior Sales Consultant',
    'Business Development Manager',
    'Senior Financial Consultant'
];

const descriptionDiv = document.getElementById('description');
let currentIndex = 0;


function rotateImages() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
    descriptionDiv.textContent = descriptions[currentIndex];
}


setInterval(rotateImages, 3000);
