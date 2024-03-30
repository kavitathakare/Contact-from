document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Construct email body
    const emailBody = "Name: " + formData.get("name") + "\n" +
                      "Email: " + formData.get("email") + "\n" +
                      "Subject: " + formData.get("subject") + "\n" +
                      "Message: " + formData.get("message");
    
    // Send email
    window.location.href = "mailto:recipient@example.com?subject=Contact Form Submission&body=" + encodeURIComponent(emailBody);
});
