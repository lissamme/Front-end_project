import { Header } from "./components/header.js";
// import { Footer } from "./components/footer.js";
import { getEvents } from "./date/eventsStore.js";

document.querySelector("#header").innerHTML = Header();
// document.querySelector("#footer").innerHTML = Footer();

const eventsGrid = document.querySelector("#eventsGrid");

function formatEventDate(date) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayNumber = date.getDate();

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${day}, ${month} ${dayNumber} · ${hours}:${formattedMinutes} ${period} PDT`;
}

function renderEvents(events) {
  eventsGrid.innerHTML = "";

  events.forEach((event) => {
    eventsGrid.innerHTML += `
        <article class="event-card">
            <img
                class="event-card__image"
                src="${event.image}"
                alt="${event.title}"
            >

            <div class="event-card__content">

                <h3 class="event-card__title">
                ${event.title}
                </h3>

                <p class="event-card__category">
                ${event.category} (${event.distance} km)
                </p>

                <p class="event-card__date">
                ${formatEventDate(event.date)}
                </p>

                <div class="event-card__bottom">
                <span>${event.attendees} going</span>
                <span>${event.price}</span>
                </div>

            </div>
        </article>
    `;
  });
}

getEvents().then((events) => {
  const nearEvents = events.filter((event) => {
    return event.section === "near";
  });

  renderEvents(nearEvents);
});