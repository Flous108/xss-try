fetch(`https://kq_outfitbag/LoadOutfit`, {
    method: 'POST',
    body: JSON.stringify({
        id: "player",
        index: "932"
    })
})
