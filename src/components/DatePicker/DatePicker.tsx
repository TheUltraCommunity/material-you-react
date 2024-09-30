"use client";
import React, { useState } from "react";

const formatDate = (date: Date) => {
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(
    selectedDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    selectedDate.getFullYear()
  );
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setShowPicker(false);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const goToNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="date-picker-container">
      <div className="date-input" onClick={() => setShowPicker(!showPicker)}>
        <input
          title="Date"
          type="text"
          value={formatDate(selectedDate)}
          readOnly
        />
        <button>
          <span role="img" aria-label="calendar">
            📅
          </span>
        </button>
      </div>

      {showPicker && (
        <div className="date-picker">
          <div className="month-year-parent">
            <div className="month-year-selector">
              <span
                onClick={goToPreviousYear}
                className="material-symbols-outlined"
              >
                chevron_left
              </span>
              <select
                title="currenYear"
                value={currentYear}
                onChange={(e) => setCurrentYear(Number(e.target.value))}
              >
                {Array.from({ length: 20 }, (_, i) => currentYear - 10 + i).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
              <span
                onClick={goToNextYear}
                className="material-symbols-outlined"
              >
                chevron_right
              </span>
            </div>

            <div className="month-year-selector">
              <span
                onClick={goToPreviousMonth}
                className="material-symbols-outlined"
              >
                chevron_left
              </span>
              <select
                title="currenMonth"
                value={currentMonth}
                onChange={(e) => setCurrentMonth(Number(e.target.value))}
              >
                {Array.from({ length: 12 }).map((_, idx) => (
                  <option key={idx} value={idx}>
                    {new Date(0, idx).toLocaleString("default", {
                      month: "short",
                    })}
                  </option>
                ))}
              </select>
              <span
                onClick={goToNextMonth}
                className="material-symbols-outlined"
              >
                chevron_right
              </span>
            </div>
          </div>

          <div className="calendar-grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
            {Array.from({
              length: new Date(currentYear, currentMonth, 1).getDay(),
            }).map((_, idx) => (
              <div key={idx} className="empty-cell"></div>
            ))}
            {Array.from({
              length: getDaysInMonth(currentYear, currentMonth),
            }).map((_, day) => (
              <div
                key={day}
                className={`day-cell ${
                  selectedDate.getDate() === day + 1 &&
                  selectedDate.getMonth() === currentMonth &&
                  selectedDate.getFullYear() === currentYear
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleDateClick(day + 1)}
              >
                {day + 1}
              </div>
            ))}
          </div>
          <div className="picker-footer">
            <button onClick={() => setShowPicker(false)}>Cancel</button>
            <button onClick={() => setShowPicker(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
