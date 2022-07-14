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
    if (window.matchMedia('(min-width: 768px)').matches) {
      $('#footer-minus-icon').hide();
      $('#footer-plus-icon').hide();
      $('#ul-toggle').show();
  }
  else {
    $('#footer-minus-icon').hide();
      $('#footer-plus-icon').show();
      $('#ul-toggle').hide();
  }
  });
