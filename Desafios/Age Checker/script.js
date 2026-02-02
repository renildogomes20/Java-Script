var year = document.querySelector("input#ano_nasc")
var male = document.querySelector("input#sexoM")
var fame = document.querySelector("input#sexoF")
var age = document.querySelector("div#idade_atual")
var pict = document.querySelector("div#imag")
var year1 = new Date()
var currentyear = year1.getFullYear()
        function check() {
            var ano = Number(year.value)
            var idade = currentyear - ano
            var sexo = ''
            if (male.checked) {
                sexo = 'Homem'
            } else if (fame.checked) {
                sexo = 'Mulher'
            }
            age.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
            if (idade>=0 && idade <16) {
                if (male.checked){
                    pict.innerHTML = `<img src="imagens/kidM.jfif" alt="imagem" class="foto">`
                }else {
                     pict.innerHTML = `<img src="imagens/kidF.jpeg" alt="imagem" class="foto">`
                }
            }else if (idade>=16 && idade <50) {
                if (male.checked) {
                    pict.innerHTML = `<img src="imagens/jovemM.jpg" alt="imagem" class="foto">`
                } else {
                     pict.innerHTML = `<img src="imagens/jovemF.jpg" alt="imagem" class="foto">`
                }
            }else {
                if (male.checked) {
                    pict.innerHTML = `<img src="imagens/idosoM.png" alt="imagem" class="foto">`
                } else {
                    pict.innerHTML = `<img src="imagens/idosoF.jpg" alt="imagem" class="foto">`
                }
            }

            if (ano>currentyear) {
                alert('Verifique os dados e tente novamente!')
                document.getElementById('result').style.display="none"
                return
            }
            if (!male.checked && !fame.checked) {
                alert('Selecione o sexo, por favor!')
                document.getElementById('result').style.display="none"
                return
            }

        }