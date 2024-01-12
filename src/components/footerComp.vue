<template>

<footer>
        <p> siyamthandatsobo&copy; {{ currYear }}</p>
        <div class="icons">

            <a href="https://www.instagram.com/siyamthanda891/?hl=en">
                <img class="social" src="https://i.ibb.co/KszGmTz/5335781-camera-instagram-social-media-instagram-logo-icon.png" alt="Description of the image">
</a>

        
            <a href="https://wa.link/n74s1v">
  <img class="social" src="https://i.ibb.co/hW5dnCW/5305167-call-chat-mobile-whatsapp-whatsapp-logo-icon.png" alt="Description of the image">
</a>
        

<a href="https://www.facebook.com/siyamthanda.tsobo.92">
  <img class="social" src="https://i.ibb.co/V3KDTWz/5305154-fb-facebook-facebook-logo-icon.png" alt="Description of the image">
</a>
<a href="https://www.linkedin.com/in/siyamthanda-tsobo-b938bb218">
  <img class="social" src="https://i.ibb.co/cD8SNvV/5305157-connection-linkedin-network-linkedin-logo-icon.png" alt="5305157-connection-linkedin-network-linkedin-logo-icon">
</a>
</div>
        
    </footer>
    
</template>
<script>
export default{
    data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
}

     
    </script>
    
  
<style>

footer {
  text-align: center;
  padding: 20px;
  background-color: rgb(51, 51, 51);
  color: rgb(235, 20, 152);
  bottom: 0;
  width: 100%;
  
  
}
.social{
   
    width: 30px; 
  height: auto; 
  margin-right: 10px;
    
}

</style>