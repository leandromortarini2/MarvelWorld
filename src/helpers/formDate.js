export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Verificamos si la fecha es válida
  if (isNaN(date.getTime())) {
    return "";
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(date);
};
