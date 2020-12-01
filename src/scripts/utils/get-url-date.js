export default function getUrlDate(){
  const currentDate = new Date();
  const previousDateInMs = 6 * 86400000;
  const previousDate = new Date(currentDate.getTime() - previousDateInMs);
  const fromDate = previousDate.toISOString().slice(0, 10);
  const toDate = currentDate.toISOString().slice(0,10);
  return { fromDate, toDate };
}
