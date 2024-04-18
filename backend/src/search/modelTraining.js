// import { NeuralNetwork } from 'brain.js';

// const trainModel = (data) => {
//     if (!data || !data.length) {
//         throw new Error('Invalid data inputs or labels');
//     }

//     const cleanedData = data.map(entry => ({
//         input: entry.input,
//         output: { [entry.output.category]: 1 } // Sử dụng tên category làm key và đặt giá trị là 1
//     }));

//     const model = new NeuralNetwork();
//     model.train(cleanedData);

//     return model;
// };

// export { trainModel };
