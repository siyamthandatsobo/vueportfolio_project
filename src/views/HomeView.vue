<template>
  <div class="container">
    <div class="row vh-100 align-items-center">
     
      <!-- Centered text with download button and typing animation -->
      <div class="col-md-12 text-center">
        <div class="profile-text mt-3">
          <h1 class="display-4 text-white">
            HELLO, my name is <span id="typed-name"></span>
          </h1>
          <h1 class="display-4 text-white">
            I am a full-stack web developer.   </h1>

          
          <button class="btn text-white mt-5 py-3" @click="downloadResume">Download Resume</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      // Replace this with the actual link to your resume file
      const resumeLink = 'https://drive.google.com/file/d/1ezDDE9BK2ux2kEECnSJMqtzI68IOAQT1/view?usp=sharing';

      // Create a temporary anchor element to trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = resumeLink;
      downloadLink.download = 'Siyamthanda_Tsobo_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    },
    startTypingAnimation() {
      const name = "Siyamthanda Tsobo";
      const typedNameElement = document.getElementById('typed-name');
      let index = 0;

      const typingInterval = setInterval(() => {
        if (index <= name.length) {
          typedNameElement.textContent = name.slice(0, index);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 200); // Adjust the typing speed (milliseconds per character)
    },
  },
  mounted() {
    this.startTypingAnimation();
  },
};
</script>

<style scoped>
  /* Your existing styles here */

  /* Styling for the typing animation */
  #typed-name {
    font-family: "Courier New", monospace; /* Change to your preferred font */
    color: #ffd700; /* Typing color */
    font-size: 5rem; /* Adjust the font size */
    line-height: 6rem; /* Adjust the line height */
  }
  @media (max-width: 540px) {
    #typed-name {
      font-size: 2.5rem; /* Adjust font size for smaller screens */
      line-height: 3rem; /* Adjust line height for smaller screens */
    }
  }
  button{
    background: #770699;
    border-radius: 0%;
  }
</style>
