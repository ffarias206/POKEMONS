function getPokemon() {
    let search = document.getElementById('search');
    let pokemon = search.value.toLowerCase(); // Esto les convierte en minuscula cualquier palabra para evitar errores gramaticales

    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            // Aca deberán agregar en una variable los nuevos campos que desean buscar 

            let name = data.name;
            let type = "Tipo: " + data.types[0].type.name;
            let weight = data.weight
            let height = data.height
            let hp = data.hp
            let atack = data.atack
            let defense = data.defense
            let speed = data.speed
            let ability= data.ability

            let sprite = data.sprites.front_default;

            // Aca deberán reconocer los elementos de su HTML, en caso de no existir, crear unos nuevos con su respectivo ID.

            // Recuerden que si desean obtener una info de tipo string (texto) pueden usar cualquier elemento HTML como <h1>, <p>, <a>, etc...

            document.getElementById('name').textContent = name;
            document.getElementById('type').textContent = type;
            document.getElementById('weight').textContent= weight;
            document.getElementById('heigth').textContent= height;
            document.getElementById('hp').textContent= hp ;
            document.getElementById('atack').textContent= atack ;
            document.getElementById('defense').textContent= defense;
            document.getElementById('speed').textContent= speed ;
            document.getElementById('ability').textContent= ability;
            




            // En cambio si desean almacenar imagenes, una forma prácticar es hacer uso del parametro SRC para guardar alli la URL de la imagen y que se muestre en el elemento <img>

            document.getElementById('sprite').src = sprite;
          
        })

            // Aca pueden cambiar el mensaje del error o mostrarle a traves de un elemento HTML (opcional)

        .catch(() => {
            alert('Pokemon no encontrado')
        });
}
