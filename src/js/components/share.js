$(document).ready(function () {
  if (navigator.share) {
    button = $('#share');
    button.show().on('click', function () {
      navigator.share({
        title: $(this).data('title'),
        text: $(this).data('text'),
        url: $(this).data('url'),
      });
      return false;
    });
  }
});
