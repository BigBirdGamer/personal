import "./style.css";
import $ from "jquery";

//? Data
const contacts = [
  { name: "Slimer", address: "The Library" },
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];

const makeTableHeader = () => {
  const $thead = $("<thead>");

  const $tr = $("<tr>");
  $thead.append($tr);

  const $th = $("<th>").text("Name");
  $tr.append($th);

  const $th2 = $("<th>").text("Location");
  $tr.append($th2);

  return $thead;
};

const makeRow = (name, location) => {
  const $tr = $("<tr>");

  const $td = $("<td>").text(name);
  $tr.append($td);

  const $td2 = $("<td>").text(location);
  $tr.append($td2);

  return $tr;
};

const makeTable = (contacts) => {
  const $table = $("<table border='1'>");
  $table.append(makeTableHeader());

  const $tbody = $("<tbody>");
  $table.append($tbody);

  for (const contact of contacts) {

    $tbody.append(makeRow(contact.name, contact.address));
  }

  $("body").append($table);
};

//? some code

$(() => {
  makeTable(contacts);

});
