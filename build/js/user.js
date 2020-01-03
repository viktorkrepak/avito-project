$(".search-form-container").on("click", function(e) {
  e.preventDefault();
});

$(".mobile-filters-btn").on("click", function() {
  $(".search-bottom-row").slideToggle(500);
});

$(".navbar-close-btn__mobile").on("click", function() {
  $(".navbar-collapse").removeClass("show");
});
$(document).mouseup(function(e) {
  let block = $(".navbar-collapse");
  if (!block.is(e.target) && block.has(e.target).length === 0) {
    block.removeClass("show");
  }
});
