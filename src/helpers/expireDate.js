export const handleExpireDate = async (date) => {
    const date_clone = new Date(date);
    let day = date_clone.getDate();
    let month = date_clone.getMonth();
    let year = date_clone.getFullYear();
    month += 6;
    if (month >= 12) {
        month -= 12;
        year += 1;
    }
    const lastDayMonth = new Date(year, month + 1, 0).getDate();
    if (day > lastDayMonth) {
        day = lastDayMonth;
    }
    date_clone.setDate(day);
    date_clone.setMonth(month);
    date_clone.setFullYear(year);

    return date_clone;
};
