const app = new Vue ({
    el : '#root',
    data: {
        immagini : [
            {
                src: 'img/01.jpg',
                sottotitolo : 'voluptas, iure ad reiciendis!',
                nazione :'svizzera'
            },
            {
                src: 'img/02.jpg',
                nazione: 'spagna',
                sottotitolo: 'commodi. Delectus explicabo perspiciatis voluptatibus'
            },
            {
                src: 'img/03.jpg',
                nazione: 'Italia',
                sottotitolo: 'tempore dolorum necessitatibus qui quasi blanditiis'
            },
            {
                src: 'img/04.jpg',
                nazione: 'Germania',
                sottotitolo: 'Omnis perferendis repellat quas reprehenderit a ut' 
            },
            {
                src: 'img/05.jpg',
                nazione: 'Bora Bora',
                sottotitolo: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit' 
            }
        ],
        currentImg : 0
    },
    methods : {
        prossimaImmagine: function() {
            this.currentImg++
        },
        precedenteImmagine : function () {
            this.currentImg--
        }
    }
});