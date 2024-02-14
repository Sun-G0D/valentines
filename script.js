if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } /* else {
          entry.target.classList.remove('show');
        } */
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const timeSinceKnown = new Date(2023, 5, 21)
const timeSinceDate = new Date(2023, 7, 9, 2, 31)
const timeSinceMarried = 0;

function secsElapsed(timeSince) {
  return (new Date() - timeSince)/1000;
}

setInterval(function () {
  var daysKnown = Math.floor(secsElapsed(timeSinceKnown)/86400);
  document.getElementById("since_known").innerText = "known each other for " + daysKnown + " days";
  var daysDated = Math.floor(secsElapsed(timeSinceDate)/86400);
  document.getElementById("since_date-day").innerText = daysDated + " days";
  var hrsDated = Math.floor((secsElapsed(timeSinceDate)/3600)-daysDated*24);
  var minsDated = Math.floor((secsElapsed(timeSinceDate)/60)-daysDated*24*60-hrsDated*60);
  document.getElementById("since_date-hr").innerText = hrsDated + " hours";
  document.getElementById("since_date-min").innerText = minsDated + " minutes";
}, 1000);