export const dateToday = () => {
    const dt = new Date();
    const yyyy = dt.getFullYear().toString().padStart(4, '0');
    const MM = (dt.getMonth() + 1).toString().padStart(2, '0');
    const dd = dt.getDate().toString().padStart(2, '0');
    const currentTime = `${dd}/${MM}/${yyyy}`;
    return currentTime;
  };
  