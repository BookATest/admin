<template>
  <div class="table">
    <table cellpadding="8" cellspacing="8">
      <thead>
        <tr>
          <th colspan="1"></th>
          <th colspan="1"><span>Monday</span></th>
          <th colspan="1"><span>Tuesday</span></th>
          <th colspan="1"><span>Wednesday</span></th>
          <th colspan="1"><span>Thursday</span></th>
          <th colspan="1"><span>Friday</span></th>
          <th colspan="1"><span>Saturday</span></th>
          <th colspan="1"><span>Sunday</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Morning</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">8:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="8:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="8:00am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">8:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="8:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="8:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="8:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="8:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="8:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Saturday 17 March" data-time="8:30am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="8:30am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">9:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open" data-type="booked" data-date="Monday 12 March" data-time="9:00am" data-patient="Libby Bruce" data-with="Ethan Tomlinson" data-where="Mesmac Leeds"><span>ET</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open" data-type="booked" data-date="Tueday 13 March" data-time="9:00am" data-patient="Kyle Cooke" data-with="Robert Walters" data-where="Mesmac Leeds"><span>RW</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open" data-type="booked" data-date="Wednesday 14 March" data-time="9:00am" data-patient="Melissa Macdonald" data-with="Demi Lawson" data-where="Mesmac Leeds"><span>DL</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Thursday 15 March" data-time="9:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Friday 16 March" data-time="9:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Saturday 17 March" data-time="9:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Sunday 18 March" data-time="9:00am"><span>LM</span></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">9:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="9:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="9:30am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">10:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="10:00am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="10:00am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">10:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open" data-type="available" data-date="Monday 12 March" data-time="10:30am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open" data-type="available" data-date="Tueday 13 March" data-time="10:30am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials button__calendar--available-cw-initials--default js--popup-open" data-type="available" data-date="Wednesday 14 March" data-time="10:30am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="10:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="10:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="10:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="10:30am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">11:00</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Monday 12 March" data-time="11:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Tueday 13 March" data-time="11:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Wednesday 14 March" data-time="11:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--booked-cw-initials-repeat button__calendar--booked-cw-initials-repeat--default js--popup-open" data-type="booked" data-date="Thursday 15 March" data-time="11:00am" data-patient="Melissa Macdonald" data-with="Demi Lawson" data-where="Mesmac Leeds"><span>DL</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Friday 16 March" data-time="11:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--available-cw-initials-repeat button__calendar--available-cw-initials-repeat--default js--popup-open" data-type="available" data-date="Saturday 16 March" data-time="11:00am"><span>LM</span></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="11:00am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">11:30</span><span class="time time--b">am</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="11:30am" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="11:30am" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Afternoon</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">12:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="12:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="12:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">12:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="12:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="12:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">1:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="1:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="1:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">1:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="1:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="1:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">2:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="2:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="2:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">2:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="2:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="2:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">3:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="3:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="3:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">3:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="3:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="3:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">4:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="4:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="4:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">4:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="4:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="4:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"></td>
          <td colspan="7">
            <div class="pod-title"><span>Evening</span></div>
          </td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">5:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="5:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="5:00pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">5:30</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="5:30pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="5:30pm" disabled></button></td>
        </tr>
        <tr>
          <td colspan="1"><span class="time time--a">6:00</span><span class="time time--b">pm</span></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Monday 12 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Tuesday 13 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Wednesday 14 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Thursday 15 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Friday 16 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Saturday 17 March" data-time="6:00pm" disabled></button></td>
          <td colspan="1"><button class="button button__calendar button__calendar--not-available js--popup-open" data-type="add-availability" data-date="Sunday 18 March" data-time="6:00pm" disabled></button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="1">
            <ul>
              <li><span>Not available</span></li>
              <li><span>Available</span></li>
              <li><span>Booked</span></li>
            </ul>
            <button class="button button__secondary button__secondary--b" onclick="location.href = '/appointments/manage-my-appointments.html';"><span>Manage my appointments</span></button>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
};
</script>
