document.querySelector('.button-filter-dev').addEventListener('click', function(){
  if (!currentFilters.school) {
    currentFilters.school = 'Школа мобильной разработки'
  } else {
    currentFilters.school = null
  }
  applyFilters()
})

var currentFilters = {school: null, speaker: null, dates: null}

function checkItem(item) {
  console.log('it works')
  if (currentFilters.school) {
    var flag = false
    var schoolName = item.querySelectorAll('.school-name')
    for (var i = 0; i < schoolName.length; i++) {
      var ok = schoolName[i].innerHTML === currentFilters.school
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
}
