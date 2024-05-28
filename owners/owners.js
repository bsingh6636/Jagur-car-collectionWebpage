document.addEventListener('DOMContentLoaded', () => {
    const vehicleModal = document.getElementById('vehicleDetailsModal');
    const ownerModal = document.getElementById('ownerDetailsModal');
    const vehicleSpan = document.getElementsByClassName('close')[0];
    const ownerSpan = document.getElementsByClassName('close')[1];

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

    const owners = {
        owner1: {
            title: 'William Lyons',
            description: 'Proud owner of a Jaguar F-TYPE. John shares his exhilarating experience of driving the F-TYPE through the winding roads of the countryside. The car’s powerful engine and sleek design make every journey unforgettable.',
            video: 'https://www.youtube.com/watch?v=SZ8oLTEaYnM'
        },
        owner2: {
            title: 'William Walmsley',
            description: 'Enjoying the performance of a Jaguar F-PACE. Jane loves the F-PACE for its perfect blend of luxury and practicality. She uses it for both daily commutes and weekend adventures with her family.',
            video: 'https://www.youtube.com/watch?v=9o3yP8lpis8'
        },
        owner3: {
            title: 'Adrian Mardell',
            description: 'Thrilled with his Jaguar I-PACE. As an early adopter of electric vehicles, Robert is excited about the I-PACE’s cutting-edge technology and its impressive range. He enjoys the quiet, smooth rides and the futuristic features.',
            video: 'https://www.youtube.com/watch?v=aEyrinOAHLI'
        }
    };

    window.showDetails = function(vehicleId) {
        const vehicle = vehicles[vehicleId];
        if (vehicle) {
            document.getElementById('vehicleTitle').innerText = vehicle.title;
            document.getElementById('vehicleDescription').innerText = vehicle.description;
            document.getElementById('vehicleVideo').src = vehicle.video;
            vehicleModal.style.display = 'block';
        }
    };

    window.showOwnerDetails = function(ownerId) {
        const owner = owners[ownerId];
        if (owner) {
            document.getElementById('ownerTitle').innerText = owner.title;
            document.getElementById('ownerDescription').innerText = owner.description;
            document.getElementById('ownerVideo').src = owner.video;
            ownerModal.style.display = 'block';
            // Attach the stopPropagation function directly to the YouTube iframe onclick event
            document.getElementById('ownerVideo').onclick = function(event) {
                event.stopPropagation();
            };
        }
    };

    vehicleSpan.onclick = function() {
        vehicleModal.style.display = 'none';
        document.getElementById('vehicleVideo').src = '';
    };

    ownerSpan.onclick = function() {
        ownerModal.style.display = 'none';
        document.getElementById('ownerVideo').src = '';
        // Remove the stopPropagation function when closing the modal
        document.getElementById('ownerVideo').onclick = null;
    };

    window.onclick = function(event) {
        if (event.target == vehicleModal) {
            vehicleModal.style.display = 'none';
            document.getElementById('vehicleVideo').src = '';
        }
        if (event.target == ownerModal) {
            ownerModal.style.display = 'none';
            document.getElementById('ownerVideo').src = '';
            // Remove the stopPropagation function when closing the modal
            document.getElementById('ownerVideo').onclick = null;
        }
    };
});
