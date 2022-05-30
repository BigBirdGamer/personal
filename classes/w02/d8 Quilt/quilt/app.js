$(() => {
    const addH2 = () => {
      $h2 = $('<h2>').text("Just getting started")
      $('.body').prepend($h2)
    }
  
    addH2()
  }) // close document on ready