
const state = {
  eventList: []
}



const getEvents = async() => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-FTB-ET-WEB-FT/events`);
  // console.log(response)

  const eventObject = await response.json();

  // console.log(`The object!`, eventObject)
  const allEvents = eventObject.data;

  state.eventList = allEvents;
  renderEvents();

}

const renderEvents = () => {
  // grab the ol
  const ol = document.querySelector(`ol`);

  // erase old information in ol
  ol.innerHTML = ``;

  // go through each list on eventList
  state.eventList.forEach((singleEvent) => {

   // create li
    const li = document.createElement(`li`);

    // put event name in the li
    li.innerHTML = `<p>${singleEvent.name}</p> <p>${singleEvent.date}</p> <p>${singleEvent.location}</p> <p>${singleEvent.description}</p>`;

    // attach the li to the ol
    ol.append(li);
  })
}


getEvents();