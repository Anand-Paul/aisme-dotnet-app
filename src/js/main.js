// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap";
import { initForms } from './forms';
import { initSidebar } from './sidebar';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

// sidebar functionality
initSidebar()

initForms()

// Your app code
console.log(`Hello ${process.env.HELLO}`);
