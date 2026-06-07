import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { getEvents } from "./date/eventsStore.js";

document.querySelector("#header").innerHTML = Header();
document.querySelector("#footer").innerHTML = Footer();

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

function renderEvents(events, container) {
  container.innerHTML = "";

  events.forEach((event) => {
    container.innerHTML += `
      <article class="event-card">
        <div class="event-card__image-wrapper">
          <img
            class="event-card__image"
            src="${event.image}"
            alt="${event.title}"
          >

          ${event.type === "online" ? `
            <span class="event-card__badge">
              <img
                class="event-card__badge-icon"
                src="./assets/svg/event/online.svg"
                alt="online"
              >
              Online Event
            </span>
          ` : ""}
        </div>

        <div class="event-card__content">
          <h3 class="event-card__title">
            ${event.title}
          </h3>

          <p class="event-card__category">
            ${event.category} (${event.distance} km)
          </p>

          <p class="event-card__date">
            <img
              class="event-card__icon"
              src="./assets/svg/event/data.svg"
              alt="Date"
            >
            ${formatEventDate(event.date)}
          </p>

          <div class="event-card__bottom">
            <span class="event-card__info">
              <img
                class="event-card__icon"
                src="./assets/svg/event/going.svg"
                alt="Going"
              >
              ${event.attendees} going
            </span>

            <span class="event-card__info">
              <img
                class="event-card__icon"
                src="./assets/svg/event/free.svg"
                alt="Free"
              >
              ${event.price}
            </span>
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

  const onlineEvents = events.filter((event) => {
    return event.section === "online";
  });

  renderEvents(nearEvents, nearEventsGrid);
  renderEvents(onlineEvents, onlineEventsGrid);
});