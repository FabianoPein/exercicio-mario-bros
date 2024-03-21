const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
  }


/*
Variáveis 
    Um espaço de memória que vc reserva e pode guardar o que quiser lá.

    3 formas de criar uma variável:
    - var (jeito antigo, não usar)
    - let (pode-se alterar o valor depois)
    - const -> constante (não consegue alterar mais o valor)

Funções
    Um trecho de código que só é executado quando é chamado.

    function soma(){
        const somatoria = numero1 + numero2
        console.log(somatoria)
    }

    soma()
    console.log(pera)
*/
