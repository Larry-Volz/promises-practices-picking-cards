window.onload = function() {

    axios.get(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(evt=> {
        
        return evt;
    })
    .then(evt2 => {

        let deckId = evt2.data.deck_id
        
        let btn = document.getElementsByTagName("button");
        btn[0].addEventListener("click", evt => {
            
            axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(card => {
                chosenCard = card.data.cards[0].image;
                document.querySelector("#flipOver").src=chosenCard;

            })
        })
    })

    



}
