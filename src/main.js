import {createBoardTemplate} from './components/board.js';
import {createFilterTemplate} from './components/filter.js';
import {createLoadButton} from './components/load-button.js';
import {createMenuTemplate} from './components/menu.js';
import {editTaskTemplate} from './components/task-edit.js';
import {createTaskTemplate} from './components/task.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main`);
const mainControlElement = mainElement.querySelector(`.main__control`);

render(mainControlElement, createMenuTemplate());
render(mainElement, createFilterTemplate());
render(mainElement, createBoardTemplate());

const taskListElement = document.querySelector(`.board__tasks`);
render(taskListElement, editTaskTemplate());

const TASK_COUNT = 2;

new Array(TASK_COUNT).fill(``).forEach(()=>{
  render(taskListElement, createTaskTemplate());
});

const loadingButton = mainElement.querySelector(`.board`);
render(loadingButton, createLoadButton());
