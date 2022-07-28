console.log('listening from newProducts.js....\n')

const productForm = document.getElementById('formProduct')

productForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log('entra al fetch')
    let formData = new FormData(productForm)
    fetch('/api/newProduct', {
        method:'POST',
        body:formData
    })
    .then(result=>result.json())
    .then(json=>{console.log(json)}) 
    .finally(productForm.reset())
    
})
