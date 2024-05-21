export default function DateDisplay() {
  const date = new Date();
  const options = { day: "numeric", month: "long" };
  const today = new Intl.DateTimeFormat("en-US", options).format(date);
  const currentDay = date.getDate();
  const days_of_the_weerk = [
    { name: "Sun", date: "" },
    { name: "Mon", date: "" },
    { name: "Tue", date: "" },
    { name: "Wed", date: "" },
    { name: "Thu", date: "" },
    { name: "Fri", date: "" },
    { name: "Sat", date: "" },
  ];
  //  the week
  function getDaysOfWeek() {
    const today = new Date();
    const currentDay = today.getDay();
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - currentDay);
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(firstDayOfWeek);
      day.setDate(firstDayOfWeek.getDate() + i);
      days_of_the_weerk[i].date = day.getDate().toString();
      daysOfWeek.push(day);
    }
    return daysOfWeek;
  }
  getDaysOfWeek();

  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-3xl font-bold ">Today, {today}</h1>
      </div>
      <div className="grid grid-cols-7 gap-1 text-lg">
        {days_of_the_weerk.map((day) => (
          <div
            key={day.name}
            className="flex flex-col gap-2 text-center font-semibold"
          >
            <p className="">{day.name}</p>

            <p
              className={`${
                Number(day.date) == currentDay &&
                "bg-indigo-500 font-bold  border-indigo-400 border-2"
              } rounded-lg p-2  hover:bg-indigo-400 flex-1 cursor-pointer`}
            >
              {day.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
