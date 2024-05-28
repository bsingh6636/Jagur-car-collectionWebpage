

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('vehicleDetailsModal');
    const span = document.getElementsByClassName('close')[0];

    const vehicles = {
        vehicle1: {
            title: 'Jaguar F-PACE',
            description: 'Luxury performance SUV offering practicality and efficiency.',
            video: 'https://www.youtube.com/embed/2X6cGSesQqw'
        },
        vehicle2: {
            title: 'Jaguar E-PACE',
            description: 'Jaguar’s first compact SUV is a unique combination of looks, agility and dynamic driving.',
            video: 'https://www.youtube.com/embed/1TG1IaxDWGQ'
        },
        vehicle3: {
            title: 'Jaguar I-PACE',
            description: 'Introducing Jaguar\'s first all-electric performance SUV.',
            video: 'https://www.youtube.com/embed/bYybncHRg2A'
        },
        vehicle4: {
            title: 'Jaguar F-TYPE',
            description: 'Pulse-quickening, pure Jaguar sports car.',
            video: 'https://www.youtube.com/embed/VURb2SG2QrU'
        },
        vehicle5: {
            title: 'Jaguar XE',
            description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced.',
            video: 'https://www.youtube.com/embed/2sWOuNnONTo?start=1'
        },
        vehicle6: {
            title: 'Jaguar XF',
            description: 'Luxury business saloon with distinctive design, dynamic drive and state-of-the-art technologies.',
            video: 'https://www.youtube.com/embed/hQhJhiCaNhU'
        }
    };

    window.showDetails = function(vehicleId) {
        const vehicle = vehicles[vehicleId];
        if (vehicle) {
            document.getElementById('vehicleTitle').innerText = vehicle.title;
            document.getElementById('vehicleDescription').innerText = vehicle.description;
            document.getElementById('vehicleVideo').src = vehicle.video;
            modal.style.display = 'block';
        }
    };

    span.onclick = function() {
        modal.style.display = 'none';
        document.getElementById('vehicleVideo').src = '';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.getElementById('vehicleVideo').src = '';
        }
    };
});
