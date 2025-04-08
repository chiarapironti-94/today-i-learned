import { initialFacts } from "./data.js";
import { drawFacts } from "./utils.js";

// CONSTANTS
const TXT_SHARE_FACT = "Share a fact";
const TXT_CLOSE = "Close";

const $btnShareFact: JQuery<HTMLElement> = $(".js-open-form");
const $form: JQuery<HTMLFormElement> = $("form.fact-form");
const $factsList: JQuery<HTMLUListElement> = $(".js-facts-list");

/* const res = fetch("https://vthkgebucvwdygrgthfa.supabase.co/rest/v1/facts", {
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0aGtnZWJ1Y3Z3ZHlncmd0aGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDEwODAsImV4cCI6MjA1OTY3NzA4MH0.P7ts7s1_6hEdNHkrmcectZL543429OY2gIQIEcBU3tc",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0aGtnZWJ1Y3Z3ZHlncmd0aGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMDEwODAsImV4cCI6MjA1OTY3NzA4MH0.P7ts7s1_6hEdNHkrmcectZL543429OY2gIQIEcBU3tc",
  },
}); */

$factsList.empty();
const factsHTML = drawFacts(initialFacts);
$factsList.append(factsHTML.join(""));

$btnShareFact.on("click", function () {
  const $this = $(this);
  const currentText = $this.text();
  $this.text(currentText === TXT_SHARE_FACT ? TXT_CLOSE : TXT_SHARE_FACT);
  $form.toggleClass("hidden");
});
