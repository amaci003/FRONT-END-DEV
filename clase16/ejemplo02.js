const link = document.getElementById('link')
link.addEventListener('click', function(e){
    e.preventDefault() /* Frena q el link te lleve a otro sitio web(la e) */
    alert('Quisiste ir a ' + e.currentTarget.href)
})