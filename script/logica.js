// QUERYSELECTOR
const input = document.querySelector('#textarea1')
const results = document.querySelector('#textarea2')
const warningSection = document.querySelector('#warningSection')
const resultsSection = document.querySelector('#resultsSection')



const DICTIONARY = {
  e: 'enter',
  i: 'imes',
  o: 'ober',
  a: 'ai',
  u: 'ufat'
}

// ESCUCHAR EL EVENTO DE CLICK
const handleClick = (type) => {
  const inputValue = input.value

  const newText = encryptDecrypt(inputValue, type)
  showResults(newText)
}

// ENCRIPTAR O DESENCRIPTAR TEXTO
const encryptDecrypt = (text, type) => {
  for (const key in DICTIONARY) {

    if (type === 'encrypt') {
      text = text.replace(new RegExp(key, 'g'), DICTIONARY[key])
    } else {
      text = text.replace(new RegExp(DICTIONARY[key], 'g'), key)
    }
  }
  return text
}

// MOSTRAR RESULTADOS, ALTERNAR ENTRE LAS SECCIONES
const showResults = (text) => {
  results.value = text

  warningSection.classList.toggle('non-visible', !!text)
  resultsSection.classList.toggle('non-visible', !text)
}

// COPIAR TEXTO
const copyText = () => {
  navigator.clipboard.writeText(results.value)

  // ** cambiar estilos del boton
  copyButton.innerText = 'Texto copiado'
  copyButton.classList.add('button--copy')
  setTimeout(() => {
    copyButton.innerText = 'Copiar'
    copyButton.classList.remove('button--copy')
  }, 1000)
}

// ESCUCHAR EL EVENTO DE ENTRADA DE TEXTO
input.addEventListener('input', () => {
    const inputValue = input.value;
    const regex = /^[a-z\s]+$/;
  
    if (!regex.test(inputValue)) {
      showModal();
    } else {
      hideModal();
    }
});


// MOSTRAR MODAL DE ALERTA
const showModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  
    const closeButton = document.getElementById('modal__close');
    closeButton.addEventListener('click', () => {
    hideModal();
    input.value = ''; // Restablecer el valor del input
    input.disabled = false; // Habilitar el input
    input.focus(); // Colocar el foco en el input
  });
}
  
// OCULTAR MODAL DE ALERTA
const hideModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
  