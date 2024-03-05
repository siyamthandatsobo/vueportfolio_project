<template>
   

    <h1 class="display-2 mt-4 slide-in">Contact Me</h1>
        <div class="container">
            
            <div class="row ">
                <!-- Form Column -->
                
                <div class="col-md-6">
                    <div class="form-container">
                        <form class="form" action="https://formspree.io/f/mgegvakk"
  method="POST">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="text" id="email" name="email">
                            </div>
                            <div class="form-group">
                                <label for="textarea">How Can We Help You?</label>
                                <textarea name="textarea" id="textarea" rows="10" cols="50"></textarea>
                            </div>
                            <button class="form-submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                
                <!-- Map Column -->
                <div class="col-md-6 p-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13229.229463869944!2d18.642853856083665!3d-34.010320470760874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f3d6a542079%3A0x553c547ca32f0582!2sIkwezi%20Park%2C%20Cape%20Town%2C%207784!5e0!3m2!1sen!2sza!4v1704970675383!5m2!1sen!2sza" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    <br><br><br><br>
    </template>
  
<style>
.form-container {
  width: 500px;
  height: 400px;
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  position: relative; /* Add this line */
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

.form-container .form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
}
@media (max-width: 768px) {
  .form-container {
    width: 100%; /* Adjust the width for smaller screens */
    max-width: 300px; /* Adjust the font size for smaller screens */
  }
  button{
    padding:20px;
  }
}



</style>