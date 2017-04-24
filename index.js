document.querySelector('.filter-input').addEventListener('keydown', function(e){
  currentFilters.filters = e.target.value || null
  applyFilters()
})

var currentFilters = {filters: null}

function checkItem(item) {
  console.log('it works')
  if (currentFilters.filters) {
    var flag = false
    var filterName = item.querySelectorAll('.searchable')
    for (var i = 0; i < filterName.length; i++) {
      var ok = filterName[i].innerHTML.includes(currentFilters.filters)
      flag = flag || ok
    }
    if (!flag) {
      return false
    }
  }
  return true
}

function applyFilters() {
  var allEvents = document.querySelectorAll('.table-row')
  for (var i = 0; i < allEvents.length; i++) {
    var ok = checkItem(allEvents[i])
    allEvents[i].classList.toggle('hidden', !ok)
  }
};
