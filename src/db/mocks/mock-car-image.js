const base64Data = 'data:image/png;base64,aHR0cHM6Ly9zdGF0aWMubW9uaXRldXJhdXRvbW9iaWxlLmJlL2ltZ2NvbnRyb2wvaW1hZ2VzX3RtcC9jbGllbnRzL21vbml0ZXVyL2M2ODAtZDQ2NS9jb250ZW50L21lZGlhcy9pbWFnZXMvbmV3cy80MTAwMC82MDAvMjAvdnctaWQyLWFsbC1jb25jZXB0LTAuanBn';
const buffer = Buffer.from(base64Data.split(",")[1], 'base64');

const carImage = [
    {
        image: buffer,
        carId: 1
    },
    {
        image: buffer,
        carId: 2
    },
    {
        image: buffer,
        carId: 2
    },
   ]
   
   module.exports = carImage;