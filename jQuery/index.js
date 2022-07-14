$(()=>{
    $("p").on('click',()=>{
      $("p").hide();
    });

    $('#footer-plus-icon').on('click',()=> {
      $('#footer-plus-icon').hide();
      $('#footer-minus-icon').show();
      $('#ul-toggle').show();
    })

    $('#footer-minus-icon').on('click',()=> {
      $('#footer-minus-icon').hide();
      $('#footer-plus-icon').show();
      $('#ul-toggle').hide();
    })
  });
