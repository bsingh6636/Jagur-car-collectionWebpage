document.addEventListener('DOMContentLoaded', () => {
    const vehicleModal = document.getElementById('vehicleDetailsModal');
    const ownerModal = document.getElementById('ownerDetailsModal');
    const exploreModal = document.getElementById('exploreDetailsModal');
    const vehicleSpan = document.getElementsByClassName('close')[0];
    const ownerSpan = document.getElementsByClassName('close')[1];
    const exploreSpan = document.getElementsByClassName('close')[2];

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
            title: 'John Doe',
            description: 'Proud owner of a Jaguar F-TYPE. John shares his exhilarating experience of driving the F-TYPE through the winding roads of the countryside. The car’s powerful engine and sleek design make every journey unforgettable.',
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        owner2: {
            title: 'Jane Smith',
            description: 'Enjoying the performance of a Jaguar F-PACE. Jane loves the F-PACE for its perfect blend of luxury and practicality. She uses it for both daily commutes and weekend adventures with her family.',
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        owner3: {
            title: 'Robert Brown',
            description: 'Thrilled with his Jaguar I-PACE. As an early adopter of electric vehicles, Robert is excited about the I-PACE’s cutting-edge technology and its impressive range. He enjoys the quiet, smooth rides and the futuristic features.',
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
    };

    const explores = {
        explore1: {
            title: 'History',
            description: 'Discover the rich history of Jaguar, from its founding to its iconic models.',
            video: 'https://www.youtube.com/embed/Jt8Z8QHTVu8'
        },
        explore2: {
            title: 'Technology',
            description: 'Learn about the cutting-edge technology that powers Jaguar vehicles.',
            video: 'https://www.youtube.com/embed/gyU5vNzFEdM'
        },
        explore3: {
            title: 'Design',
            description: 'Explore the design philosophy that makes Jaguar cars stand out.',
            video: 'https://www.youtube.com/embed/Qoe8h-VY9_o'
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
        }
    };

    window.showExploreDetails = function(exploreId) {
        const explore = explores[exploreId];
        if (explore) {
            document.getElementById('exploreTitle').innerText = explore.title;
            document.getElementById('exploreDescription').innerText = explore.description;
            document.getElementById('exploreVideo').src = explore.video;
            exploreModal.style.display = 'block';
        }
    };

    vehicleSpan.onclick = function() {
        vehicleModal.style.display = 'none';
        document.getElementById('vehicleVideo').src = '';
    };

    ownerSpan.onclick = function() {
        ownerModal.style.display = 'none';
        document.getElementById('ownerVideo').src = '';
    };

    exploreSpan.onclick = function() {
        exploreModal.style.display = 'none';
        document.getElementById('exploreVideo').src = '';
    };

    window.onclick = function(event) {
        if (event.target == vehicleModal) {
            vehicleModal.style.display = 'none';
            document.getElementById('vehicleVideo').src = '';
        }
        if (event.target == ownerModal) {
            ownerModal.style.display = 'none';
            document.getElementById('ownerVideo').src = '';
        }
        if (event.target == exploreModal) {
            exploreModal.style.display = 'none';
            document.getElementById('exploreVideo').src = '';
        }
    };
});
