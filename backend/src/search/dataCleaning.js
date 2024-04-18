const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const cleanData = (data) => {
    // Shuffle the data array
    const shuffledData = shuffleArray(data);
    
    return shuffledData.map(category => {
        const input = {
            storageCapacity: (parseFloat(category.storageCapacity) || 0) /3,
            ram: parseFloat(category.ram) || 0,
            chipset: parseFloat(category.chipset.substring(1)) || 0,
            display: parseFloat(category.display.substring(0, category.display.length - 3)) || 0
        };
        const output = {
            category: category._id
        };

        return { input, output };
    });
};

export { cleanData };
