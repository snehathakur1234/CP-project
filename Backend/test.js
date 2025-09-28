// In your backend, create a test room
const Rooms = require('./Models/Rooms');

const createTestRoom = async () => {
    try {
        const room = new Rooms({
            id: 'A101',
            status: 'available',
            students: [],
            capacity: 2,
            current: 0
        });
        
        await room.save();
        console.log('Room created successfully:', room);
    } catch (err) {
        console.error('Error creating room:', err);
    }
};

// Call this function to test
createTestRoom();