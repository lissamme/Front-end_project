import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { getEvents } from "./date/eventsStore.js";

document.querySelector("#header").innerHTML = Header();
document.querySelector("#footer").innerHTML = Footer();

const eventsPageList = document.querySelector("#eventsPageList");

const dateFilter = document.querySelector("#dateFilter");
const typeFilter = document.querySelector("#typeFilter");
const distanceFilter = document.querySelector("#distanceFilter");
const categoryFilter = document.querySelector("#categoryFilter");

let allEvents = [];

function formatEventDate(date) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayNumber = date.getDate();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  return `${day}, ${month} ${dayNumber} · ${hours}:${minutes} ${period} UTC`;
}

function renderEventsPage(events) {
  eventsPageList.innerHTML = "";

  if (events.length === 0) {
    eventsPageList.innerHTML = `
      <p class="events-page__empty">
        No events found
      </p>
    `;
    return;
  }

  events.forEach((event) => {
    eventsPageList.innerHTML += `
      <article class="events-page-card">
        <div class="events-page-card__image-wrapper">
          <img
            class="events-page-card__image"
            src="${event.image}"
            alt="${event.title}"
          >
        </div>

        <div class="events-page-card__content">
          <p class="events-page-card__date">
            ${formatEventDate(event.date)}
          </p>

          <h2 class="events-page-card__title">
            ${event.title}
          </h2>

          <p class="events-page-card__category">
            ${event.category} (${event.distance} km)
          </p>

          <p class="events-page-card__attendees">
            ${event.attendees} attendees
          </p>
        </div>
      </article>
    `;
  });
}

function renderDateOptions(events) {
  const dates = [];

  events.forEach((event) => {
    const dateString = event.date.toDateString();

    if (!dates.includes(dateString)) {
      dates.push(dateString);
    }
  });

  dates.forEach((date) => {
    dateFilter.innerHTML += `
      <option value="${date}">
        ${date}
      </option>
    `;
  });
}

function filterEvents() {
  let filteredEvents = allEvents;

  if (dateFilter.value !== "all") {
    filteredEvents = filteredEvents.filter((event) => {
      return event.date.toDateString() === dateFilter.value;
    });
  }

  if (typeFilter.value !== "all") {
    filteredEvents = filteredEvents.filter((event) => {
      return event.type === typeFilter.value;
    });
  }

  if (distanceFilter.value !== "all") {
    filteredEvents = filteredEvents.filter((event) => {
      return event.distance <= Number(distanceFilter.value);
    });
  }

  if (categoryFilter.value !== "all") {
    filteredEvents = filteredEvents.filter((event) => {
      return event.category === categoryFilter.value;
    });
  }

  renderEventsPage(filteredEvents);
}

getEvents().then((events) => {
  allEvents = events;

  renderDateOptions(allEvents);
  renderEventsPage(allEvents);
});

dateFilter.addEventListener("change", filterEvents);
typeFilter.addEventListener("change", filterEvents);
distanceFilter.addEventListener("change", filterEvents);
categoryFilter.addEventListener("change", filterEvents);