import React from "react";

export default function Bai8() {
  const currentMonth = new Date().getMonth();

  const getSeason = (month: number): string => {
    if (month >= 0 && month <= 2) {
      return "Xuân";
    } else if (month >= 3 && month <= 5) {
      return "Hạ";
    } else if (month >= 6 && month <= 8) {
      return "Thu";
    } else {
      return "Đông";
    }
  };

  const currentSeason = getSeason(currentMonth);

  return (
    <div>
      <b>Bây giờ là tháng: {currentMonth}</b>
      <br />
      <b>Mùa hiện tại là: {currentSeason}</b>
    </div>
  );
}
