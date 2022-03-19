export const addLocationToBookings = (bookedLocations, locationToAdd) => {
  const existingLocation = bookedLocations.find(
    (booking) => booking.id === locationToAdd.id
  );
    if (existingLocation) {
      alert("Location already booked");
      return [...bookedLocations]
    }
    
    return [...bookedLocations, locationToAdd]
};

export const removeLocationFromBookings = (bookedLocations, locationToRemove) => {
    return bookedLocations.filter(booking => booking.id !== locationToRemove.id)
}