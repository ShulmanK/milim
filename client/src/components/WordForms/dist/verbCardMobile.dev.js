"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jewish = _interopRequireDefault(require("../../icons/jewish.svg"));

var _translate = _interopRequireDefault(require("../../icons/translate.svg"));

var _mars = _interopRequireDefault(require("../../icons/mars.svg"));

var _female = _interopRequireDefault(require("../../icons/female.svg"));

var _user = _interopRequireDefault(require("../../icons/user.svg"));

var _group = _interopRequireDefault(require("../../icons/group.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formConfigurationMobile;

var _default = formConfigurationMobile = [{
  type: "input",
  name: "future_man_1st",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "14",
  rowEnd: "14",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "input",
  name: "future_man_1st_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "15",
  rowEnd: "16",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "input",
  name: "future_man_plural_1st",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "14",
  rowEnd: "15",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_man_plural_1st_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "15",
  rowEnd: "16",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_man_plural_2nd",
  time: "future",
  rowStart: "16",
  rowEnd: "17",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_man_plural_2nd_transcription",
  time: "future",
  rowStart: "17",
  rowEnd: "18",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_man_plural_3nd",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "18",
  rowEnd: "19",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_man_plural_3nd_transcription",
  time: "future",
  rowStart: "19",
  rowEnd: "20",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_man_singular_2nd",
  time: "future",
  rowStart: "16",
  rowEnd: "17",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "future_man_singular_2nd_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "17",
  rowEnd: "18",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "future_man_singular_3nd",
  time: "future",
  rowStart: "18",
  rowEnd: "19",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_man_singular_3nd_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "19",
  rowEnd: "20",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_woman_plural_2nd",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "16",
  rowEnd: "17",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_woman_plural_2nd_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "17",
  rowEnd: "18",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_woman_plural_3nd",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "18",
  rowEnd: "19",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_woman_plural_3nd_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "19",
  rowEnd: "20",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "future_woman_singular_2nd",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "7",
  rowEnd: "8",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "future_woman_singular_2nd_transcription",
  time: "future",
  rowStart: "16",
  rowEnd: "17",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "future_woman_singular_3nd",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "17",
  rowEnd: "18",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "future_woman_singular_3nd_transcription",
  time: "future",
  label: "",
  placeholder: "",
  rowStart: "18",
  rowEnd: "19",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "imperative_man_plural",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "21",
  rowEnd: "22",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "imperative_man_plural_transcription",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "22",
  rowEnd: "23",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "imperative_man_singular",
  time: "imperative",
  rowStart: "21",
  rowEnd: "22",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "imperative_man_singular_transcription",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "22",
  rowEnd: "23",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "imperative_woman_plural",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "21",
  rowEnd: "22",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "imperative_woman_plural_transcription",
  time: "imperative",
  rowStart: "22",
  rowEnd: "23",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "imperative_woman_singular",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "21",
  rowEnd: "22",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "imperative_woman_singular_transcription",
  time: "imperative",
  label: "",
  placeholder: "",
  rowStart: "22",
  rowEnd: "23",
  columnStart: "2",
  columnEnd: "3"
}, //   {
//     type: "input",
//     name: "infinitive",
//     time: "infinitive",
//     label: "",
//     placeholder: "",
//     rowStart: "1",
//     rowEnd: "2",
//     columnStart: "3",
//     columnEnd: "5",
//   },
//   {
//     type: "input",
//     name: "infinitive_transcription",
//     time: "infinitive",
//     label: "",
//     placeholder: "",
//     rowStart: "1",
//     rowEnd: "2",
//     columnStart: "6",
//     columnEnd: "8",
//   },
{
  type: "input",
  name: "past_man_1st",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "7",
  rowEnd: "8",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "input",
  name: "past_man_1st_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "8",
  rowEnd: "9",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "input",
  name: "past_man_plural_1st",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "7",
  rowEnd: "8",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_man_plural_1st_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "8",
  rowEnd: "9",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_man_plural_2nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "9",
  rowEnd: "10",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_man_plural_2nd_transcription",
  time: "past",
  rowStart: "10",
  rowEnd: "11",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "past_man_singular_2nd",
  time: "past",
  rowStart: "9",
  rowEnd: "10",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "past_man_singular_2nd_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "10",
  rowEnd: "11",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "past_man_singular_3nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "11",
  rowEnd: "12",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "past_man_singular_3nd_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "12",
  rowEnd: "13",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "past_plural_3nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "11",
  rowEnd: "12",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_plural_3nd_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "12",
  rowEnd: "13",
  columnStart: "3",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_woman_plural_2nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "9",
  rowEnd: "10",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_woman_plural_2nd_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "10",
  rowEnd: "11",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "past_woman_singular_2nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "9",
  rowEnd: "10",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "past_woman_singular_2nd_transcription",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "10",
  rowEnd: "11",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "past_woman_singular_3nd",
  time: "past",
  label: "",
  placeholder: "",
  rowStart: "11",
  rowEnd: "12",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "past_woman_singular_3nd_transcription",
  time: "past",
  rowStart: "12",
  rowEnd: "13",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "present_man_plural",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "4",
  rowEnd: "5",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "present_man_plural_transcription",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "5",
  rowEnd: "6",
  columnStart: "3",
  columnEnd: "4"
}, {
  type: "input",
  name: "present_man_singular",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "4",
  rowEnd: "5",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "present_man_singular_transcription",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "5",
  rowEnd: "6",
  columnStart: "1",
  columnEnd: "2"
}, {
  type: "input",
  name: "present_woman_plural",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "4",
  rowEnd: "5",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "present_woman_plural_transcription",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "5",
  rowEnd: "6",
  columnStart: "4",
  columnEnd: "5"
}, {
  type: "input",
  name: "present_woman_singular",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "4",
  rowEnd: "5",
  columnStart: "2",
  columnEnd: "3"
}, {
  type: "input",
  name: "present_woman_singular_transcription",
  time: "present",
  label: "",
  placeholder: "",
  rowStart: "5",
  rowEnd: "6",
  columnStart: "2",
  columnEnd: "3"
}, // -------------------------ICONS------------------------------
{
  type: "icon",
  alt: "person",
  iconSrc: _user["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "icon",
  alt: "people",
  iconSrc: _group["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "icon",
  alt: "man",
  iconSrc: _mars["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "icon",
  alt: "woman",
  iconSrc: _female["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "icon",
  alt: "man",
  iconSrc: _mars["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}, {
  type: "icon",
  alt: "woman",
  iconSrc: _female["default"],
  rowStart: "1",
  rowEnd: "2",
  columnStart: "1",
  columnEnd: "3"
}];

exports["default"] = _default;