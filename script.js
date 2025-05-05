// Event handling section
//  Event Handling Section

// Show a thank-you message when "Book Now" button is clicked
document.getElementById('clickBtn').addEventListener('click', () => {
    alert(' Thank you for booking your glow session!');
  });
  
  // Show a surprise discount when the user hovers over the button
  document.getElementById('hoverBtn').addEventListener('mouseover', () => {
    alert(' You just earned a 10% discount code: GLOW10 ');
  });
  
  // Log the user's favorite color when they type in the input box
  document.getElementById('keypressInput').addEventListener('keypress', (e) => {
    console.log(`Client favorite color: ${e.key}`);
  });
  
  // Show a hidden deal when the secret button is double-clicked
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert('Secret Deal Unlocked: Free hand massage with your mani!');
  });
  
  
  //  Interactive Mood Color Box
  
  // Changes background color randomly when the box is clicked
  const colorBox = document.getElementById('colorBox');
  colorBox.addEventListener('click', () => {
    const colors = ['#ffb6c1', '#ffe4e1', '#ffc0cb', '#ff69b4']; // Soft beauty colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
  });
  
  
  //  Service Tabs (Nails / Facial)
  
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  
  // When a tab is clicked, show the related content and hide the rest
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      contents.forEach(c => c.classList.remove('active')); // Hide all tabs
      document.getElementById(tab.dataset.target).classList.add('active'); // Show selected
    });
  });
  
  
 //  Image Gallery (Style Lookbook)
// Slideshow Images Array
const galleryImages = [
  'img-1.png',
  'img-2.png',
  'img-3.png',
  'img-4.png',
  'img-5.png',
  'img-6.png'
];

// Slideshow Logic
let currentImg = 0;

document.addEventListener('DOMContentLoaded', () => {
  const galleryImg = document.getElementById('galleryImg');
  const nextImgBtn = document.getElementById('nextImg');
  const prevImgBtn = document.getElementById('prevImg');

  if (galleryImg && nextImgBtn && prevImgBtn) {
    // Set the initial image
    galleryImg.src = galleryImages[currentImg];

    // Show next image
    nextImgBtn.addEventListener('click', () => {
      currentImg = (currentImg + 1) % galleryImages.length;
      galleryImg.src = galleryImages[currentImg];
    });

    // Show previous image
    prevImgBtn.addEventListener('click', () => {
      currentImg = (currentImg - 1 + galleryImages.length) % galleryImages.length;
      galleryImg.src = galleryImages[currentImg];
    });
  } else {
    console.error('Required elements for the image gallery are missing.');
  }
});
 
 
  
  //  Form Validation (Booking Form)
  
  // Validate form inputs on submission
  const form = document.getElementById('signupForm');
  const feedback = document.getElementById('formFeedback');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting immediately
  
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
  
    // Check for empty fields
    if (!name || !email || !password) {
      feedback.textContent = ' Please fill in all fields to complete your booking.';
      feedback.style.color = 'red';
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.color = 'red';
      return;
    }
  
    // Validate password length
    if (password.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters.';
      feedback.style.color = 'red';
      return;
    }
  
    // All checks passed
    feedback.textContent = ' Booking confirmed! We’ll contact you soon.';
    feedback.style.color = 'green';
  });
  
  // Show password feedback while typing
  form.password.addEventListener('input', () => {
    if (form.password.value.length < 8) {
      feedback.textContent = ' Password too short.';
      feedback.style.color = 'orange';
    } else {
      feedback.textContent = '';
    }
  });
