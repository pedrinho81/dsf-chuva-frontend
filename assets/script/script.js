

function handleDetalhes() {
    let DetalhesSection = document.getElementById("detalhes")

    let handleDetalhes = document.querySelectorAll(".handleDetalhes")
    let FullDetalhes = document.querySelectorAll(".fullDetalhes")


    handleDetalhes.forEach((item) => {
        item.addEventListener("click", showDetails)
    })


    function showDetails() {
        DetalhesSection.classList.toggle("max-h-44")

        FullDetalhes.forEach((item) => {
            item.classList.toggle("hidden")
        })

    }
}
handleDetalhes()

let initial = document.getElementById("initial")
let formSection = document.getElementById("form")
let success = document.getElementById("success")



function showSuccess() {
    

    const discussoesChild = document.getElementById("discussoesList")
    formSection.onsubmit = (e) => {
        e.preventDefault()
        let assuntoField = document.getElementById("assunto")
        let conteudoField = document.getElementById("conteudo")
    
        if(assuntoField.value && conteudoField.value) {
            
            discussoesChild.innerHTML += `
            <div class="border-2 flex flex-col  m-2 rounded shadow-lg">
            <h6 class="text-primary mt-4 ml-4 ">${assuntoField.value}</h6>
            <span class="text-[#5c5c5c] ml-4 mb-2 font-medium text-md">Pedro Henrique</span>
            <p class="font-normal ml-4 text-[#4D4D4D] mb-4">${conteudoField.value}</p>
            <div class="flex align-bottom ml-4 content-center gap-4 mb-2">
                <i><img src="/assets/images/mais informações.svg" alt="" srcset=""></i>
                <i><img src="/assets/images/favoritar.svg" alt="" srcset=""></i>
                <p class="text-[#757575] font-medium">
                    <a href="#">1 like</a>
                    <a href="#">1 resposta</a>
                </p>
            </div>
        </div>
        `
        success.classList.toggle("hidden")
        formSection.classList.toggle("hidden")
        assuntoField.value =""
        conteudoField.value =""
        } else {
            alert("Por favor, preencha os campos para enviar o tópico!")
        }
        
        
        
    }
    
    

}

function showForm() {

    initial.classList.toggle("hidden")
    formSection.classList.toggle("hidden")
}
function showFormA() {
    formSection.classList.toggle("hidden")
    success.classList.toggle("hidden")
}

const form = document.getElementById("task-form")































