
function toggleLanguage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
    elementsToTranslate.forEach((element) => {
      const currentLanguage = element.textContent;
      const englishTranslation = element.getAttribute('data-translate');
  
      
      if (currentLanguage === englishTranslation) {
       
        element.textContent = element.getAttribute('data-translate-pt');
      } else {
      
        element.textContent = englishTranslation;
      }
    });
  }

  const translateButton = document.getElementById('translateButton');
  translateButton.addEventListener('click', toggleLanguage);
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
 
      successMessage.style.display = "block";
      successMessage.textContent = "Cadastro realizado com sucesso!";
  
    
      form.reset();
  
 
      setTimeout(function () {
        successMessage.style.display = "none";
      }, 3000);
    });
  });
  